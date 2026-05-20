import React from 'react';
import TodoTask from './TodoTask';

function TodoList({ todos, onDelete }) {
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoTask 
              key={todo.id} 
              todo={todo} 
              onDelete={onDelete} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;