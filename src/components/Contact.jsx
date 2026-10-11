import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const isEmailPlaceholder = personalInfo.contact.email.includes("example.com");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Let's Connect"
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations, project discussions, or entry-level opportunities."
        />

        {/* Central Contact Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-12 glass-panel bg-gradient-to-br from-[#160b2b]/95 via-[#0e0719]/90 to-[#140b28]/95 border border-purple-500/25 shadow-glow-card relative"
          >
            <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold purple-glow-badge">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Open for Collaboration & Entry-Level Roles</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Connect Directly with {personalInfo.name}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Contact information is configured with direct links and copy actions below.
              </p>
            </div>

            {/* Grid of contact channels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.contact.email, "email")}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedType === "email" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-purple-300" />
                    )}
                  </button>
                </div>
                <span className="text-xs font-semibold text-purple-300/80 uppercase tracking-wider block mb-1">
                  Email Address
                </span>
                <p className="text-white font-mono text-sm sm:text-base break-all mb-4">
                  {personalInfo.contact.email}
                </p>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white transition-colors group-hover:underline"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send an Email</span>
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.contact.phone, "phone")}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                    title="Copy Phone"
                    aria-label="Copy Phone number"
                  >
                    {copiedType === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-purple-300" />
                    )}
                  </button>
                </div>
                <span className="text-xs font-semibold text-purple-300/80 uppercase tracking-wider block mb-1">
                  Phone / Mobile
                </span>
                <p className="text-white font-mono text-sm sm:text-base mb-4">
                  {personalInfo.contact.phone}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Available during working hours</span>
                </span>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-purple-300/80 uppercase tracking-wider block mb-1">
                  Location
                </span>
                <p className="text-white font-semibold text-base sm:text-lg mb-1">
                  {personalInfo.contact.location}
                </p>
                <p className="text-zinc-400 text-xs">
                  Open to local roles and remote collaboration
                </p>
              </div>

              {/* Social Profiles Card */}
              <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-105 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-purple-300/80 uppercase tracking-wider block mb-1">
                    Professional Networks
                  </span>
                  <p className="text-zinc-300 text-xs mb-4">
                    Connect on GitHub and LinkedIn
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Note on editing placeholders */}
            <div className="p-4 rounded-2xl bg-[#0a0513] border border-purple-500/20 text-center">
              <p className="text-xs text-zinc-400 leading-relaxed">
                💡 <span className="text-purple-300 font-medium">Quick Customization Tip:</span> You can update your email, phone, GitHub, and LinkedIn links in one place inside{" "}
                <code className="text-purple-300 font-mono bg-purple-950/60 px-1.5 py-0.5 rounded">
                  src/data/portfolioData.js
                </code>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
