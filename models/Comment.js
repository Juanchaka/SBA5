import db from '../db.js';

export function getAllComments() {
  return db.get('comments').value();
}

export function getCommentById(id) {
  return db.get('comments').find({ id }).value();
}

export function createComment(comment) {
  db.get('comments').push(comment).write();
  return comment;
}

export function updateComment(id, updatedComment) {
  db.get('comments').find({ id }).assign(updatedComment).write();
  return db.get('comments').find({ id }).value();
}

export function deleteComment(id) {
  db.get('comments').remove({ id }).write();
}