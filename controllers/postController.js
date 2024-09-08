import { getAllPosts as fetchAllPosts, getPostById as fetchPost, createPost as addPost, updatePost as modifyPost, deletePost as removePost } from '../models/Post.js';

export function getAllPosts (req, res) {
  const posts = fetchAllPosts();
  res.render("indexPost", { title: "All Posts", posts });
};

export async function homePosts() {
  return fetchAllPosts();
}

export function getPost (req, res) {
  const post = fetchPost(req.params.id);
  if (post) {
    res.render("post", { post });
  } else {
    res.status(404).send("Post not found");
  }
};

export function createPostForm (req, res) {
  const success = req.query.success === "true";
  res.render("postCreate", { title: "Create New Comment", success });
}

export function createPost (req, res) {
  const newComment = addComment(req.body);
  res.redirect(`/posts/create?success=true`);
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