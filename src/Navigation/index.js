import React from 'react';
import'./style.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/more">About Us</a>
        </li>
        <li>
          <a href="/signIn">Sign In</a>
        </li>
        <button className="login-button">Login</button>
      </ul>
    </nav>
  );
};
export default Navigation;






