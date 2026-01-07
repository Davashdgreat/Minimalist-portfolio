import React from 'react';
// import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {

  const projects = [
    {
      title: 'Open School Field',
      description:
        'A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces, increasing the credibilty and accountability of primary and secondary institutions',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://open-school-field1.vercel.app/', // GitHub link (replace with a live link)
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my projects, technical skills, and professional experience in an interactive and visually appealing design.',
      techStack: 'React, TypeScript, Tailwind CSS',
      link: 'https://davashfolio1.vercel.app/', // GitHub link (replace with live link)
    },
    {
        title: 'Weather Forecast App',
        description:
          'A weather forecast app built with React and OpenWeather API, providing global weather conditions and detailed forecasts that can be shared via whatsapp in an intuitive interface.',
        techStack: 'HTML, CSS, Javascript, React, Tailwind CSS, Openweather API Integration',
        link: 'https://weather-app-delta-seven-75.vercel.app/', // GitHub link (replace with live link)
      },
    {
      title: 'Task Manager App',
      description:
        'A task management app to help organize personal tasks with features like adding, editing, and deleting tasks, built with Javascript.',
      techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
      link: 'https://to-do-list-khaki-six-62.vercel.app/', // GitHub link (replace with live link)
    },
    {
        title: 'Quiz App',
        description:
          'A Simple quiz app, to know more about me, with strict controls and no bypassing!. Click below to see if you know alot about me!😂',
        techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
        link: 'https://quiz-app-nine-jade.vercel.app/', // GitHub link (replace with live link)
      },
      {
        title: 'Snake Xenzia',
        description:
          'A Simple snake xenzia game, made functional for both web and mobile players, can you get the highest score?',
        techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
        link: 'https://snake-xenzia-beige.vercel.app/', // GitHub link (replace with live link)
      }
    
  ];

  return (
   <div className="main">
    <p>
      hello world
    </p>
   </div>
  );
};

export default Projects;
