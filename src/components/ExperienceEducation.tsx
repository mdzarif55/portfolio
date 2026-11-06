"use client";

import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  BookOpen,
  Code2,
  LineChart,
  Palette,
  Target,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function ExperienceEducation() {
  const { education, certifications } = portfolioData;

  const certIcons: Record<string, any> = {
    Code2: Code2,
    LineChart: LineChart,
    Palette: Palette,
    Target: Target,
  };

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
            Education &amp; Professional Training
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Solid foundations in computer science and continuous professional upskilling across software engineering and design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <span>Formal Education ({education.length})</span>
            </h3>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-3.5 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-base sm:text-lg">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                    {item.cgpa}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 block">
                    Key Highlights
                  </span>
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" />
              <span>Specialized Certifications ({certifications.length})</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => {
                const IconComponent = certIcons[cert.icon] || Award;
                return (
                  <div
                    key={cert.title}
                    className="p-5 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                          {cert.category}
                        </span>
                      </div>

                      <h4 className="font-bold text-neutral-900 dark:text-white text-base mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Curriculum Completed</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
