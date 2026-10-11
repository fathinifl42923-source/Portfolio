import React from "react";
import { motion } from "framer-motion";
import { Code2, CheckCircle2, Palette, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { personalInfo, aboutCards } from "../data/portfolioData";

const iconMap = {
  Code2: Code2,
  CheckCircle2: CheckCircle2,
  Palette: Palette,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Passion for Building & Testing"
          subtitle="A dedicated IT student striving to craft robust software, reliable test workflows, and delightful user journeys."
        />

        {/* Narrative Biography Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-10 mb-14 glass-panel border border-purple-500/20 bg-gradient-to-br from-[#140b26]/90 via-[#0f071a]/80 to-[#160a2b]/90 shadow-glow-card"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold tracking-wide uppercase">
                <Sparkles className="w-4 h-4" />
                <span>My Journey & Vision</span>
              </div>
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-normal">
                {personalInfo.aboutMe}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                <span className="text-xs text-purple-300 font-medium block">Current Status</span>
                <span className="text-sm font-semibold text-white">HNDIT Student at ATI Kurunegala</span>
              </div>
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                <span className="text-xs text-purple-300 font-medium block">Core Aspirations</span>
                <span className="text-sm font-semibold text-white">Full Stack Dev • QA • UI/UX</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Attractive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {aboutCards.map((card, index) => {
            const Icon = iconMap[card.iconName] || Code2;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-7 glass-panel bg-[#130a24]/80 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-glow-md"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Card Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-900/60 to-purple-600/30 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 group-hover:text-purple-200 transition-all duration-300 shadow-glow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Skill summary pills */}
                <div className="pt-4 border-t border-purple-500/15">
                  <div className="flex flex-wrap gap-1.5">
                    {card.skillsSummary.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-950/60 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
