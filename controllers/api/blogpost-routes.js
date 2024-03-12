const router = require('express').Router();
const { Comment, BlogPost, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
      const data = await BlogPost.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.put('/:id', async (req, res) => {
    try {
        const data = await BlogPost.update(
          {
            title: req.body.title,
            content: req.body.content,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        
        if (!data) {
          res.status(404).json({ message: 'No blog post found with this id!' });
          return;
        }
  
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json(err);
      }
    });


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const data = await BlogPost.destroy({
            where: {
            id: req.params.id,
            },
        });
    
        if (!data) {
          res.status(404).json({ message: 'No blog post found with this id!' });
          return;
        }
    
          res.status(200).json(data);
        } catch (err) {
          res.status(500).json(err);
        }
    });

    
    module.exports = router;