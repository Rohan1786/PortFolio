import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const PageTransitionWrapper = ({ children, loading }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Adjust the loading duration as needed

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-10">
          <h2 className="text-xl font-semibold">Loading...</h2>
        </div>
      )}
      <motion.div
        initial="initial"
        animate={isLoading ? "initial" : "in"}
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-wrapper"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransitionWrapper;
