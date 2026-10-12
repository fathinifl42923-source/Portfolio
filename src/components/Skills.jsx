import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  CheckSquare,
  PenTool,
  Wrench,
  Users,
  Sparkles,
  Code2,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "../data/portfolioData";

const categoryIconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  CheckSquare: CheckSquare,
  PenTool: PenTool,
  Wrench: Wrench,
  Users: Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-950/25 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Toolkit"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of tools, languages, methodologies, and frameworks I work with."
        />

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = categoryIconMap[category.iconName] || Layout;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl p-7 glass-panel bg-[#130a24]/85 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-glow-md flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-900/70 to-purple-600/30 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 group-hover:text-purple-200 transition-all shadow-glow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs text-purple-400/70 font-mono">
                        {category.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="px-3.5 py-2 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/25 hover:border-purple-400/60 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-purple-300" />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-purple-500/10 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 text-purple-300/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    Active Practice
                  </span>
                  <span className="font-mono text-purple-400/60">Practical Stack</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
