const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Add User
router.post('/addUser', controller.UserCreate);
// Get All User
router.get('/Users', controller.UserReturn);
// Get User Id
router.get('/Users/:id', controller.UserDetails);
// Get User Category
router.get('/Users/:category', controller.UserCategory);
// Update User
router.put('/updateUser/:id', controller.UserUpdate);
// Delete User
router.delete('/deleteUser/:id', controller.UserDelete);


module.exports = router;