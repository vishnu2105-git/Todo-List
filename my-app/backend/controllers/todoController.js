const db = require('../config/db');

exports.addTodo = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  db.query('INSERT INTO todos (title, completed) VALUES (?, false)', [title], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, title, completed: false });
  });
};

exports.updatestatus = (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  db.query('UPDATE todos SET completed = 1 WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ completed: true });
  });
};

exports.deletetodo = (req, res) => {
  const { title } = req.body;
  db.query('DELETE FROM todos WHERE title = ?', [title], (err, result) => {
    if (err) throw err;
    res.json("Deleted successfully",result);
  });
};


exports.getTodos = (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
