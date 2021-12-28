import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeaderPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="strange"> MINIMALIZM STUDIO</div>
      <div className="header-inner">
        <div className="logo">
          <Link to="/">MINIMALIZM</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </nav>
        <div className="cart">
          <Link to="/cart">
            <FaShoppingCart className="cart_icon" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
