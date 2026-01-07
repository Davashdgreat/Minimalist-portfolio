import React from "react";

const Navbar: React.FC = () => {

  return (
     <header>
          <div>
            <nav className="m-8 flex justify-between">
              <h2 className="text-xl font-300">DAVID ASHAOLU.</h2>
              <div>
                <a href="#about" className="mx-10">
                  ABOUT
                </a>
                <a href="#projects" className="mx-10">
                  PROJECTS
                </a>
                <a href="#contact" className="mx-10">
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
