import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎬 MovieApp</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li>
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="theme-toggle"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
