const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Add User
router.post('/addUser', controller.UserCreate);
// Get All User
router.get('/users', controller.UserReturn);
// Get User Id
router.get('/users/:id', controller.UserDetails);
// Get User Category
router.get('/users/:category', controller.UserCategory);
// Update User
router.put('/updateUser/:id', controller.UserUpdate);
// Delete User
router.delete('/deleteUser/:id', controller.UserDelete);


module.exports = router;