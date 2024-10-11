import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 animate-bounce">About Me</h1>

        {/* Profile Information */}
        <div className="bg-white shadow-xl rounded-lg p-8 text-center max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Rohan Pawar</h2>
          <p className="text-gray-600 mb-4">Web Developer | Time Machine Enthusiast | YouTube Content Creator</p>
          
          <div className="mb-6 flex flex-col sm:flex-row items-center">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm45EoJIk5DwHR5MQw8L0j_ftanauDEdsf49zi71JqqRQw4Gi-Gv_0H4HH2PymeGv21rk&usqp=CAU" // Replace with an actual image of SGBIT college
    alt="SGBIT College"
    className="w-full sm:w-64 h-auto rounded-lg shadow-md sm:mr-6 mb-4 sm:mb-0"
  />
  <p className="text-sm text-gray-500 text-center sm:text-left">Pursuing BE in Computer Science Engineering at SGBIT, Belagavi</p>
</div>


          <p className="text-gray-700 mb-6">
            I'm currently in my final year of BE in Computer Science at SGBIT, where I'm passionate about web development and exploring cutting-edge technologies. 
            I'm also a content creator on YouTube, where I vlog about my journey as a Tech Student
          </p>

          {/* Coding Focus */}
          <div className="bg-blue-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Current Focus</h3>
            <p className="text-gray-600">
              I'm focusing on improving my problem-solving skills, particularly on platforms like <a href="https://leetcode.com/" className="text-blue-600 hover:underline">LeetCode</a>, <a href="https://www.geeksforgeeks.org/" className="text-blue-600 hover:underline">GeeksforGeeks</a>, and <a href="https://www.codechef.com/" className="text-blue-600 hover:underline">CodeChef</a>. My goal is to sharpen my algorithmic thinking and ace coding interviews.
            </p>
          </div>

          {/* YouTube Information */}
          <div className="bg-blue-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">My YouTube Channel</h3>
            <p className="text-gray-600">
              I run a YouTube channel where I vlog about my life as a student, and tips for aspiring developers. Check out my channel for some cool content on web development and coding challenges like Hackathon Experience!
            </p>
            <a href="https://www.youtube.com/@VinkiRohanVlog" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit My YouTube Channel</a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/Rohan1786" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faGithub} size="3x" className="text-gray-800" />
            </a>
            <a href="https://www.linkedin.com/in/rohan-pawar-59621525a/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-blue-700" />
            </a>
            <a href="https://www.youtube.com/@VinkiRohanVlog" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faYoutube} size="3x" className="text-red-600" />
            </a>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
          <div className="bg-blue-100 opacity-75 w-64 h-64 rounded-full absolute top-16 right-16 animate-pulse"></div>
          <div className="bg-blue-200 opacity-50 w-48 h-48 rounded-full absolute bottom-32 left-16 animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default About;
