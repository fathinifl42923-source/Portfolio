import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Terminal,
  Code2,
  CheckCircle2,
  Palette,
  User,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenCvModal }) {
  const [imageError, setImageError] = useState(false);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Animated Purple Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top-right glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-purple-700/30 blur-[130px]"
        />

        {/* Center-left glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 -left-32 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-indigo-700/25 blur-[120px]"
        />

        {/* Bottom center glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-gradient-to-t from-purple-950/20 to-transparent blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c084fc 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold purple-glow-badge">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>{personalInfo.status}</span>
              <span className="text-purple-400/50">•</span>
              <span className="text-purple-300 font-normal">{personalInfo.location}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm{" "}
                <span className="purple-gradient-text block mt-1 sm:inline sm:mt-0">
                  {personalInfo.name}
                </span>
              </h1>
              <div className="inline-block">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            {/* Hero Description */}
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* Three Focus Pillars Pill Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-950/50 text-purple-200 border border-purple-500/25">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                Full Stack Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-950/50 text-purple-200 border border-purple-500/25">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                Software QA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-950/50 text-purple-200 border border-purple-500/25">
                <Palette className="w-3.5 h-3.5 text-fuchsia-400" />
                UI/UX Design
              </span>
            </div>

            {/* Call to Actions & Social Links */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 purple-button-glow transition-all duration-300 border border-purple-400/40 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-purple-950/40 text-purple-100 hover:text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download CV</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-900/40 text-zinc-300 hover:text-purple-300 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-200 hover:scale-105 shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-900/40 text-zinc-300 hover:text-purple-300 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-200 hover:scale-105 shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo Card with Glow & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Concentric Glowing Ambient Rings */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 via-fuchsia-600/10 to-indigo-600/20 blur-2xl -z-10 animate-pulse" />

              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl sm:rounded-full border border-purple-500/20 -z-10 pointer-events-none" />
              <div className="absolute -inset-8 rounded-3xl sm:rounded-full border border-purple-500/10 -z-10 pointer-events-none" />

              {/* Main Photo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-purple-500/40 via-purple-900/30 to-indigo-500/40 shadow-glow-lg border border-purple-400/30">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#120a22] flex items-center justify-center relative group">
                  {!imageError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Stylish High-Tech Placeholder if profile.jpg is missing */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1b0d33] via-[#120a22] to-[#0c0617] relative">
                      {/* Placeholder subtle background geometry */}
                      <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                      <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center shadow-glow-md border border-purple-300/40 mb-4 group-hover:scale-105 transition-transform">
                        <span className="text-3xl font-extrabold text-white tracking-widest">
                          {personalInfo.initials}
                        </span>
                      </div>

                      <div className="relative z-10 space-y-1">
                        <h2 className="text-lg font-bold text-white tracking-tight">
                          {personalInfo.name}
                        </h2>
                        <p className="text-xs text-purple-300 font-medium">
                          {personalInfo.title}
                        </p>
                      </div>

                      <div className="relative z-10 mt-4 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] text-purple-200/80 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span>HNDIT Student</span>
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09050e]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Technology Badge 1 (Full Stack) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-2 sm:-left-6 px-4 py-2.5 rounded-2xl bg-[#140b26]/90 border border-purple-500/30 backdrop-blur-xl shadow-glow-sm flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Focus</p>
                  <p className="text-xs font-bold text-white">Web & QA</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 (SLIATE HNDIT) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-top-2 sm:-right-6 px-4 py-2.5 rounded-2xl bg-[#140b26]/90 border border-purple-500/30 backdrop-blur-xl shadow-glow-sm flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Education</p>
                  <p className="text-xs font-bold text-white">SLIATE HNDIT</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
