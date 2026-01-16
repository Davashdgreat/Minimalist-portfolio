import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-8 px-3 md:px-10">
      <div className="flex flex-col lg:flex-row justify-between gap-100">
        {/* Left Side */}
        <div className="flex flex-col justify-around lg:w-1/2">
          {/* Mobile Image */}
          <div className="grid grid-cols-2 gap-4 mb-8 lg:hidden">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/ME.jpg"
                alt="David Ashaolu mobile"
                className="w-full h-full object-cover"
                style={{ width: '50px', height: '50px' }}
              />
            </div>
          </div>
          {/* Title with Animation */}
          <motion.h1
            className="text-4xl md:text-6xl font-500 text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            ABOUT ME
          </motion.h1>
          {/* Description */}
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm David Ashaolu, a frontend developer & database administrator shaping web applications that stand out and drive meaningful functionality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Originally from Nigeria and now based in Frankfurt, I'm passionate about bringing ambitious visions to life and partnering with founders and brands who refuse to settle for average.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Specialising in frontend development with React and TypeScript, backend with PHP and MySQL, and database administration.
            </motion.p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col justify-between lg:w-1/2">
          {/* Desktop Image */}
          <div className="hidden lg:block relative overflow-hidden rounded-lg mb-8">
            <motion.img
              src="/src/assets/pfp.jpg"
              alt="David Ashaolu desktop"
              className="w-full h-auto object-cover"
              style={{ width: '500px', height: '500px' }}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {/* Contact Links */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-medium text-gray-900 dark:text-gray-100">Email</p> 
              <a href="mailto:ashaoludavid1@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                ashaoludavid1@gmail.com
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="font-medium text-gray-900 dark:text-gray-100">GitHub</span>
              <a href="https://github.com/Davashdgreat" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                /Davashdgreat
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</span>
              <a href="https://www.linkedin.com/in/ashaolu-david-1b4a091b6/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                /in/ashaolu-david-1b4a091b6
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span className="font-medium text-gray-900 dark:text-gray-100">YouTube</span>
              <a href="https://www.youtube.com/@imdavash8740" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                /@imdavash8740
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;









// import React, {useState} from 'react';
// // import { useInView } from 'react-intersection-observer';

// const About: React.FC = () => {

//   return (
//     <div className="main">
//       <p>hello world</p>
      
//     </div>
  
//   );
// };

// export default About;
