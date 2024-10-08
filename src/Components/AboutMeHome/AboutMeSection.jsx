import React, { useEffect, useState } from 'react';
import './AboutMeSection.css'; // Import the custom CSS file
import { div } from 'framer-motion/client';

const AboutMeSection = () => {
  const [visibleText, setVisibleText] = useState(0);
  const textArray = [
    "This is Vinki Rohan Here  ",
    "I am a passionate Computer Science student with a deep interest in web development, programming, and exploring new technologies.",
    "I enjoy solving complex problems and continuously learning to improve my skills in software development, design, and user experience.",
    "My journey in Computer Science has led me to work on various projects including websites, chatbots, and real-time applications.",
    "I am excited to contribute to cutting-edge solutions and build innovative web platforms."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleText((prev) => (prev + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="">
        <section className="bg-purple-500 text-white py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
            {/* Profile Image */}
            <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
              <img
                src="https://media.licdn.com/dms/image/D5603AQG-rKdUJfcGVQ/profile-displayphoto-shrink_200_200/0/1673703454843?e=2147483647&v=beta&t=tcz7M1BiJNtvlB3RgvLBSC_4aSXW4cLhe-fML8GrkQ8" // Update this path to your profile image
                alt="Profile"
                className="rounded-full border-4 border-gray-500 shadow-lg h-64 w-64 object-cover transform hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>

            {/* Description */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-4xl font-semibold mb-4">{textArray[0]}</h2>
              <div
                className={`text-xl mb-4 leading-relaxed text-container transition-opacity duration-500 ease-in-out`}
                style={{ minHeight: '160px' }} // Adjust this value as needed
              >
                <p>{textArray[visibleText]}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMeSection;
