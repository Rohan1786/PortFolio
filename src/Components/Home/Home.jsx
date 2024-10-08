import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import AboutMeSection from '../AboutMeHome/AboutMeSection';

const Home = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const headingText = "Welcome to My Portfolio";
  const words = headingText.split(' ');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleGetStartedClick = () => {
    setShowProfile(true);
    const duration = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000; // Random duration between 3000 and 6000 ms
    setTimeout(() => {
      setShowProfile(false);
    }, duration);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Animation variants for each word
  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}>
      <Navbar />

      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center p-8">
          <div className="text-4xl font-bold mb-4 transition duration-500 transform hover:scale-105">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-lg mb-6"
            initial="hidden"
            animate="visible"
            variants={wordAnimation}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Explore my projects and get to know me better!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleGetStartedClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Get Started
          </motion.button>
          <button
            onClick={toggleDarkMode}
            // className={`mt-4 px-4 py-2 rounded-lg transition duration-300 ${darkMode ? 'bg-gray-200 text-black'  : 'bg-gray-800 text-white'}`}
            className={`mt-4 px-4 py-2 rounded-lg transition duration-300 ${darkMode ? 'bg-gray-200 text-black'  : 'bg-gray-800 text-white'}`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </section>
        {/* about me change that for responsive web design */}
        
        
       {/* Profile Section */}
{showProfile && (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center p-8"
    style={{ height: '100vh', zIndex: 20, backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)' }}
  >
    <div className={`flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className={`flex flex-col ${darkMode ? 'text-white' : 'text-black'}`}>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-lg">I'm a passionate web developer with a knack for creating beautiful and user-friendly applications.</p>
        <p className="mt-2">I have experience in full-stack development, specializing in Express.js, React, Node.js, and MongoDB.</p>
        <p className="mt-2">Check out my work on GitHub and follow me on LinkedIn for updates!</p>
      </div>
      <div className="mt-4 md:mt-0">
        <a
          href='https://www.linkedin.com/in/rohan-pawar-59621525a/'
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://media.licdn.com/dms/image/D5603AQG-rKdUJfcGVQ/profile-displayphoto-shrink_200_200/0/1673703454843?e=2147483647&v=beta&t=tcz7M1BiJNtvlB3RgvLBSC_4aSXW4cLhe-fML8GrkQ8"
            alt="My Profile"
            className="rounded-full ml-4 w-32 h-32 md:w-40 md:h-40"
          />
        </a>
      </div>
    </div>
  </motion.div>
)}


        {/* Image Gallery Section with Links */}
        {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg ${scrolling ? 'opacity-100' : 'opacity-50'}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, opacity: scrolling ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ width: '300px', height: '300px' }}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full flex flex-col">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-5/6 h-4/6 object-contain mx-6"
                />
                <div className={`p-2 text-center ${image.customTextClass}`}>
                  <h2 className="text-xl font-semibold">{image.title}</h2>
                  <p className="text-sm">{image.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </section> */}

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {images.map((image, index) => (
    <motion.div
      key={index}
      className={`overflow-hidden rounded-lg shadow-lg ${scrolling ? 'opacity-100' : 'opacity-50'}`}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1, opacity: scrolling ? 1 : 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ width: '300px', height: '300px' }}
    >
      <div className="block w-full h-full flex flex-col">
        {image.link.href ? (
          <a
            href={image.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-5/6 h-4/6 object-contain mx-6"
            />
            <div className={`p-2 text-center ${image.customTextClass}`}>
              <h2 className="text-xl font-semibold">{image.title}</h2>
              <p className="text-sm">{image.description}</p>
            </div>
          </a>
        ) : (
          <Link
            to={image.link.to}
            className="w-full h-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-5/6 h-4/6 object-contain mx-6"
            />
            <div className={`p-2 text-center ${image.customTextClass}`}>
              <h2 className="text-xl font-semibold">{image.title}</h2>
              <p className="text-sm">{image.description}</p>
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  ))}
</section>

      </div>
        <AboutMeSection/>
       
      <Footer />

    </div>

  );
};
const images = [
  {
    src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    alt: 'GitHub',
    link: {
      href: 'https://github.com/Rohan1786', // External link
    },
    title: 'GitHub Profile',
    description: 'Explore my repositories and open-source contributions.',
    customTextClass: 'text-blue-500',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    alt: 'YouTube',
    link: {
      to: '/YoutubeProfilePage', // Internal link
    },
    title: 'YouTube Channel',
    description: 'Watch my latest videos on tech and Life Style as Engineering Student',
    customTextClass: 'text-red-500',
  },
  {
    src: 'https://www.jeffrobin.com/uploads/3/7/6/3/37633225/mini-project-copy_orig.jpg',
    alt: 'Project',
    link: {
       href:'https://github.com/yourusername/project1', // External link
    },
    title: 'Mini Projects',
    description: 'A cool projects I build why using latest technologies',
    customTextClass: 'text-green-500',
  },
  // Add other projects similarly...
  {
        src: 'https://pbs.twimg.com/profile_images/954684547635011584/fuI40nUt_400x400.jpg',
        alt: 'Project 1',
        link: {
          href:'https://github.com/yourusername/project1',
        },
        title: 'Major Project',
        description: 'A cool Major Project It will Update soon',
        customTextClass: 'text-green-500',
      },
      {
        src: 'https://images.ctfassets.net/aq13lwl6616q/1pU68mCdL4C26KTxAUXmbe/f6a21624f217c0afec2829b33b2899b0/Thumbnail_-_Freelance_Course.jpeg',
        alt: 'Project 1',
        link:{ href:'https://github.com/yourusername/project1',},
        title: 'Freelancing Projects',
        description: 'It will Update soon',
        customTextClass: 'text-green-500',
      },
      {
        src: 'https://itechnolabs.ca/wp-content/uploads/2022/07/describe-the-mern-stack-itechnolabs.jpg',
        alt: 'Project 1',
        link: {href:'https://github.com/yourusername/project1',},
        title: 'Full Stack Projects',
        description: 'Cool Full Stack Projects ',
        customTextClass: 'text-green-500',
      }
];
export default Home;
