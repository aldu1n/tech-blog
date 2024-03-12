const { Comment } = require('../models');

const commentData = [
    {
        comment:  "Exciting times ahead! Can't wait to see how quantum computing transforms industries and accelerates scientific discoveries.",
        user_id: 4,
        blogpost_id: 1,
        
    },
    {
        comment: "I'm thrilled about the possibilities 5G brings, but we must ensure equitable access to these advancements to bridge the digital divide.",
        user_id: 3,
        blogpost_id: 2,
        
    },
    {
        comment: "As long as patient privacy and data security are prioritized, AI in healthcare can truly be a game-changer for both medical professionals and patients.",
        user_id: 4,
        blogpost_id: 3,
        
    },
    {
        comment: "The potential for blockchain to revolutionize not just finance, but also governance and social systems, is immense. Exciting times ahead!",
        user_id: 1,
        blogpost_id: 4,
        
    },
    {
        comment: "Too Bad",
        user_id: 3,
        blogpost_id: 5,
        
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;