import React from "react";
// Import icons if needed (e.g., from react-icons)
import { ArrowDownRight, ArrowUpRight } from "lucide-react"; // Optional: install lucide-react for arrows

const Home: React.FC = () => {
  // Sample project data - replace with your real ones
  const projects = [
    {
      title: "Open School Field",
      description:
        "A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces, increasing the credibilty and accountability of primary and secondary institutions",
      techStack: "React, TypeScript, Tailwind CSS",
      link: "https://open-school-field1.vercel.app/", // GitHub link (replace with a live link)
      image: "", // Optional: add image URL if available
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather forecast app built with React and OpenWeather API, providing global weather conditions and detailed forecasts that can be shared via whatsapp in an intuitive interface.",
      techStack:
        "HTML, CSS, Javascript, React, Tailwind CSS, Openweather API Integration",
      link: "https://weather-app-delta-seven-75.vercel.app/", // GitHub link (replace with live link)
      image: "", // Optional: add image URL if available
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Task Manager App",
      description:
        "A task management app to help organize personal tasks with features like adding, editing, and deleting tasks, built with Javascript.",
      techStack: "HTML, CSS, JavaScript, Tailwind CSS",
      link: "https://to-do-list-khaki-six-62.vercel.app/", // GitHub link (replace with live link)
      image: "", // Optional: add image URL if available
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Snake Xenzia",
      description:
        "A Simple snake xenzia game, made functional for both web and mobile players, can you get the highest score?",
      techStack: "HTML, CSS, JavaScript, Tailwind CSS",
      link: "https://snake-xenzia-beige.vercel.app/", // GitHub link (replace with live link)
      image: "", // Optional: add image URL if available
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section
      className="px-2 md:px-5 lg:px-8 bg-white"
    >
      {/* Hero */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-27">
        <div>
          <h1 className="text-7xl md:text-9xl font-500 tracking-tight leading-none text-gray-900">
            DAVID
          </h1>
          <h1 className="text-7xl md:text-9xl font-500 tracking-tight leading-none text-gray-900">
            ASHAOLU
          </h1>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-xl md:text-2xl font-500 text-gray-500">
            DEVELOPER • AUTOMATION ENGINEER • CREATOR
          </p>
        </div>
      </div>

      {/* Featured Projects - Horizontal Scroll */}
      <div className="mb-8">
        <h2 className="flex items-end text-2xl md:text-4xl font-bold text-gray-900">
          PROJECTS <ArrowDownRight className="ml-2 w-5 h-5" />
        </h2>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[32px] md:min-w-[42px] flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
            >
              {/* Project Image/Thumbnail */}
              {/* <div className="h-48 md:h-64 bg-gray-200 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Project Screenshot
                  </div>
                )}
              </div> */}

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors"
                >
                  View Project
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button positioned at the right */}
        <div className="absolute right-1">
          <a
            href="#projects"
            className="inline-flex items-center px-6 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            See More
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

// import React from "react";

// const Home: React.FC = () => {

//   return (
//     <section id="home" className=" px-10 py-20">
//       <div className="flex justify-between mb-20">
//         <div>
//           <p className="text-9xl font-500">DAVID</p>
//           <p className="text-9xl font-500">ASHAOLU</p>
//         </div>
//         <div className="flex m-auto items-center">
//             <p className="text-gray-400">DEVELOPER | DESIGNER | CREATOR</p>
//         </div>
//       </div>

//       {/* <div>project cards will be here horizontally </div> */}

//       <div className="flex justify-center">
//         <div className="card1">
//             <p>project 1</p>
//             <p>content</p>
//             <a href="#">link</a>
//         </div>
//         <div className="card1">
//             <p>project 1</p>
//             <p>content</p>
//             <a href="#">link</a>
//         </div>
//         <div className="card1">
//             <p>project 1</p>
//             <p>content</p>
//             <a href="#">link</a>
//         </div>
//         <div className="card1">
//             <p>project 1</p>
//             <p>content</p>
//             <a href="#">link</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
