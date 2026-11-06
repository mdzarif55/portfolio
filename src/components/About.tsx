"use client";

import { useState } from "react";
import {
  User,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Copy,
  Check,
  Code,
  Layers,
  Sparkles,
  Award,
  TerminalSquare,
  FileText,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface AboutProps {
  onOpenResume: () => void;
}

export function About({ onOpenResume }: AboutProps) {
  const { personal, education } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const pillars = [
    {
      title: "MERN Stack Engineering",
      desc: "Architecting end-to-end full-stack applications with React.js, Node.js, Express, and MongoDB.",
      icon: Layers,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Cross-Platform & Mobile",
      desc: "Developing unified responsive web and mobile experiences with React Native, Next.js, and modern CSS.",
      icon: Code,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Competitive Problem Solving",
      desc: "150+ algorithmic challenges solved on Codeforces. Strong foundations in Dynamic Programming and C fundamentals.",
      icon: TerminalSquare,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Data & API Rigor",
      desc: "Designing clean REST APIs, SQL querying, Postman automated testing, and responsive data dashboards.",
      icon: Award,
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
            <User className="w-3.5 h-3.5" />
            <span>About The Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
            Engineering High-Performance Web &amp; Mobile Experiences
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Dedicated software developer with a disciplined algorithmic mindset and passion for scalable user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Detailed Bio & Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span>Career Objective &amp; Philosophy</span>
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
                {personal.bio}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                Whether deploying verified creator marketplace systems like <span className="text-blue-600 dark:text-blue-400 font-semibold">StudioSpace</span>, architecting healthcare pharmaceutical e-commerce in <span className="text-blue-600 dark:text-blue-400 font-semibold">Medicare Solution</span>, or tracking national market essentials with <span className="text-blue-600 dark:text-blue-400 font-semibold">Bajar Dor</span>, my focus remains constant: delivering clean architecture, sub-second interactions, and measurable business impact.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-blue-400 dark:text-blue-600" />
                  <span>Inspect Official Resume PDF</span>
                </button>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-white/70 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${pillar.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-base mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Card, Fast Copy, Education Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Communication Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
              <h3 className="font-bold text-neutral-900 dark:text-white text-lg border-b border-neutral-200 dark:border-neutral-800 pb-3">
                Direct Contact &amp; Coordinates
              </h3>

              <div className="space-y-3">
                {/* Email Item with copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0"
                    title="Copy email"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item with copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                        Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-emerald-600 dark:hover:text-emerald-400 truncate block font-mono"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60">
                  <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Preview Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 via-indigo-900/10 to-transparent dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-neutral-900/40 border border-blue-200 dark:border-blue-900/50 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    Undergraduate Degree
                  </span>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-base">
                    Bachelor of Science in Computer Science &amp; Engineering
                  </h4>
                </div>
              </div>

              <div className="pt-2 text-sm space-y-1 text-neutral-600 dark:text-neutral-300">
                <p className="font-medium text-neutral-800 dark:text-neutral-200">
                  Daffodil Institute of IT
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono font-bold">
                    CGPA 3.18
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
