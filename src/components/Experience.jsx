import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Terminal,
  Bug,
  Compass,
  Sparkles,
  Rocket,
  Code,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experienceData } from "../data/portfolioData";

const iconMap = {
  GraduationCap: GraduationCap,
  Terminal: Terminal,
  Bug: Bug,
  Compass: Compass,
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={experienceData.badge}
          title={experienceData.sectionTitle}
          subtitle="Honest, forward-looking insights into how I am building competencies and technical mastery."
        />

        {/* Intro Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-14 text-center p-6 sm:p-8 rounded-3xl glass-panel bg-[#140b27]/70 border border-purple-500/20"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mx-auto mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {experienceData.intro}
          </p>
        </motion.div>

        {/* Grid of growth pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {experienceData.milestones.map((item, index) => {
            const Icon = iconMap[item.iconName] || Terminal;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-7 glass-panel bg-[#120a22]/85 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-glow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 group-hover:scale-105 group-hover:text-white transition-all shadow-glow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
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
