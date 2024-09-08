const Post = require('../models/Post');
const User = require("../models/User");
const Comment = require('../models/Comment');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username").exec();
    res.render('index', { posts });
  } catch (err) {
    res.status(500).send(err.message);
  };
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "usernmae").exec();
    const comments = await Comment.find({ post: req.params.id }).populate("author", "username").exec();
    res.render('post', {post, comments});
  } catch (err) {
    res.status(500).send(err.message);
  };
};

exports.createPost = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        await newPost.save();
        res.redirect("/posts");
    } catch (err) {
        res.status(500).send(err.message)
    };
};

exports.updatePost = async () => {
    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec();
        res.redirect("/posts/${updatedPost.id}");
    } catch (err) {
        res.status(500).send(err.message);
    };
};

exports.deletePost = async () => {
    try {
        await Post.findByIdAndDelete(req.params.id).exec();
        res.redirect("/posts");
    } catch(err) {
        res.status(500).send(err.message);
    };
};