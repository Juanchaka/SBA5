import db from '../db.js';

export function getAllComments() {
  return db.data.comments || [];
}

export function getCommentById(id) {
  return (db.data.comments || []).find(comment => comment.id === id);
}

export function createComment(comment) {
  const comments = db.data.comments || [];
  comments.push(comment);
  db.data.comments = comments;
  db.write();
  return comment;
}

export function updateComment(id, updatedComment) {
  const comments = db.data.comments || [];
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments[index] = { ...comments[index], ...updatedComment };
    db.data.comments = comments;
    db.write();
    return comments[index];
  }
  return null;
}

export function deleteComment(id) {
  db.data.comments = (db.data.comments || []).filter(comment => comment.id !== id);
  db.write();
}

// import db from '../db.js';

// export function getAllComments() {
//   return db.data.comments;
// }

// export function getCommentById(id) {
//   return db.data.comments.find(comment => comment.id === id);
// }

// export function createComment(comment) {
//   db.data.comments.push(comment);
//   db.write();
//   return comment;
// }

// export function updateComment(id, updatedComment) {
//   const index = db.data.comments.findIndex(comment => comment.id === id);
//   if (index !== -1) {
//     db.data.comments[index] = { ...db.data.comments[index], ...updatedComment };
//     db.write();
//     return db.data.comments[index];
//   }
//   return null;
// }

// export function deleteComment(id) {
//   db.data.comments = db.data.comments.filter(comment => comment.id !== id);
//   db.write();
// }

// import db from '../db.js';

// export function getAllComments() {
//   return db.get('comments').value();
// }

// export function getCommentById(id) {
//   return db.get('comments').find({ id }).value();
// }

// export function createComment(comment) {
//   db.get('comments').push(comment).write();
//   return comment;
// }

// export function updateComment(id, updatedComment) {
//   db.get('comments').find({ id }).assign(updatedComment).write();
//   return db.get('comments').find({ id }).value();
// }

// export function deleteComment(id) {
//   db.get('comments').remove({ id }).write();
// }