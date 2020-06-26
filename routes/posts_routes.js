const express = require('express');
const router = express.Router();
const { getPosts, getPost, createPost } = require('../controllers/posts_controller');

// GET /posts
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost)

// GET /posts/:id
// POST /posts
// PUT /posts/:id
// DELETE /posts/:id

module.exports = router;