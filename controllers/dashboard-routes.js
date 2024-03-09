const router = require('express').Router();
const { Comment, BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
      const data = await BlogPost.findAll({
        where: {
            user_id: req.session.user_id,
          },
        attributes: ['id', 'title', 'content', 'createdOn'],
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['id', 'comment', 'blogpost_id', 'user_id'],
            include: {
              model: User,
              attributes: ['username'],
            },
          },
        ],
      });
      res.status(200).json(data);

    console.log(data);
      const blogposts = data.map((blogpost) => blogpost.get ({plain: true}));
      res.render('homepage', {blogposts, loggedIn: req.session.logged_in, username: req.session.user_name});

    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;