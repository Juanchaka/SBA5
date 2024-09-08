import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser, createUserForm } from "../controllers/userController.js";

const router = express.Router();

router.get("/create", createUserForm);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;