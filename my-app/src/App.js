import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import './App.css';



const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get('http://localhost:5000/api/todos');
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);  // Add the new todo to the list
  };


  const handledelte = async (title) =>{
    try{
      const res = await axios.delete('http://localhost:5000/api/todosdelete', { data: { title } }); 
      if(res.status === 200){
        alert("Deleted Succesfully..!");
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
        //we do this here because to fetch again it has to again interact with backend and also reduce api calls
      }
    }
    catch(err){
      console.error("Unsuccesfull Deletion",err);
    }
  }

  const updatestatus = async (id) => {
    try {
      const res = await axios.put('http://localhost:5000/api/todosupdate', { id: id });
      if (res.status === 200) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: true } : todo
          )
        );
        console.log('Update successful');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <>
      <AddTodo onAdd={handleAdd} />
      <div className='outertable'>      
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td> 
              <td>{todo.title}</td> 
              
              <td>{todo.completed ? 'Completed' : 'Not Completed'}</td>  

              {!todo.completed &&  <td>
                <button className='btn btn-primary'
                  type="button" 
                   onClick={() => updatestatus(todo.id)}
                   disabled={todo.completed} >
                  {/* {todo.completed ? 'Already Completed' : 'Mark As Completed'} */}
                  Mark As Completed 
                </button>
              </td>}

              <td>
              <button className='btn btn-primary'
                  type="button" 
                  onClick={() => handledelte(todo.title)}
                   >
                  Delete 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>  
    </>
  );
};

export default App;
