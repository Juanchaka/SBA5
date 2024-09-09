import express from "express";
import { getAllPosts, getPost, createPost, updatePost, deletePost, createPostForm, updatePostForm } from "../controllers/postController.js";

const router = express.Router();

router.get("/create", createPostForm);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.get("/:id/update", updatePostForm);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
