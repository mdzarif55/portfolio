"use client";

import { useState } from "react";
import {
  Code2,
  Server,
  BarChart3,
  Wrench,
  Layers,
  Sparkles,
  CheckCircle,
  Cpu,
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolio-data";

export function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, any> = {
    "Frontend & Mobile": Code2,
    "Backend & Database": Server,
    "Data Analysis & Testing": BarChart3,
    "Tools, Design & Platforms": Wrench,
  };

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-neutral-100/50 dark:bg-neutral-900/20 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
            Comprehensive Technical Skills
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Mastering full-stack web architectures, cross-platform mobile frameworks, and algorithmic data design.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "All"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.title
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Layers;
            return (
              <div
                key={category.title}
                className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white text-lg sm:text-xl">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2.5 pt-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                        skill.featured
                          ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/70 shadow-sm"
                          : "bg-neutral-100 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60"
                      } hover:-translate-y-0.5 hover:shadow-sm`}
                    >
                      <span>{skill.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                          skill.level === "Expert" || skill.level === "Advanced"
                            ? "bg-blue-600/15 text-blue-700 dark:text-blue-300 font-bold"
                            : "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
