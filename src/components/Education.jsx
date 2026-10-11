import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { educationList } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-purple-700/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Education"
          title="Academic Background"
          subtitle="My educational journey establishing core fundamentals in Information Technology and analytical thinking."
        />

        <div className="max-w-3xl mx-auto">
          {/* Timeline Wrapper */}
          <div className="relative border-l-2 border-purple-500/25 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {educationList.map((item, index) => {
              const isHndit = item.id === "hndit";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Node Badge with Glow */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-purple-800 to-indigo-600 border-2 border-purple-400 flex items-center justify-center text-white shadow-glow-sm group-hover:scale-110 group-hover:shadow-glow-md transition-all">
                    {isHndit ? (
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <School className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>

                  {/* Education Card */}
                  <div className="glass-panel rounded-2xl p-6 sm:p-8 bg-[#130a24]/85 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/70 text-purple-300 border border-purple-500/30">
                        <Calendar className="w-3 h-3 text-purple-400" />
                        <span className="font-mono">{item.period}</span>
                      </span>

                      {item.isOngoing && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Course
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {item.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-purple-300/90 text-sm font-semibold mb-4">
                      <BookOpen className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{item.institution}</span>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Notice for placeholder */}
                    <div className="mt-4 pt-3 border-t border-purple-500/10 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                      <span>* Period is an editable placeholder in portfolioData.js</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
