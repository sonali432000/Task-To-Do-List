import React from 'react'
import { useState, useEffect } from 'react'

const  TodoList =()=>{
  const [tasks, setTasks]= useState([]);
  const [newTask, setNewTask] = useState("");


useEffect(() =>{
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(savedTasks);
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks)) ;
}, [tasks]);

 const addTask =()=>{
  if (newTask.trim() === "")
    return;
  setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}]);
  setNewTask("");
 };

 const toggleComplete = (id) =>{
  setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
 };

const deteletTask = (id) =>{
  setTasks(tasks.filter(task => task.id !== id));
};

return (
  <>
    <div className='todo-container'>
      <h1 className='Main-heading'>To Do List</h1>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Enter a new Task' />
        <button className='submitButton' onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task =>(
          <li key={task.id} className={task.completed ? "completed" : " "}>

  <span onClick={()=> toggleComplete(task.id)}>{task.text}</span>

  <button className='deleteButton' onClick={() => deteletTask(task.id)}> Delete</button>

          </li>
        ))}
      </ul>
    </div>
      
  </>
)
}
export default TodoList;
