const router = require('express').Router();
const { Comment, BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const data = await BlogPost.findAll({
        attributes: ['id', 'title', 'content', 'createdOn'],
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['comment', 'blogpost_id', 'user_id'],
            include: {
              model: User,
              attributes: ['username'],
            },
          },
        ],
      });

      const blogposts = data.map((blogpost) => blogpost.get ({plain: true}));
      res.render('homepage', {blogposts, loggedIn: req.session.logged_in});

    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/login', async (req, res) => {
    try {
      res.render('login', {
        loggedIn: req.session.logged_in,
        userName: req.session.user_name,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/dashboard', async (req, res) => {
    try {
      if(!req.session.logged_in) {
        res.render('login', {
          loggedIn: req.session.logged_in,
          userName: req.session.user_name,
        })
      } else {
        res.render('dashboard', {
          loggedIn: req.session.logged_in,
          userName: req.session.user_name,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;