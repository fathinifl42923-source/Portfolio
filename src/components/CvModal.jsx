import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, X, AlertCircle, CheckCircle2 } from "lucide-react";
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

          {/* Setup / Instructions Notice */}
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/25 space-y-3 mb-6">
            <div className="flex items-start gap-2.5 text-xs text-zinc-300">
              <AlertCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white mb-1">CV File Setup Instructions:</p>
                <p className="text-zinc-300 leading-relaxed">
                  The portfolio is preconfigured to download from the path:{" "}
                  <code className="bg-[#0a0514] px-1.5 py-0.5 rounded text-purple-300 font-mono">
                    /cv.pdf
                  </code>
                </p>
                <p className="mt-1.5 text-zinc-400">
                  Simply save your PDF file inside the project's <strong className="text-purple-200">public</strong> folder and name it <strong className="text-purple-200">cv.pdf</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={personalInfo.cvPath}
              download="MNF_Nifla_CV.pdf"
              onClick={onClose}
              className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 purple-button-glow transition-all duration-200 border border-purple-400/30"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (cv.pdf)</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
