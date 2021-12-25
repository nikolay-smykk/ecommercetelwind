import React from 'react';

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
      <div className="header-inner">
        <div className="logo">Minimalism</div>
        <nav className="nav">
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/strategy">Strategy</Link>
          </li>
          <li>
            <Link to="/cases">Cases</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/why">Why work with us?</Link>
          </li>
        </nav>
        <div className="contact">
          <Link to="/contact">Let's work together</Link>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};
