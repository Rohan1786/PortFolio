import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar/Navbar';


const Contact = () => {
    
  return (
    <>
    <Navbar/>
    <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 animate-bounce">Contact Me</h1>

      {/* Contact Information */}
      <div className="bg-white shadow-xl rounded-lg p-8 text-center max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Rohan Pawar</h2>
        <p className="text-gray-600 mb-4">Web Developer | Time Machine Enthusiast</p>
        <p className="text-gray-500">Reach out to me via email:</p>
        <a href="mailto:vinkirohan02@gmail.com" className="text-blue-600 hover:underline text-lg">
          vinkirohan02@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/Rohan1786" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faGithub} size="3x" className="text-gray-800" />
          </a>
          <a href="https://www.linkedin.com/in/rohan-pawar-59621525a/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-blue-700" />
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

export default Contact;
