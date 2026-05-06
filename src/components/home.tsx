import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

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

    const startDelay = typeof baseDelay === "number" ? baseDelay : delay;
    const timeoutId = setTimeout(startAnimation, startDelay);
    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [text, delay, baseDelay, duration, charSet]);

  return <span className={className}>{displayText}</span>;
};

const projects = [
  {
    title: "Occupy",
    description:
      "Housing platform allowing tenants in Nigeria to move in by paying installments while landlords receive full rent upfront.",
    link: "https://occupy-v2.vercel.app/",
    image: "/occupy.PNG",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Open School Field",
    description:
      "Web app for renting school football fields — book fields, manage listings, and offer rental spaces.",
    link: "https://open-school-field1.vercel.app/",
    image: "/opschfld.PNG",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Weather Forecast",
    description:
      "React weather app using OpenWeather API with global forecasts shareable via WhatsApp.",
    link: "https://weather-app-delta-seven-75.vercel.app/",
    image: "/weather.PNG",
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
  },
  {
    title: "Snake Xenzia",
    description:
      "Classic snake game playable on both web and mobile. Can you beat the high score?",
    link: "https://snake-xenzia-beige.vercel.app/",
    image: "/snake.PNG",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Home: React.FC = () => {
  return (
    <section className="py-6 md:py-10 lg:py-12 text-white">
      {/* Hero */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-10 lg:mb-14 gap-5 md:gap-4">
        <div className="leading-none">
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-medium tracking-tight text-gray-100">
            DAV
            <TextShuffle text="ID" baseDelay={300} />
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-medium tracking-tight text-gray-100">
            ASH
            <TextShuffle text="AOLU" baseDelay={900} />
          </h1>
        </div>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-200 md:text-right md:max-w-[220px] lg:max-w-xs leading-relaxed">
          DEVELOPER • AUTOMATION ENGINEER • CREATOR
        </p>
      </div>

      {/* Projects header */}
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <h2 className="flex items-end gap-1 text-xl sm:text-2xl md:text-3xl font-bold text-gray-100">
          PROJECTS <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6 mb-0.5" />
        </h2>
        <a
          href="/projects"
          className="flex items-center gap-1 text-sm text-gray-200 hover:text-white transition-colors duration-300"
        >
          See More <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Project cards — horizontal scroll, bleeds to screen edge on mobile */}
      <div
        className="flex overflow-x-auto gap-4 snap-x snap-mandatory py-2 -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[75vw] max-w-[260px] sm:w-60 sm:max-w-none md:w-64 lg:w-72 xl:w-80 h-44 sm:h-48 md:h-42 lg:h-60 xl:h-45 flex-shrink-0 snap-start rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 border border-white/10 group relative cursor-pointer"
          >
            <img
              alt={project.title}
              src={project.image}
              className="w-full h-full object-cover transition duration-700 group-hover:blur-sm group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/85 group-hover:to-black/40 transition-all duration-500 p-4 md:p-5">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-1.5">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/20 text-white text-[10px] sm:text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-white font-medium hover:text-gray-200 transition-colors"
                >
                  View Project <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
