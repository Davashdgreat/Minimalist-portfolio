import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'; // Import these

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Placeholder for future auth

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Auto-scroll to top on route changes
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Show/hide scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all: Redirect to home for any other path */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-500"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;


















// import "./App.css";
// import Navbar from "./components/navbar";
// import Home from "./components/home";
// import About from "./components/about";
// import Projects from "./components/projects";
// import Contact from "./components/contact";
// import Footer from "./components/footer";
// import { useEffect, useState } from "react";
// import {route, routes, Navigate} from "react-router-dom";

// function App() {
//   const [isAdmin, setIsAdmin] = useState(false); // Placeholder for future auth

//   const [showScrollToTop, setShowScrollToTop] = useState(false);

//   // Show the "Scroll to Top" button when scrolling down
//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       setShowScrollToTop(true); // Show button when scrolled more than 300px
//     } else {
//       setShowScrollToTop(false); // Hide button when at the top
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll); // Add scroll event listener
//     return () => window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // Smooth scroll'
//     });
//   };

//   return (  
//       <>
//         <Navbar />
//         <Home />
//         {/* <About />
//         <Projects />
//         <Contact /> */}
//         <Footer />
//       </>
//   );
// }

// export default App;
