import db from '../db.js';

export function getAllUsers() {
  return db.data.users || [];
}

export function getUserById(id) {
  return (db.data.users || []).find(user => user.id === id);
}

export function createUser(user) {
  const users = db.data.users || [];
  users.push(user);
  db.data.users = users;
  db.write();
  return user;
}

export function updateUser(id, updatedUser) {
  const users = db.data.users || [];
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    db.data.users = users;
    db.write();
    return users[index];
  }
  return null;
}

export function deleteUser(id) {
  db.data.users = (db.data.users || []).filter(user => user.id !== id);
  db.write();
}

// import db from '../db.js';

// export function getAllUsers() {
//   return db.data.users;
// }

// export function getUserById(id) {
//   return db.data.users.find(user => user.id === id);
// }

// export function createUser(user) {
//   db.data.users.push(user);
//   db.write();
//   return user;
// }

// export function updateUser(id, updatedUser) {
//   const index = db.data.users.findIndex(user => user.id === id);
//   if (index !== -1) {
//     db.data.users[index] = { ...db.data.users[index], ...updatedUser };
//     db.write();
//     return db.data.user[index];
//   }
//   return null;
// }

// export function deleteUser(id) {
//   db.data.users = db.data.users.filter(user => user.id !== id);
//   db.write();
// }


// import db from "../db.js";

// export function getAllUsers() {
//   return db.get("users").value();
// }

// export function getUserById(id) {
//   return db.get("users").find({ id }).value();
// }

// export function createUser(user) {
//   db.get("users").push(user).write();
//   return user;
// }

// export function updateUser(id, updatedUser) {
//   db.get("users").find({ id }).assign(updatedUser).write();
//   return db.get("users").find({ id }).value();
// }

// export function deleteUser(id) {
//   db.get("users").remove({ id }).write();
// }