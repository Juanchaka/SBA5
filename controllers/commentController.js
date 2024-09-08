const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

exports.createComment = async (req, res) => {
  try {
    const newComment = new Comment({
      content: req.body.content,
      post: req.body.postId,
      author: req.body.author,
    });
    await newComment.save();
    await Post.findByIdAndUpdate(req.body.postId, {
      $push: { comments: newComment._id },
    }).exec();
    res.redirect(`/posts/${req.body.postId}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id).exec();
    res.redirect(`/posts/${req.query.postId}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


//Maybe add editing feature later