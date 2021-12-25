import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const HeaderPage = () => {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        Brand
      </Link>
      <Link to="/About" className="brand">
        About
      </Link>
      <nav className="nav"></nav>
    </header>
  );
};
