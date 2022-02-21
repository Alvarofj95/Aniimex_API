const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Add User
router.post('/addUser', controller.userCreate);
// Get All User
router.get('/users', controller.userReturn);
// Get User Id
router.get('/users/:id', controller.userDetails);
// Get User Category
router.get('/users/:category', controller.userCategory);
// Update User
router.put('/updateUser/:id', controller.userUpdate);
// Delete User
router.delete('/deleteUser/:id', controller.userDelete);


module.exports = router;