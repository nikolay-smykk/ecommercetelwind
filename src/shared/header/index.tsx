import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeaderPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header__strange">
        <span> MINIMALIZM STUDIO</span>
      </div>
      <div className="header__inner">
        <div className="header__inner__logo">
          <Link to="/">MINIMALIZM</Link>
        </div>
        <nav className="header__inner__nav">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contact">Контакты</Link>
        </nav>
        <div className="header__inner__cart">
          <Link to="/cart">
            <FaShoppingCart className="header__inner__cart__icon" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
