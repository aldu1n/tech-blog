const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const data = await Comment.findAll({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const data = await Comment.create({
        comment: req.body.comment,
        blogpost_id: req.body.blogpost_id,
        user_id: req.session.user_id,
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.put('/:id', withAuth, async (req, res) => {
    try {
      const data = await Comment.update(
        {
          comment: req.body.comment,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      
      if (!data) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }

      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.delete('/:id', withAuth, async (req, res) => {
    try {
      const data = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!data) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }

      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;