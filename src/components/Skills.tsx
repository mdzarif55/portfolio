"use client";

import { useState } from "react";
import {
  Terminal,
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Cloud,
  BrainCircuit,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, any> = {
    "Programming Languages": Terminal,
    "Frontend Development": Code2,
    "Backend Development": Server,
    "Database & ORM": Database,
    "Authentication & Security": ShieldCheck,
    "Tools & Platforms": Wrench,
    "Deployment & Integration": Cloud,
    "Computer Science": BrainCircuit,
  };

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeCategory);

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative bg-neutral-100/50 dark:bg-neutral-900/20 border-y border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
            Full-Stack Engineering Stack
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Production-proven tech stack covering frontend engineering, scalable backends, database modeling, authentication security, CI/CD, and algorithmic problem solving.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "All"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700"
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
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

        {/* Categories Grid - 8 Categories in responsive 4/2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Layers;
            return (
              <div
                key={category.title}
                className="group flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">
                        {category.skills.length} skills
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3.5 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.featured
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/70 shadow-sm"
                            : "bg-neutral-100 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60"
                        } hover:-translate-y-0.5 hover:shadow-sm`}
                      >
                        <span>{skill.name}</span>
                        <span
                          className={`text-[9px] px-1 py-0.2 rounded font-mono ${
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
