"use client";

import { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  X,
  Maximize2,
  CheckCircle,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio-data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
  });

  const filterOptions = ["All", "Featured", "Full-Stack", "Frontend", "Web App"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    return project.category === activeFilter;
  });

  const handleOpenPreview = (url: string, title: string) => {
    setPreviewModal({
      isOpen: true,
      url,
      title,
    });
  };

  const handleClosePreview = () => {
    setPreviewModal({
      isOpen: false,
      url: "",
      title: "",
    });
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
            Production &amp; Full-Stack Applications
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Real-world deployed web applications solving real user challenges, from peer-to-peer marketplaces to national price trackers.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700"
                }`}
              >
                {filter === "All" ? "All Projects" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreviewLive={handleOpenPreview}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
              Want to see more repositories or collaborate?
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Browse 26+ active repositories, contributions, and experiments on my GitHub profile.
            </p>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md shrink-0"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Interactive In-App Live Preview Modal */}
      {previewModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-sm text-neutral-900 dark:text-white truncate max-w-xs sm:max-w-md">
                  {previewModal.title} — Live Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={previewModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <span>Open in Full Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={handleClosePreview}
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Live Iframe */}
            <div className="flex-1 w-full h-full bg-neutral-100 dark:bg-neutral-950 relative">
              <iframe
                src={previewModal.url}
                className="w-full h-full border-0"
                title={previewModal.title}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
