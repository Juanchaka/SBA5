const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.render('index', { posts });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author');
    const comments = await Comment.find({ post: post._id }).populate('author');
    res.render('post', { post, comments });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req