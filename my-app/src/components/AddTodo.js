import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';


const AddTodo = ({ onAdd }) => {

  const [title, setTitle] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await axios.post('http://localhost:5000/api/todos', { title });
    onAdd(res.data);  // Notify the parent component with the new task
    setTitle('');     // Clear input field
  };

  return (
    <>
    <div style={{backgroundColor:"#212529", color:"white",alignContent: "center" , fontSize:"40px"}}>
    <div style={{display:"flex" , justifyContent:"center", marginTop:"10pt"}}><h1>Todo List</h1></div>
    </div>
    <div className='mcn'>
    <form onSubmit={handleSubmit}>
        <div className='input-group input-group-lg'> 
      <input
        className="form-control"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task"
      />
      </div>
      <div className='btn-arrange'>
      <button className='btn btn-primary' style={{backgroundColor:"blue",color:"white"}} type="submit">Add Todo</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default AddTodo;
