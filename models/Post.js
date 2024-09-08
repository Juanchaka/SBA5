import db from "../db.js";

export function getAllPosts() {
  return db.get("posts").value();
}

export function getPostById(id) {
  return db.get("posts").find({ id }).value();
}

export function createPost(post) {
  db.get("posts").push(post).write();
  return post;
}

export function updatePost(id, updatedPost) {
  db.get("posts").find({ id }).assign(updatedPost).write();
  return db.get("posts").find({ id }).value();
}

export function deletePost(id) {
  db.get("posts").remove({ id }).write();
}