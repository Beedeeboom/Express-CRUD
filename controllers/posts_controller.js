const { getAllPosts, getPostById, addPost } = require('../utils/utilities');

const getPosts = function(req, res) {
    res.send(getAllPosts(req));
}

const getPost = function(req, res) {
    const id = req.params.id
    const post = getPostById(id);
    if (post) {
        res.send(post);
    } else {
        res.status(404).end();
    }
}

const createPost = function(req, res) {
    const post = addPost(req);
    if (post) {
        res.status(200).send(post);
    } else {
        res.status(500).send(`Error: ${req.error}`);
    }
}

module.exports = { getPosts, getPost, createPost }