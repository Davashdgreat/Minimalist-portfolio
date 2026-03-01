import { FC, useState, useRef, useEffect } from "react";
// Import icons if needed (e.g., from react-icons)
import { ArrowDownRight, ArrowUpRight } from "lucide-react"; // Optional: install lucide-react for arrows

interface TextShuffleProps {
  text: string; // The target text to reveal
  delay?: number; // Initial delay before starting shuffle in ms (default: 0)
  baseDelay?: number; // Alias for delay (compatibility)
  duration?: number; // Total animation duration in ms (default: 1000)
  charSet?: string; // Characters to shuffle with (default: letters + numbers + symbols)
  className?: string; // Optional CSS class for styling
}

const TextShuffle: FC<TextShuffleProps> = ({
  text,
  delay = 0,
  baseDelay,
  duration = 1000,
  // charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  className,
}) => {
  const [displayText, setDisplayText] = useState(""); // Start blank
  const animationRef = useRef<number | null>(null); // For requestAnimationFrame
  const startTimeRef = useRef<number | null>(null); // Track start time

  useEffect(() => {
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
};

// Sample project data - replace with your real ones
const projects = [
  {
    title: "Occupy",
    description:
      "Occupy is a housing platform that allows tenants in Nigeria to move into properties by paying in installments, while landlords receive full rent upfront.",
    techStack: "React, TypeScript, Tailwind CSS",
    link: "https://occupy-v2.vercel.app/", // GitHub link (replace with live link)
    image: "/public/occupy.PNG", // Optional: add image URL if available
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Open School Field",
    description:
      "A web app for renting school football fields, allowing users to book fields, agents to manage listings, and schools to offer rental spaces, increasing the credibilty and accountability of primary and secondary institutions",
    techStack: "React, TypeScript, Tailwind CSS",
    link: "https://open-school-field1.vercel.app/", // GitHub link (replace with a live link)
    image: "/public/opschfld.PNG", // Optional: add image URL if available
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather forecast app built with React and OpenWeather API, providing global weather conditions and detailed forecasts that can be shared via whatsapp in an intuitive interface.",
    techStack:
      "HTML, CSS, Javascript, React, Tailwind CSS, Openweather API Integration",
    link: "https://weather-app-delta-seven-75.vercel.app/", // GitHub link (replace with live link)
    image: "/public/weather.PNG", // Optional: add image URL if available
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Snake Xenzia",
    description:
      "A Simple snake xenzia game, made functional for both web and mobile players, can you get the highest score?",
    techStack: "HTML, CSS, JavaScript, Tailwind CSS",
    link: "https://snake-xenzia-beige.vercel.app/", // GitHub link (replace with live link)
    image: "/public/snake.PNG", // Optional: add image URL if available
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const Home: FC = () => {
  return (
    <section className="px-2 py-15 md:px-5 lg:px-8 text-white">
      {/* Hero */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-27">
        <div>
          <h1 className="text-7xl sm:text-7xl md:text-9xl font-500 tracking-tight leading-none text-gray-100 mb-5">
            DAV
            <TextShuffle text="ID" baseDelay={300} />
          </h1>
          <h1 className="text-7xl sm:text-7xl md:text-9xl font-500 tracking-tight leading-none text-gray-100">
            ASH
            <TextShuffle text="AOLU" baseDelay={900} />
          </h1>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="text-xl md:text-2xl font-500 text-gray-100">
            DEVELOPER • AUTOMATION ENGINEER • CREATOR
          </p>
        </div>
      </div>

      {/* Featured Projects - Horizontal Scroll */}
      <div className="mb-8">
        <h2 className="flex items-end text-2xl md:text-4xl font-bold text-gray-100">
          PROJECTS <ArrowDownRight className="ml-2 w-5 h-5" />
        </h2>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory justify-center cursor-pointer py-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-80 h-50 shrink-0 snap-start rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-100 group relative"
            >
              {/* Project Image as Background */}
              <img
                alt={project.title}
                src={project.image}
                className="w-full h-full object-cover transition duration-700 group-hover:blur-sm group-hover:scale-110"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent group-hover:from-black/80 group-hover:to-black/40 transition-colors duration-500">
               
                {/* Hidden on initial, shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col">
                  <h3 className="text-2xl font-semibold text-white mb-3 transition-colors">
                  {project.title}
                </h3>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
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
                    className="inline-flex items-center text-white font-medium hover:text-white transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center text-center justify-center">
            <a
              href="/projects"
              className="text-center items-center px-6 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              <ArrowUpRight className="m-auto w-5 h-5" />
              See More
            </a>
          </div>
        </div>

        {/* See More Button positioned at the right */}
        {/* <div className="a">
          <a
            href="#projects"
            className="inline-flex items-center px-6 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            See More
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
