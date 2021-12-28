import { motion } from 'framer-motion';
import React from 'react';

export const FooterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className="footer"
    >
      <div className="footer_inner"></div>
    </motion.div>
  );
};
