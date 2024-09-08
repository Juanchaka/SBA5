import { getAllComments as fetchAllComments, getCommentById as fetchComment, createComment as addComment, updateComment as modifyComment, deleteComment as removeComment } from '../models/Comment.js';

export async function homeComments() {
  return fetchAllComments();
}

export function getAllComments (req, res) {
  const comments = fetchAllComments();
  res.render("comment", { title: "Comments", comments });
};

export function getComment (req, res) {
  const comment = fetchComment(req.params.id);
  if (comment) {
    res.render("indexComment", { title: `Comment by ${comment.author}`, comment });
  } else {
    res.status(404).send("Comment not found");
  }
};

export function createCommentForm (req, res) {
  const success = req.query.success === "true";
  res.render("commentCreate", { title: "Create New Comment", success });
}

export function createComment (req, res) {
  const newComment = addComment(req.body);
  res.redirect(`/comments/create?success=true`);
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