const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUserById, deleteUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

module.exports = router;
