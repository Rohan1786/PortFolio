import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import YoutubeProfilePage from './Components/YouTube/YoutubeProfilePage';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import { ThemeProvider } from './ThemeContext';
import { AnimatePresence } from 'framer-motion';
import PageTransitionWrapper from './Components/PageTransitionWrapper';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransitionWrapper><Home /></PageTransitionWrapper>} />
        <Route path="/YoutubeProfilePage" element={<PageTransitionWrapper><YoutubeProfilePage /></PageTransitionWrapper>} />
        <Route path="/About" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
        <Route path="/Contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          {/* Assuming Navbar is present across all routes */}
          <AnimatedRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
