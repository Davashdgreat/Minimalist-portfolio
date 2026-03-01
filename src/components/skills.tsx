import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
    // Controls for Framer Motion animations
    const controls = useAnimation();

    // Observe when the heading enters the viewport
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.1, // Trigger when 10% of the heading is visible
    });
  
    // Start the animation when the heading is in view
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    // Define animation variants
    const letterVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring' as const,
          damping: 10,
          stiffness: 100,
        },
      },
    };
  
    const containerVariants = {
      visible: {
        transition: {
          staggerChildren: 0.1, // Stagger each letter's animation
        },
      },
    };
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const skillsData: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React & TypeScript', proficiency: 90 },
        { name: 'HTML5, CSS3, Tailwind CSS', proficiency: 85 },
        { name: 'JavaScript (ES6+)', proficiency: 95 },
        { name: 'Responsive Design', proficiency: 80 },
        { name: 'State Management (Redux, Context API)', proficiency: 75 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'PHP', proficiency: 85 },
        { name: 'MySQL', proficiency: 90 },
        { name: 'Authentication & Authorization', proficiency: 90 },
        { name: 'XAMPP', proficiency: 80 },
      ],
    },
    {
      category: 'Database Administration',
      skills: [
        { name: 'Database Design & Optimization', proficiency: 75 },
        { name: 'Data Modeling', proficiency: 70 },
        { name: 'SQL Query Optimization', proficiency: 85 },
        { name: 'Database Backup & Restoration', proficiency: 60 },
      ],
    },
  ];

  const toggleSkill = (skillName: string) => {
    setOpenSkill(openSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
      <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-gray-100"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {'My Skills'.split('').map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-900 mb-10 max-w-3xl mx-auto dark:text-gray-100">
          Here are the technologies I have experience with, and how familiar I am with each.
        </p>

        {/* Grid Layout for Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">
                {category.category}
              </h3>
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`bg-white shadow-lg rounded ${
                    openSkill === skill.name ? 'bg-gray-100' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleSkill(skill.name)}
                    className="w-full text-left p-4 font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                  >
                    {skill.name}
                  </button>
                  <AnimatePresence>
                    {openSkill === skill.name && (
                      <motion.div
                        className="p-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          transition: { opacity: { duration: 0.3 }, y: { type: 'spring', stiffness: 150, damping: 25 } },
                        }}
                        transition={{
                          opacity: { duration: 0.3 },
                          y: { type: 'spring', stiffness: 50, damping: 20 },
                        }}
                      >
                        <div className="flex items-center">
                          <span className="text-gray-700 mr-4">Proficiency:</span>
                          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                              className="bg-gray-600 h-4 rounded-full"
                              style={{ width: `${skill.proficiency}%` }}
                            ></div>
                          </div>
                          <span className="ml-4 text-gray-700">{skill.proficiency}%</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
