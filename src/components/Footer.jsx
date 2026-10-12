import React from "react";
import { ArrowUp, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, navLinks } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-purple-500/15 bg-[#07030c] relative overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center font-bold text-white shadow-glow-sm border border-purple-400/30 text-xs">
                {personalInfo.initials}
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Intern Software Engineer passionate about building robust web applications, ensuring software quality, and designing seamless user experiences.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-zinc-400 hover:text-purple-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Col 3: Social Links & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/20 text-zinc-300 hover:text-white transition-all shadow-sm"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/20 text-zinc-300 hover:text-white transition-all shadow-sm"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-900/30 hover:bg-purple-800/40 border border-purple-500/30 text-purple-300 hover:text-white transition-all ml-2"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="mt-12 pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
