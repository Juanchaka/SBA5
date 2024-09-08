import { getAllUsers as fetchAllUsers, getUserById as fetchUser, createUser as addUser, updateUser as modifyUser, deleteUser as removeUser } from '../models/User.js';

export function getAllUsers (req, res) {
  const users = fetchAllUsers();
  res.render("user", { title: "Users", users });
};

export function getUser (req, res) {
  const user = fetchUser(req.params.id);
  if (user) {
    res.render("user", { user });
  } else {
    res.status(404).send("User not found");
  }
};

export function createUser (req, res) {
  const newUser = addUser(req.body);
  res.redirect(`/users/${newUser.id}`);
};

export function updateUser (req, res) {
  const updatedUser = modifyUser(req.params.id, req.body);
  if (updatedUser) {
    res.redirect(`/users/${updatedUser.id}`);
  } else {
    res.status(404).send("User not found");
  }
};

export function deleteUser (req, res) {
  removeUser(req.params.id);
  res.redirect("/users");
};