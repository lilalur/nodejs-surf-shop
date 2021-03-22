const Post = require('../models/post');

module.exports = {
    // Post Index
    async postIndex(req, res, next) {
        let posts = await Post.find({});
        res.render('posts/index', { posts });
    },
    // Post New
    postNew(req, res, next) {
        res.render('posts/new');
    },
    // Post Create
    async postCreate(req, res, next) {
        // use req.body to create a new posts
        let post = await Post.create(req.body);
        res.redirect(`/posts/${post.id}`);
    },
    // Post Show
    async postShow(req, res, next) {
        let post = await Post.findById(req.params.id);
        res.render('posts/show', { post });
    },
    // Post Edit
    async postEdit(req, res, next) {
        let post = await Post.findById(req.params.id);
        res.render('posts/edit', { post });
    }
}