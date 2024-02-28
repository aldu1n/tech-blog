const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
    try {
      const data = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.user_id = data.id;
        req.session.user_name = data.username;
        req.session.logged_in = true;
  
        res.status(200).json(data);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.post('/login', async (req, res) => {
    try {
      const data = await User.findOne({ where: { username: req.body.username } });
  
      if (!data) {
        res.status(400).json({ message: 'Incorrect username, please try again' });
        return;
      }
  
      const validPassword = await bcrypt.compare(
        req.body.password,
        data.password,
      );
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = data.id;
        req.session.user_name = data.username;
        req.session.logged_in = true;
        
        res.json({ user: data, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.post('/logout', withAuth, (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  
router.delete('/delete', withAuth, async (req, res) => {
    try {
      const data = await User.destroy({
        where: {
          id: req.session.user_id,
        },
      });

      req.session.destroy(() => {
        res.status(204).end();
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports = router;