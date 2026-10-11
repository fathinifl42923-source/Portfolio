import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { careerInterests } from "../data/portfolioData";

const iconMap = {
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
};

export default function CareerInterests() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Career Focus"
          title="Areas of Specialization & Interest"
          subtitle="Discover my primary technical directions and what drives my pursuit of excellence in software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {careerInterests.map((interest, index) => {
            const Icon = iconMap[interest.iconName] || Layers;

            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl p-8 glass-panel bg-gradient-to-b from-[#160b29]/90 to-[#0f071c]/90 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-glow-md flex flex-col justify-between"
              >
                {/* Glowing Top accent line */}
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${interest.color} mb-6 group-hover:w-28 transition-all duration-300`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-purple-900/40 border border-purple-400/30 text-purple-300 group-hover:scale-110 group-hover:text-white transition-all shadow-glow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-purple-400/60 uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {interest.title}
                  </h3>

                  <p className="text-zinc-300/90 text-sm sm:text-base leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-purple-500/10 flex items-center gap-2 text-xs text-purple-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Key Career Path</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
