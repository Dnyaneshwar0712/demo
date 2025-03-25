import React from 'react';
//import './App.css'
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-checkbox-container" onClick={() => onToggle(todo.id)}>
        {todo.completed ? (
          <div className="todo-checkbox completed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
        ) : (
          <div className="todo-checkbox"></div>
        )}
      </div>
      
      <div className="todo-text">{todo.text}</div>
      
      <button className="todo-options" onClick={() => onDelete(todo.id)}>
        ⋯
      </button>
    </div>
  );
}

export default TodoItem;