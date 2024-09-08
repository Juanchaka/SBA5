import { getAllPosts as fetchAllPosts, getPostById as fetchPost, createPost as addPost, updatePost as modifyPost, deletePost as removePost } from '../models/Post.js';

export function getAllPosts (req, res) {
  const posts = fetchAllPosts();
  res.render("index", { title: "All Posts", posts });
};

export function getPost (req, res) {
  const post = fetchPost(req.params.id);
  if (post) {
    res.render("post", { post });
  } else {
    res.status(404).send("Post not found");
  }
};

export function createPost (req, res) {
  const newPost = addPost(req.body);
  res.redirect(`/posts/${newPost.id}`);
};

export function updatePost (req, res) {
  const updatedPost = modifyPost(req.params.id, req.body);
  if (updatedPost) {
    res.redirect(`/posts/${updatedPost.id}`);
  } else {
    res.status(404).send("Post not found");
  }
};

export function deletePost (req, res) {
  removePost(req.params.id);
  res.redirect("/posts");
};