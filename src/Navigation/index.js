import React from 'react';
import'./style.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/signIn">Product Details</a>
        </li>
        <button className="login-button">Login</button>
      </ul>
    </nav>
  );
};
export default Navigation;






