import db from '../db.js';

function getNextId() {
  const posts = db.data.posts || [];
  if (posts.length === 0) return 1;
  return Math.max(...posts.map(post => post.id)) + 1;
}

export function getAllPosts() {
  return db.data.posts || [];
}

export function getPostById(id) {
  return (db.data.posts || []).find(post => post.id === parseInt(id, 10));
}

export function createPost(post) {
  const newPost = { id: getNextId(), ...post };
  db.data.posts.push(newPost);
  db.write();
  return newPost;
}

export function updatePost(id, updatedPost) {
  const index = (db.data.posts || []).findIndex(post => post.id === parseInt(id, 10));
  if (index !== -1) {
    db.data.posts[index] = { ...db.data.posts[index], ...updatedPost };
    db.write();
    return db.data.posts[index];
  }
  return null;
}

export function deletePost(id) {
  db.data.posts = (db.data.posts || []).filter(post => post.id !== parseInt(id, 10));
  db.write();
}