import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, X, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-[#140b28] border border-purple-500/40 shadow-glow-lg text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/25 border border-purple-400/35 flex items-center justify-center text-purple-300 shadow-glow-sm">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Download Curriculum Vitae (CV)
              </h3>
              <p className="text-xs text-purple-300/80 font-medium">
                {personalInfo.name} • {personalInfo.title}
              </p>
            </div>
          </div>

          {/* CV Information & Format Card */}
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/25 space-y-2 mb-6">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Document:</span>
              <span className="text-white font-medium">MNF_Nifla_CV.pdf (Official Resume)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Target Role:</span>
              <span className="text-purple-300 font-medium">Intern Software Engineer</span>
            </div>
            <div className="flex items-center justify-between text-xs pt-1 border-t border-purple-500/15">
              <span className="text-zinc-400">Status:</span>
              <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ATS-Friendly PDF Ready
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={personalInfo.cvPath}
              download="MNF_Nifla_CV.pdf"
              onClick={onClose}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 purple-button-glow transition-all duration-200 border border-purple-400/30"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400/60 text-purple-200 hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Preview</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
