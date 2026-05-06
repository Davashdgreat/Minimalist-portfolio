import React from 'react';
import { motion } from 'framer-motion';

interface TextShuffleProps {
  text: string;
  delay?: number;
  baseDelay?: number;
  duration?: number;
  charSet?: string;
  className?: string;
}

const TextShuffle: React.FC<TextShuffleProps> = ({
  text,
  delay = 0,
  baseDelay,
  duration = 1000,
  charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  className,
}) => {
  const [displayText, setDisplayText] = React.useState("");
  const animationRef = React.useRef<number | null>(null);
  const startTimeRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const startAnimation = () => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const progress = (timestamp - startTimeRef.current) / duration;
        if (progress < 1) {
          const shuffled = text
            .split("")
            .map(() => charSet[Math.floor(Math.random() * charSet.length)])
            .join("");
          setDisplayText(shuffled);
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayText(text);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    };

    const startDelay = typeof baseDelay === 'number' ? baseDelay : delay;
    const timeoutId = setTimeout(startAnimation, startDelay);
    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [text, delay, baseDelay, duration, charSet]);

  return <span className={className}>{displayText}</span>;
};

const About: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-16">
        {/* Left Side */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          {/* Mobile profile image */}
          <div className="lg:hidden">
            <img
              src="/pfp.jpg"
              alt="David Ashaolu"
              className="w-14 h-14 rounded-lg object-cover"
            />
          </div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ABOUT ME
          </motion.h1>

          <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm David Ashaolu, a Computer Science graduate and software engineer who builds technology with business impact in mind. With a strong frontend foundation and backend data experience, I've developed dashboards and enterprise tools that transform operational data into decision-ready insights.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm particularly interested in building products at the intersection of engineering, business strategy, and user experience — using React, TypeScript, JavaScript frameworks, PHP, and MySQL.
            </motion.p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between lg:w-1/2 gap-6">
          {/* Desktop profile image */}
          <div className="hidden lg:block relative overflow-hidden rounded-lg">
            <motion.img
              src="/pfp.jpg"
              alt="David Ashaolu"
              className="w-full object-cover rounded-lg"
              style={{ height: '300px' }}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Contact Links */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Email', text: 'ashaoludavid1@gmail.com', href: 'mailto:ashaoludavid1@gmail.com', delay: 0.2 },
              { label: 'GitHub', text: '/Davashdgreat', href: 'https://github.com/Davashdgreat', delay: 0.4 },
              { label: 'LinkedIn', text: '/in/davash/', href: 'https://www.linkedin.com/in/davash/', delay: 0.6 },
              { label: 'YouTube', text: '/@imdavash8740', href: 'https://www.youtube.com/@imdavash8740', delay: 0.8 },
            ].map(({ label, text, href, delay }) => (
              <motion.div
                key={label}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
              >
                <span className="font-medium text-sm text-gray-900 dark:text-gray-100 shrink-0">{label}</span>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs md:text-sm truncate"
                >
                  <TextShuffle text={text} baseDelay={900} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
