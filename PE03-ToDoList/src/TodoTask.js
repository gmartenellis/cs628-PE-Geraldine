import React from 'react';

function TodoTask({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoTask;