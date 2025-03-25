import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Home Icon
import { LucideCheckCheck } from 'lucide-react'; // WhatsApp-style Double Tick
import TodoPage from './TodoPage';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo-container">
            <img src="/download.jpg" alt="download Logo" className="react-logo" />
            <img src="/logo192.png" alt="logo192 Logo" className="vite-logo" />
          </div>
          <nav className="main-nav">
            <Link to="/" className="nav-link">
              <span className="nav-icon">
                <FaHome size={20} />
              </span>{' '}
              Home
            </Link>
            <Link to="/Todos" className="nav-link active">
              <span className="nav-icon">
                <LucideCheckCheck size={20} color="#007AFF" strokeWidth={2} />
              </span>{' '}
              Todos
            </Link>
          </nav>
          <div className="user-profile">
            <img src="/download.png" alt="User Profile" className="profile-image" />
          </div>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodoPage />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>The React name and logomark are properties of Facebook and their use herein is for learning and illustrative purposes only.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
