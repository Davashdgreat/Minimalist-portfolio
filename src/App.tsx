import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Placeholder for future auth

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show the "Scroll to Top" button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true); // Show button when scrolled more than 300px
    } else {
      setShowScrollToTop(false); // Hide button when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll'
    });
  };

  return (  
      <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
  );
}

export default App;
