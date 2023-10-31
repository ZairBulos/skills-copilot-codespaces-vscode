// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { check } = require('express-validator');

// Create comment
// api/comments
router.post('/',
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('comment', 'Comment must be less than 300 characters').isLength({ max: 300 })
    ],
    commentsController.createComment
);

// Get comments by publication
router.get('/',
    commentsController.getComments
);

// Update comment
router.put('/:id',
    commentsController.updateComment
);

// Delete comment
router.delete('/:id',
    commentsController.deleteComment
);

module.exports = router;