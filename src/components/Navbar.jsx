import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sparkles, ExternalLink } from "lucide-react";
import { personalInfo, navLinks } from "../data/portfolioData";

export default function Navbar({ onOpenCvModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09050e]/85 backdrop-blur-xl border-b border-purple-500/15 py-3 shadow-lg shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex items-center gap-3 cursor-pointer select-none"
            aria-label="M.N.F. Nifla - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300 border border-purple-400/30">
              <span className="text-sm font-extrabold tracking-wider">{personalInfo.initials}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight flex items-center gap-1.5">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-purple-300/70 tracking-wide uppercase">
                {personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-purple-500/15 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-purple-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full shadow-glow-sm -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA (Download CV) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center gap-2 purple-button-glow transition-all duration-300 border border-purple-400/30"
              aria-label="Download CV"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25 text-purple-200 hover:text-white hover:bg-purple-900/40 transition-colors focus:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-purple-500/20 bg-[#0c0616]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-purple-600/30 text-white border border-purple-500/40 font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-purple-500/15 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 purple-button-glow border border-purple-400/30"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
