import React from 'react';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { HiArrowDownTray } from 'react-icons/hi2';
// import { motion } from "motion/react"

const Intro: React.FC = () => {
    const [multxt] = useTypewriter({
        words: [' Ashaolu David 😊', ' a Frontend Developer', ' a Database Administrator'],
        loop:5,
        typeSpeed: 100,
        deleteSpeed: 50

    })

  return (
    <section 
      id="home"
      className=" min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Left Side - Brief Info */}
      <motion.div className="flex-1 text-left space-y-6 "
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}>
        
        <h1 className="text md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          I'm 
          <span className="text-gray-800 dark:text-gray-200">{multxt}</span>
          <Cursor  cursorStyle='<'/>
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-lg dark:text-gray-200">
          I’m a passionate developer with experience in React, TypeScript, and
          building dynamic web applications. I love creating clean, user-friendly
          interfaces and bringing ideas to life through code.
        </p>
        <a
          href="/Resume.pdf"
          download
          className="flex w-1/2 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-400 transition "
        >
          Click here to view my resume!<HiArrowDownTray className="h-5 w-5 ml-2" />
        </a>  
      </motion.div>

      {/* Right Side - Profile Picture */}
      <motion.div className="flex-1 flex justify-center mt-10 md:mt-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}>
        <img  
          src="/ME.jpg"
          alt="Ashaolu David"
          className="w-68 h-68 md:w-80 md:h-80 object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Intro;
