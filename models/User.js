import db from '../db.js';

function getNextUserId() {
  const users = db.data.users || [];
  if (users.length === 0) return 1;
  return Math.max(...users.map(user => user.id)) + 1;
}

export function getAllUsers() {
  return db.data.users || [];
}

export function getUserById(id) {
  return (db.data.users || []).find(user => user.id === parseInt(id, 10));
}

export function createUser(user) {
  const newUser = { id: getNextUserId(), ...user };
  const users = db.data.users || [];
  users.push(newUser);
  db.data.users = users;
  db.write();
  return newUser;
}

export function updateUser(id, updatedUser) {
  const users = db.data.users || [];
  const index = users.findIndex(user => user.id === parseInt(id, 10));
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    db.data.users = users;
    db.write();
    return users[index];
  }
  return null;
}

export function deleteUser(id) {
  db.data.users = (db.data.users || []).filter(user => user.id !== parseInt(id, 10));
  db.write();
}