const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "vishnu2966",
  database: "todos_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = connection;

// const mysql = require('mysql2');
// require('dotenv').config();

// const connection2 = mysql.createConnection({
//     host:"",
//     user: "",
//     password :"",
//     database:""
// });
// connection.connect();
// module.exports = connection2;