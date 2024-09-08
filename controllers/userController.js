import { getAllUsers as fetchAllUsers, getUserById as fetchUser, createUser as addUser, updateUser as modifyUser, deleteUser as removeUser } from '../models/User.js';


export async function homeUsers() {
  return fetchAllUsers();
}

export function getAllUsers (req, res) {
  const users = fetchAllUsers();
  res.render("user", { title: "Users", users });
};

export function getUser (req, res) {
  const user = fetchUser(req.params.id);
  if (user) {
    res.render("indexUser", { title: `User: ${user.name}`, user });
  } else {
    res.status(404).send("User not found");
  }
};

export function createUserForm (req, res) {
  const success = req.query.success === "true";
  res.render("userCreate", { title: "Create New User", success });
}

export function createUser (req, res) {
  const newUser = addUser(req.body);
  // res.redirect(`/users/${newUser.id}`);
  res.redirect(`/users/create?success=true`);
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