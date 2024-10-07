import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

const YoutubeProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex flex-col items-center p-8 transition-colors duration-500`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="mb-4 py-2 px-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none"
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      {/* Profile Section */}
      <motion.section 
        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-full max-w-4xl rounded-lg shadow-lg p-6 mb-8 transition-colors duration-500`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Profile Picture */}
          <motion.img
            src="https://yt3.googleusercontent.com/w0VFFnZPTgbhUPnqx-hMperz064sU9Ly_l_BueTQKZFbRL2CdoCNMJVZe-3HpOwr38I4RswpXw=s900-c-k-c0x00ffffff-no-rj" // Replace with your actual profile picture URL
            alt="Profile"
            className="rounded-full w-40 h-40 mb-4 border-4 border-gray-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          {/* Profile Name and Description */}
          <h1 className="text-3xl font-bold">Rohan Vlogs</h1>
          <p className="text-gray-600 mt-4">
            Welcome to my channel! I vlog about tech, coding tutorials, and life as an engineering student. Join me on my journey as I solve LeetCode problems and build cool projects.
          </p>
        </div>
      </motion.section>

      {/* Video Description Section */}
      <motion.section 
        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-full max-w-4xl rounded-lg shadow-lg p-6 mb-8 transition-colors duration-500`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Recent Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Video Thumbnail */}
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
              </a>
              {/* Video Title and Description */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Current Goal Section */}
      <motion.section 
        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-full max-w-4xl rounded-lg shadow-lg p-6 transition-colors duration-500`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Current Goal</h2>
        <div className="flex flex-col items-center text-center">
          {/* Goal Image */}
          <img
            src="https://via.placeholder.com/400x200?text=LeetCode+Problem+Solving" // Replace with your actual goal-related image
            alt="LeetCode Problem Solving"
            className="w-full h-auto mb-4 rounded-lg"
          />
          {/* Goal Description */}
          <p className="text-gray-600">
            I'm currently focused on improving my problem-solving skills on LeetCode. Follow my progress as I tackle medium and hard problems to prepare for coding interviews!
          </p>
        </div>
      </motion.section>
    </div>
  );
};

// Array of recent videos with thumbnail, title, description, and link
const videos = [
  {
    thumbnail: 'https://via.placeholder.com/300?text=Vlog+1',
    title: 'Day in the Life of a Tech Vlogger',
    description: 'Join me for a day in the life of coding, vlogging, and hanging out with friends!',
    link: 'https://youtube.com/yourchannel?v=1'
  },
  {
    thumbnail: 'https://via.placeholder.com/300?text=Tutorial+1',
    title: 'How to Build a Website with React',
    description: 'A step-by-step guide to building your first website using React and Tailwind CSS.',
    link: 'https://youtube.com/yourchannel?v=2'
  },
  {
    thumbnail: 'https://via.placeholder.com/300?text=Vlog+2',
    title: 'Solving LeetCode Problems',
    description: 'Watch me as I solve challenging LeetCode problems and explain my approach!',
    link: 'https://youtube.com/yourchannel?v=3'
  }
];

export default YoutubeProfilePage;
