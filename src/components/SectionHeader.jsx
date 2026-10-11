import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ badge, title, subtitle, align = "center" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold purple-glow-badge mb-4`}>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
