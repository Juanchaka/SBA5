import db from '../db.js';

function getNextCommentId() {
  const comments = db.data.comments || [];
  if (comments.length === 0) return 1;
  return Math.max(...comments.map(comment => comment.id)) + 1;
}

export function getAllComments() {
  return db.data.comments || [];
}

export function getCommentById(id) {
  return (db.data.comments || []).find(comment => comment.id === parseInt(id, 10));
}

export function createComment(comment) {
  const newComment = { id: getNextCommentId(), ...comment };
  const comments = db.data.comments || [];
  comments.push(newComment);
  db.data.comments = comments;
  db.write();
  return newComment;
}

export function updateComment(id, updatedComment) {
  const comments = db.data.comments || [];
  const index = comments.findIndex(comment => comment.id === parseInt(id, 10));
  if (index !== -1) {
    comments[index] = { ...comments[index], ...updatedComment };
    db.data.comments = comments;
    db.write();
    return comments[index];
  }
  return null;
}

export function deleteComment(id) {
  db.data.comments = (db.data.comments || []).filter(comment => comment.id !== parseInt(id, 10));
  db.write();
}