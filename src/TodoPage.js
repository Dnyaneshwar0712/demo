import React, { useState, useEffect } from 'react';
//import './App.css';
import TodoItem from './TodoItem';
function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      // Default todos if none exist
      const defaultTodos = [
        { id: 1, text: 'Protect the todo app', completed: false },
        { id: 2, text: 'Hello, World!', completed: true }
      ];
      setTodos(defaultTodos);
      localStorage.setItem('todos', JSON.stringify(defaultTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Your Todos</h1>
      <p className="subtitle">Create and manage your todos.</p>
      
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="What needs doing?"
          className="todo-input"
        />
        <button type="submit" className="create-button">Create</button>
      </form>
      
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoPage;