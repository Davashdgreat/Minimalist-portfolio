import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Assuming you have lucide-react installed; used in home.tsx

interface Project {
  title: string;
  description: string;
  techStack: string;
  link: string;
  image?: string; // Optional image URL
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Occupy',
      description:
        'Occupy is a housing platform that allows tenants in Nigeria to move into properties by paying in installments, while landlords receive full rent upfront.',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://occupy-v2.vercel.app/',
      image: '/src/assets/occupy.PNG', // Add image URL if available
    },
    {
      title: 'Open School Field',
      description:
        'A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces, increasing the credibility and accountability of primary and secondary institutions',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://open-school-field1.vercel.app/',
      image: '/src/assets/opschfld.PNG', // Add image URL if available
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my projects, technical skills, and professional experience in an interactive and visually appealing design.',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://davashfolio1.vercel.app/',
      image: '/src/assets/pfp.jpg',
    },
    {
      title: 'Weather Forecast App',
      description:
        'A weather forecast app built with React and OpenWeather API, providing global weather conditions and detailed forecasts that can be shared via whatsapp in an intuitive interface.',
      techStack: 'HTML, CSS, Javascript, React, Tailwind CSS, Openweather API Integration',
      link: 'https://weather-app-delta-seven-75.vercel.app/',
      image: '',
    },
    {
      title: 'Task Manager App',
      description:
        'A task management app to help organize personal tasks with features like adding, editing, and deleting tasks, built with Javascript.',
      techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
      link: 'https://to-do-list-khaki-six-62.vercel.app/',
      image: '',
    },
    {
      title: 'Snake Xenzia',
      description:
        'A Simple snake xenzia game, made functional for both web and mobile players, can you get the highest score?',
      techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
      link: 'https://snake-xenzia-beige.vercel.app/',
      image: '',
    },
  ];

  if (selectedProject) {
    return (
      <section id="projects" className="py-10 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => setSelectedProject(null)}
            className="mb-8 text-gray-900 dark:text-gray-100 hover:text-blue-600 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ← Back to Projects
          </motion.button>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {selectedProject.title}
            </h2>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {selectedProject.description}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Tech Stack</h3>
              <p className="text-gray-600 dark:text-gray-400">{selectedProject.techStack}</p>
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-900 dark:text-gray-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              View Live Project
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Project Image
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-gray-800 dark:bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


















// import React from 'react';
// // import { useInView } from 'react-intersection-observer';

// const Projects: React.FC = () => {

//   const projects = [
//     {
//       title: 'Open School Field',
//       description:
//         'A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces, increasing the credibilty and accountability of primary and secondary institutions',
//       techStack: 'React, TypeScript, Tailwind CSS',
//       link: 'https://open-school-field1.vercel.app/', // GitHub link (replace with a live link)
//     },
//     {
//       title: 'Portfolio Website',
//       description:
//         'A personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my projects, technical skills, and professional experience in an interactive and visually appealing design.',
//       techStack: 'React, TypeScript, Tailwind CSS',
//       link: 'https://davashfolio1.vercel.app/', // GitHub link (replace with live link)
//     },
//     {
//         title: 'Weather Forecast App',
//         description:
//           'A weather forecast app built with React and OpenWeather API, providing global weather conditions and detailed forecasts that can be shared via whatsapp in an intuitive interface.',
//         techStack: 'HTML, CSS, Javascript, React, Tailwind CSS, Openweather API Integration',
//         link: 'https://weather-app-delta-seven-75.vercel.app/', // GitHub link (replace with live link)
//       },
//     {
//       title: 'Task Manager App',
//       description:
//         'A task management app to help organize personal tasks with features like adding, editing, and deleting tasks, built with Javascript.',
//       techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
//       link: 'https://to-do-list-khaki-six-62.vercel.app/', // GitHub link (replace with live link)
//     },
//     {
//         title: 'Quiz App',
//         description:
//           'A Simple quiz app, to know more about me, with strict controls and no bypassing!. Click below to see if you know alot about me!😂',
//         techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
//         link: 'https://quiz-app-nine-jade.vercel.app/', // GitHub link (replace with live link)
//       },
//       {
//         title: 'Snake Xenzia',
//         description:
//           'A Simple snake xenzia game, made functional for both web and mobile players, can you get the highest score?',
//         techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
//         link: 'https://snake-xenzia-beige.vercel.app/', // GitHub link (replace with live link)
//       }
    
//   ];

//   return (
//    <div className="main">
//     <p>
//       hello world
//     </p>
//    </div>
//   );
// };

// export default Projects;
