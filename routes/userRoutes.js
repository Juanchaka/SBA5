import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser, createUserForm, updateUserForm } from "../controllers/userController.js";

const router = express.Router();

router.get("/create", createUserForm);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.get("/:id/update", updateUserForm);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;