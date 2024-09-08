import db from '../db.js';

export function getAllPosts() {
  return db.data.posts || [];
}

export function getPostById(id) {
  return (db.data.posts || []).find(post => post.id === parseInt(id, 10));
}

export function createPost(post) {
  db.data.posts.push(post);
  db.write();
  return post;
}

export function updatePost(id, updatedPost) {
  const index = (db.data.posts || []).findIndex(post => post.id === parseInt(id, 10));
  if (index !== -1) {
    db.data.posts[index] = { ...addEventListener.data.posts[index], ...updatedPost };
    db.write();
    return db.data.posts[index];
  }
  return null;
}

export function deletePost(id) {
  db.data.posts = (db.data.posts || []).filter(post => post.id !== parseInt(id, 10));
  db.write();
}

// import db from '../db.js';

// export function getAllPosts() {
//   return db.data.posts;
// }

// export function getPostById(id) {
//   return db.data.posts.find(post => post.id === id);
// }

// export function createPost(post) {
//   db.data.posts.push(post);
//   db.write();
//   return post;
// }

// export function updatePost(id, updatedPost) {
//   const index = db.data.posts.findIndex(post => post.id === id);
//   if (index !== -1) {
//     db.data.posts[index] = { ...db.data.posts[index], ...updatedPost };
//     db.write();
//     return db.data.posts[index];
//   }
//   return null;
// }

// export function deletePost(id) {
//   db.data.posts = db.data.posts.filter(post => post.id !== id);
//   db.write();
// }


// import db from "../db.js";

// export function getAllPosts() {
//   return db.get("posts").value();
// }

// export function getPostById(id) {
//   return db.get("posts").find({ id }).value();
// }

// export function createPost(post) {
//   db.get("posts").push(post).write();
//   return post;
// }

// export function updatePost(id, updatedPost) {
//   db.get("posts").find({ id }).assign(updatedPost).write();
//   return db.get("posts").find({ id }).value();
// }

// export function deletePost(id) {
//   db.get("posts").remove({ id }).write();
// }