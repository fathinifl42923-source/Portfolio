import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Info,
  X,
  Code2,
  Database,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [selectedPlaceholder, setSelectedPlaceholder] = useState(null);

  const handleLinkClick = (e, project, type) => {
    e.preventDefault();
    if (project.isCurrentSite && type === "demo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (project.isPlaceholderLink) {
      setSelectedPlaceholder({
        title: project.title,
        type: type === "github" ? "GitHub Repository" : "Live Demo",
        varName: type === "github" ? "githubUrl" : "demoUrl",
      });
    } else {
      const url = type === "github" ? project.githubUrl : project.demoUrl;
      if (url && url !== "#") {
        if (url.startsWith("#")) {
          const el = document.querySelector(url);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          title="Practical Applications Built"
          subtitle="Explore key full-stack and web systems developed to address real-world management and user needs."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl glass-panel bg-[#130a24]/90 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-glow-md flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header Ambient Stripe */}
              <div className="h-2 w-full bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600" />

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Bar with Project Number & Highlight */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold purple-glow-badge">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      {project.highlight}
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-400/60 uppercase">
                      Project 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-white mb-1.5 group-hover:text-purple-200 transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  {project.subtitle && (
                    <p className="text-sm font-semibold text-purple-300/90 mb-4">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-zinc-300/90 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-purple-300/80 uppercase tracking-wider mb-2.5">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-950/70 text-purple-200 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions: GitHub & Live Demo Buttons */}
                <div className="pt-6 border-t border-purple-500/15 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={(e) => handleLinkClick(e, project, "github")}
                    className="w-full sm:w-1/2 py-3 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400/60 text-purple-100 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </button>

                  {project.isCurrentSite ? (
                    <button
                      onClick={(e) => handleLinkClick(e, project, "demo")}
                      className="w-full sm:w-1/2 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 border border-emerald-400/40 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                      <span>Live Site · You're Here</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleLinkClick(e, project, "demo")}
                      className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 purple-button-glow transition-all duration-200 border border-purple-400/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Placeholder Link Notification Modal */}
      <AnimatePresence>
        {selectedPlaceholder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-[#140b28] border border-purple-500/40 shadow-glow-lg text-left"
            >
              <button
                onClick={() => setSelectedPlaceholder(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4">
                <Info className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Editable Link Placeholder
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                The <strong className="text-purple-300">{selectedPlaceholder.type}</strong> link for{" "}
                <strong className="text-white">"{selectedPlaceholder.title}"</strong> is currently configured as a placeholder.
              </p>

              <div className="p-3.5 rounded-xl bg-[#0b0514] border border-purple-500/20 text-xs font-mono text-purple-200/90 mb-5 break-all">
                Edit <strong>{selectedPlaceholder.varName}</strong> inside{" "}
                <span className="text-purple-400">src/data/portfolioData.js</span> to link your real repository or deployment!
              </div>

              <button
                onClick={() => setSelectedPlaceholder(null)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all purple-button-glow"
              >
                Understood
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
