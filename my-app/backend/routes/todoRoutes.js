const express = require('express');
const { addTodo, getTodos , deletetodo, updatestatus} = require('../controllers/todoController');
const router = express.Router();

router.get('/todos', getTodos);    // Fetch all todos
router.post('/todos', addTodo);    // Add a new todo
router.delete('/todosdelete',deletetodo);
router.put('/todosupdate',updatestatus); 

module.exports = router;
