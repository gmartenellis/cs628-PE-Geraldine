import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'; 

function App() {
  /* state to manage todo list and current input text */
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  /* event handler for input changes */
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  /* event handler to add task when button is clicked */
  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskInput.trim() === '') return; /* blocks empty tasks */

    const newTodo = {
      id: Date.now(), 
      text: taskInput
    };

    setTodos([...todos, newTodo]);
    setTaskInput(''); /* clear input field after clicking add */
  };

  /* delete a task by its ID */
  const handleDeleteTask = (idToDelete) => {
    const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>ToDo List App</h1>
      
      <form onSubmit={handleAddTask} className="todo-input-form">
        <input
          type="text"
          placeholder="Enter task description."
          value={taskInput}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <TodoList todos={todos} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;