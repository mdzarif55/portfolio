"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#07090e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & info */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              {personal.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              MERN Stack &amp; Cross-Platform Developer • Dhaka, Bangladesh
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 text-center text-xs text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Md. Muhtasim Zarif. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Tailwind CSS &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
