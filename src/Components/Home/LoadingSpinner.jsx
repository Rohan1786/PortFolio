import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1],
          opacity: [1, 0.7, 1],
          borderColor: ['#fff', '#f472b6', '#9333ea', '#fff'],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
