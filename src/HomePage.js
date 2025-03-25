import React from 'react';
//import './App.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to React Todo App</h1>
      <p>This is a simple todo application built with React.</p>
      <p>Click on the Todos link in the navigation to manage your tasks.</p>
      <Link to="/todos" className="start-button">
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;
