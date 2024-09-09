import { getAllPosts as fetchAllPosts, getPostById as fetchPost, createPost as addPost, updatePost as modifyPost, deletePost as removePost } from '../models/Post.js';

export function getAllPosts (req, res) {
  const { title } = req.query;
  let posts = fetchAllPosts();

  if (title) {
    posts = posts.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
  }

  res.render("indexPost", { title: "All Posts", posts });
};

export async function homePosts() {
  return fetchAllPosts();
}

export function getPost (req, res) {
  const post = fetchPost(req.params.id);
  if (post) {
    res.render("post", { title: `Post by ${post.author}`, post });
  } else {
    res.status(404).send("Post not found");
  }
};

export function createPostForm (req, res) {
  const success = req.query.success === "true";
  res.render("postCreate", { title: "Create New Post", success });
}

export function updatePostForm (req, res) {
  const post = fetchPost(req.params.id);
  if (post) {
    res.render("postUpdate", { title: "Update Post", post });
  } else {
    res.status(404).send("Post not found");
  }
}

export function createPost (req, res) {
  const newPost = addPost(req.body);
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