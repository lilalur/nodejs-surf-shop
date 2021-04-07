const Post = require('../models/post');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'petercs',
    api_key: '649292116664746',
    api_secret: process.env.CLOUDINARY_SECRET
});

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
        req.body.post.images = [];
        for(const file of req.files) {
            let image = await cloudinary.v2.uploader.upload(file.path);
            req.body.post.images.push({ 
                url: image.secure_url,
                public_id: image.public_id
            });
        }
        // use req.body to create a new posts
        let post = await Post.create(req.body.post);
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
    },
    // Post Update
    async postUpdate(req, res, next) {
        // handle any deletion on existing images
        
        // handle upload of any new images
        let post = await Post.findByIdAndUpdate(req.params.id, req.body.post, {new: true});
        res.redirect(`/posts/${post.id}`);
    },
    // Post Delete
    async postDelete(req, res, next) {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/posts');
    },
}