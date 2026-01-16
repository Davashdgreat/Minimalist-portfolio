import React from "react";
import { Link } from "react-router-dom";
import About from "./about";

const Navbar: React.FC = () => {

  return (
     <header>
          <div>
            <nav className="m-8 flex justify-between text-white">
              <h2 className="text-xl font-300"><a href="./home">DAVASH.</a></h2>
              <div>
                <a href="/About" className="mx-10">
                  ABOUT
                </a>
                <a href="/projects" className="mx-10">
                  PROJECTS
                </a>
                <a href="/contact" className="mx-10">
                  CONTACT
                </a>
                {/* Future: Admin login button */}
              </div>
            </nav>
          </div>
        </header>
  );
};

export default Navbar;
