const express = require('express');
const router = express.Router()
const userController = require('./userController');

router.get('/user', bookController.get);

router
    .route('user/:id')
    .get(userController.findOne)
    .post(userController.create())
    .put(userController.uodate())
    .all(userController.remove())
    ;

module.exports = router;