// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importe le fichier CSS
const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
            </ul>
            </nav>
    </div>
  
  );
};

export default Navbar;





