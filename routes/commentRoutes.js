import express from "express";
import { createComment, deleteComment, getAllComments, updateComment, getComment} from "../controllers/commentController.js";

const router = express.Router();

router.get("/", getAllComments);
router.get("/:id", getComment);
router.post("/", createComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;