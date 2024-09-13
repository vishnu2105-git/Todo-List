An Simple Todo List application using MVC architecture and proper folder structure using MERN Stack

--Add your db password and db name in db.js file (path-> my-app/backend/db.js) 
--You can also update your username if not 'root'
--prior create an database with name todos in your mysql


CREATE DATABASE todos_db;
USE todos_db;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT false
);


To Run: 

Step-1:

open a new terminal

cd my-app
cd backend 
node server.js

Step-2:

open a new terminal

cd my-app
npm start 



Thank You....!
