import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Section = () => {
 
const git=()=>{
  window.location.href="https://github.com/Rohan1786";
}
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8'>
      <h1 className='text-blue-900 text-4xl font-bold mb-4'>
        Developer's Corner: Innovative Solutions for Tomorrow
      </h1>
      <p className='text-black text-xl mb-6 text-center max-w-3xl'>
        Welcome to my space where creativity meets logic. As a developer with a passion for problem-solving, 
        I bring innovative solutions and fresh perspectives to every project. Whether it's decoding complex algorithms, 
        building modern web applications, or crafting user-friendly interfaces, I strive to deliver excellence.
      </p>
      <p className='text-black text-lg text-center max-w-3xl'>
        If you're looking for a developer who thinks outside the box and embraces challenges with an innovative mindset, 
        feel free to reach out! Whether it's for freelance projects, collaborations, or brainstorming ideas — I'm always up for the task.
      </p>
      <button className='mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'
     onClick={git}>
        Let’s Collaborate
        </button>
        <Link
            to="/Contact"
            className="text-black hover:text-yellow-400 text-lg transition-all duration-300 rounded"
          >
            Contact
          </Link>
      
    </div>
  );
};

export default Section;
