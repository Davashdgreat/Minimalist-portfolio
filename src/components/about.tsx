import React from 'react';
import { motion } from 'framer-motion';

interface TextShuffleProps {
  text: string; // The target text to reveal
  delay?: number; // Initial delay before starting shuffle in ms (default: 0)
  baseDelay?: number; // Alias for delay (compatibility)
  duration?: number; // Total animation duration in ms (default: 1000)
  charSet?: string; // Characters to shuffle with (default: letters + numbers + symbols)
  className?: string; // Optional CSS class for styling
}

const TextShuffle: React.FC<TextShuffleProps> = ({
  text,
  delay = 0,
  baseDelay,
  duration = 1000,
  // charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  className,
}) => {
  const [displayText, setDisplayText] = React.useState(""); // Start blank
  const animationRef = React.useRef<number | null>(null); // For requestAnimationFrame
  const startTimeRef = React.useRef<number | null>(null); // Track start time

  React.useEffect(() => {
    const startAnimation = () => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = (timestamp - startTimeRef.current) / duration;

        if (progress < 1) {
          const shuffled = text
            .split("")
            .map(() => {
              // Shuffle all characters randomly until the full duration ends
              return charSet[Math.floor(Math.random() * charSet.length)];
            })
            .join("");
          setDisplayText(shuffled);
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayText(text); // Ensure final text is set
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    // Support both `baseDelay` (used in some JSX) and `delay`
    const startDelay = typeof baseDelay === 'number' ? baseDelay : delay;

    const timeoutId = setTimeout(startAnimation, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [text, delay, baseDelay, duration, charSet]); // Re-run if props change

  return <span className={className}>{displayText}</span>;
}

const About: React.FC = () => {
  return (
    <section className="py-15 px-3 md:px-10">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
        {/* Left Side */}
        <div className="flex flex-col justify-around lg:w-1/2">
          {/* Mobile Image */}
          <div className="grid grid-cols-2 gap-4 mb-8 lg:hidden">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/public/pfp.jpg"
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
              I'm David Ashaolu, a a Computer Science graduate and software engineer who builds technology with business impact in mind. With a strong frontend foundation and backend data experience, I’ve developed dashboards and enterprise tools that transform operational data into decision-ready insights..
            </motion.p>
      
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I’m particularly interested in building products and digital solutions that sit at the intersection of engineering, business strategy, and user experience by utilizing my expertise in frontend development with React and TypeScript, backend with Javascipt frameworks, PHP and MySQL, and database administration.  
            </motion.p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col justify-between lg:w-1/2">
          {/* Desktop Image */}
          <div className="hidden lg:block relative overflow-hidden rounded-lg mb-8">
            <motion.img
              src="/public/pfp.jpg"
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
                {/* ashaoludavid1@gmail.com */}
                 <TextShuffle text="ashaoludavid1@gmail.com" baseDelay={900} />
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
                {/* /Davashdgreat */}
                 <TextShuffle text="/Davashdgreat" baseDelay={900} />
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
                {/* /in/ashaolu-david-1b4a091b6 */}
               <TextShuffle text="/in/ashaolu-david-1b4a091b6" baseDelay={900} />
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
                {/* /@imdavash8740 */}
                 <TextShuffle text="/@imdavash8740" baseDelay={900} />
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
