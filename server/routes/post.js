const express = require('express');
const router = express.Router();
const postController = require('../controller/post.controller');

router.post('/createPost', postController.createPost);
router.get('/getAllPosts', postController.getAllPosts);
router.get('/getPostById', postController.getPostById);

module.exports = router;