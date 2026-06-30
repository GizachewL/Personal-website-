const User = require('../models/user');

// Get all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Create new user
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  await user.save();
  res.status(201).json(user);
};

// Get single user
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Delete user
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

module.exports = { getUsers, createUser, getUserById, deleteUser };
