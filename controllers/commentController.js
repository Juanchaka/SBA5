import { getAllComments as fetchAllComments, getCommentById as fetchComment, createComment as addComment, updateComment as modifyComment, deleteComment as removeComment } from '../models/Comment.js';

export function getAllComments (req, res) {
  const comments = fetchAllComments();
  res.render("comment", { title: "Comments", comments });
};

export function getComment (req, res) {
  const comment = fetchComment(req.params.id);
  if (comment) {
    res.render("comment", { comment });
  } else {
    res.status(404).send("Comment not found");
  }
};

export function createComment (req, res) {
  const newComment = addComment(req.body);
  res.redirect(`/comments/${newComment.id}`);
};

export function updateComment (req, res) {
  const updatedComment = modifyComment(req.params.id, req.body);
  if (updatedComment) {
    res.redirect(`/comments/${updatedComment.id}`);
  } else {
    res.status(404).send("Comment not found");
  }
};

export function deleteComment (req, res) {
  removeComment(req.params.id);
  res.redirect("/comments");
};