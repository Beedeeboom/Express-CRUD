const fs = require('fs');

let dataFile = '../data/blog_posts.json';
let blogPosts = require(dataFile);

const getAllPosts = function(req) {
    return blogPosts;
}

const getPostById = function(id) {
    const post = blogPosts[id];
    return post;
}

const addPost = function(req) {
    const date = Date.now();
    const id = getNextId();

    const post = {
        title: req.body.title,
        create_date: date,
        modified_date: date,
        username: req.body.username,
        content: req.body.content,
        category: req.body.category
    }

    blogPosts[id] = post;
    try {
        fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(blogPosts));
        return post;
    } catch (error) {
        req.error = error;
        return null;
    }
}

function getDataFileRelativeToApp(file) {
    return file.substring(file.lastIndexOf('../') + 3, file.length);
}

function getNextId() {
    const sortedIds = Object.keys(blogPosts).sort();
    const nextId = (sortedIds.length != 0) ? parseInt(sortedIds[sortedIds.length-1]) + 1 : 1;
    return String(nextId);
}

module.exports = { getAllPosts, getPostById, addPost }