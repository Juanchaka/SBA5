import db from "../db.js";

export function getAllUsers() {
  return db.get("users").value();
}

export function getUserById(id) {
  return db.get("users").find({ id }).value();
}

export function createUser(user) {
  db.get("users").push(user).write();
  return user;
}

export function updateUser(id, updatedUser) {
  db.get("users").find({ id }).assign(updatedUser).write();
  return db.get("users").find({ id }).value();
}

export function deleteUser(id) {
  db.get("users").remove({ id }).write();
}