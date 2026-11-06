"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Maximize2,
  Sparkles,
  Layers,
  Eye,
} from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface ProjectCardProps {
  project: Project;
  onPreviewLive?: (url: string, title: string) => void;
}

export function ProjectCard({ project, onPreviewLive }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
      {/* Top Banner Accent */}
      <div className={`h-2.5 w-full bg-gradient-to-r ${project.colorScheme.from} ${project.colorScheme.to}`} />

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Header Row: Category & Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              <Layers className="w-3 h-3 text-blue-500" />
              <span>{project.category}</span>
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Sparkles className="w-3 h-3" />
                <span>Featured</span>
              </span>
            )}
          </div>

          {/* Project Title & Subtitle */}
          <div className="space-y-1 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
            {isExpanded ? project.fullDescription : project.description}
          </p>

          {/* Toggle Read More if fullDescription exists and is longer */}
          {project.fullDescription && project.fullDescription !== project.description && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-4 block"
            >
              {isExpanded ? "Show less" : "Read full overview →"}
            </button>
          )}

          {/* Key Feature Bullets */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-1.5 mb-5 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-800/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                Core Highlights
              </span>
              {project.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors active:scale-95"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {onPreviewLive && (
              <button
                type="button"
                onClick={() => onPreviewLive(project.liveUrl, project.title)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                title="Preview inside modal"
              >
                <Eye className="w-3.5 h-3.5 text-neutral-500" />
                <span className="hidden sm:inline">Preview</span>
              </button>
            )}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
