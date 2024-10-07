import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">My Portfolio</h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Rohan Pawar. All Rights Reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Connect with me</h3>
          <div className="flex justify-center md:justify-end mt-2 space-x-4">
            <a
              href="https://github.com/Rohan1786"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-pawar-59621525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="./YoutubeProfilePage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
