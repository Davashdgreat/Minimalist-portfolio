import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  path: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/about", icon: User, label: "About" },
  { path: "/projects", icon: Briefcase, label: "Projects" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

// Mobile Navigation Component
const MobileNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 px-6 py-3 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 ${
                isActive
                  ? "bg-white text-black scale-110"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={24} />
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

// Shuffle hook for desktop nav
const useShuffleText = (originalText: string, isHovered: boolean) => {
  const [displayText, setDisplayText] = useState(originalText);
  const frameRef = useRef<number | undefined>(undefined);
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>[]{}";

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(originalText);
      if (frameRef.current !== undefined) cancelAnimationFrame(frameRef.current);
      return;
    }

    let iteration = 0;
    const totalFrames = originalText.length * 3;

    const animate = () => {
      setDisplayText(
        originalText
          .split("")
          .map((originalText, index) => {
            if (index < Math.floor(iteration / 3)) return originalText[index];
            return charSet[Math.floor(Math.random() * charSet.length)];
          })
          .join("")
      );

      if (iteration < totalFrames) {
        iteration++;
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== undefined) cancelAnimationFrame(frameRef.current);
    };
  }, [isHovered, originalText]);

  return displayText;
};

// Desktop Navigation Component
const DesktopNav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  return (
    <motion.nav
      className="fixed left-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-3xl py-8 px-3 z-50 flex flex-col items-center shadow-2xl border border-gray-800"
      style={{ height: "95vh" }}
      initial={false}
      animate={{
        width: isExpanded ? 200 : 90,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setHoveredItem(null);
      }}
    >
      {/* Logo */}
      <div className="mb-12 flex items-center justify-center h-10">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.span
              key="text"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-bold text-white whitespace-nowrap"
            >
              DAVASH.
            </motion.span>
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 bg-gradient-to-br from-gray-500 to-white-500 rounded-2xl flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">D</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-3 w-full flex-1 justify-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          const isHovered = hoveredItem === item.path;
          const displayText = useShuffleText(
            item.label,
            isHovered && isExpanded
          );

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 mx-2 ${
                isActive
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Icon size={24} className="flex-shrink-0" />

              <div className="flex items-center overflow-hidden">
                {/* Left bracket */}
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{
                    opacity: isHovered && isExpanded ? 1 : 0,
                    x: isHovered && isExpanded ? 0 : -5,
                  }}
                  transition={{ duration: 0.15 }}
                  className={`text-lg leading-none ${
                    isActive ? "text-black" : "text-gray-500"
                  }`}
                >
                  [
                </motion.span>

                {/* Text */}
                <motion.span
                  className={`text-sm font-medium whitespace-nowrap mx-1 ${
                    isActive ? "text-black" : "text-gray-300"
                  }`}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {displayText}
                </motion.span>

                {/* Right bracket */}
                <motion.span
                  initial={{ opacity: 0, x: 5 }}
                  animate={{
                    opacity: isHovered && isExpanded ? 1 : 0,
                    x: isHovered && isExpanded ? 0 : 5,
                  }}
                  transition={{ duration: 0.15 }}
                  className={`text-lg leading-none ${
                    isActive ? "text-black" : "text-gray-500"
                  }`}
                >
                  ]
                </motion.span>
              </div>
            </NavLink>
          );
        })}
      </div>

      {/* Copyright */}
      <div className="mt-auto pt-8">
        <AnimatePresence>
          {isExpanded ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-gray-500 whitespace-nowrap"
            >
              © 2026 Davash
            </motion.p>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-gray-500 text-lg"
            >
              ©
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Main Navbar Component
const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
