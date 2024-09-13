const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "give your db password",
  database: "db name"
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = connection;

