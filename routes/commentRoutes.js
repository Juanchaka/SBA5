import express from "express";
import { createComment, deleteComment, getAllComments, updateComment, getComment, createCommentForm, updateCommentForm} from "../controllers/commentController.js";

const router = express.Router();

router.get("/create", createCommentForm);
router.get("/", getAllComments);
router.get("/:id", getComment);
router.get("/:id/update", updateCommentForm);
router.post("/", createComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;