const express = require('express');
const { createTask, getTasks, updateTask, deleteTask, getTask } = require('../controllers/task');
const authenticate = require('../middlewares/auth');
const router = express.Router();

router.route('/')
    .post(authenticate, createTask)
    .get(authenticate, getTasks);

router.route('/:id')
    .get(authenticate, getTask)
    .put(authenticate, updateTask)
    .delete(authenticate, deleteTask);

module.exports = router;
