import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Assuming you have lucide-react installed; used in home.tsx
// import TextShuffle from "./shuffle";

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
      title: "Occupy",
      description:
        "Occupy is a housing platform that allows tenants in Nigeria to move into properties by paying in installments, while landlords receive full rent upfront.",
      techStack: "React, TypeScript, Tailwind CSS",
      link: "https://occupy-v2.vercel.app/",
      image: "/public/occupy.PNG", // Add image URL if available
    },
    {
      title: "Open School Field",
      description:
        "A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces, increasing the credibility and accountability of primary and secondary institutions",
      techStack: "React, TypeScript, Tailwind CSS",
      link: "https://open-school-field1.vercel.app/",
      image: "/public/opschfld.PNG", // Add image URL if available
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my projects, technical skills, and professional experience in an interactive and visually appealing design.",
      techStack: "React, TypeScript, Tailwind CSS",
      link: "https://davashfolio1.vercel.app/",
      image: "/public/port.png",
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather forecast app built with React and OpenWeather API, providing global weather conditions and detailed forecasts that can be shared via whatsapp in an intuitive interface.",
      techStack: "React, Tailwind, Openweather API",
      link: "https://weather-app-delta-seven-75.vercel.app/",
      image: "/public/weather.PNG",
    },
    {
      title: "Task Manager App",
      description:
        "A task management app to help organize personal tasks with features like adding, editing, and deleting tasks, built with Javascript.",
      techStack: "HTML, CSS, JavaScript, Tailwind CSS",
      link: "https://to-do-list-khaki-six-62.vercel.app/",
      image: "/public/task.PNG",
    },
    {
      title: "Snake Xenzia",
      description:
        "A Simple snake xenzia game, made functional for both web and mobile players, can you get the highest score?",
      techStack: "HTML, CSS, JavaScript, Tailwind CSS",
      link: "https://snake-xenzia-beige.vercel.app/",
      image: "/public/snake.PNG",
    },
  ];

  if (selectedProject) {
    return (
      <section id="projects" className="py-13 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => setSelectedProject(null)}
            className="mb-8 text-gray-900 dark:text-gray-100 hover:cursor-pointer flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ← Back to Projects
          </motion.button>
          <motion.div
            className="bg-[#272727] rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Tech Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedProject.techStack}
              </p>
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
    <section className="py-10 md:py-10 px-4 md:px-6">
      <div className="md:w-2xl lg:w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Top Rated Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 max-w-xs mx-auto sm:max-w-sm md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-64 sm:h-60 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 
                   group-hover:scale-110 
                   md:group-hover:blur-sm           blur-sm md:blur-none"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                   transition-colors duration-300
                   group-hover:from-black/90 
                   md:group-hover:from-black/90"
              />

              {/* Content – always at bottom */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.techStack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More button – only on hover (desktop), or always visible on mobile if you want */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg backdrop-blur-sm transition
                     md:opacity-0 group-hover:opacity-100"
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
