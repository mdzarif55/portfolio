"use client";

import {
  Code,
  Terminal,
  Cpu,
  Zap,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function CompetitiveCoding() {
  const { competitiveProgramming, personal } = portfolioData;

  const topics = [
    {
      title: "Dynamic Programming (DP)",
      description: "Subproblem memoization, optimal substructure, knapsack variants, and recursive state transitions.",
    },
    {
      title: "Data Structures & Trees",
      description: "Trees, Binary Heaps, Segment Trees, Hash Maps, Queues, Stacks, and balanced trees.",
    },
    {
      title: "Graph Theory & Traversal",
      description: "Breadth-First Search (BFS), Depth-First Search (DFS), shortest path algorithms, and DAGs.",
    },
    {
      title: "C Memory & Pointer Rigor",
      description: "Manual memory allocation, pointer arithmetic, struct layouts, and low-level computational efficiency.",
    },
    {
      title: "Complexity Optimization",
      description: "Rigorous Big-O analysis striving for optimal time and space complexity in production web code.",
    },
    {
      title: "Edge Case & Logic Building",
      description: "Defensive coding practices, boundary validations, and bulletproof logic under competitive constraints.",
    },
  ];

  return (
    <section id="algorithms" className="py-20 md:py-28 relative bg-neutral-100/50 dark:bg-neutral-900/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900/50">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Problem Solving Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
            Competitive Programming &amp; Algorithmic Mastery
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
            Honing problem-solving agility through 150+ solved challenges on Codeforces and core C systems fundamentals.
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Codeforces Stat Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white border border-neutral-800 shadow-2xl space-y-6 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                      Platform Profile
                    </span>
                    <h3 className="text-xl font-bold">Codeforces &amp; C</h3>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                  Active Solver
                </div>
              </div>

              {/* Big Stat */}
              <div className="py-4 border-y border-neutral-800">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400">
                  150+
                </div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">
                  Algorithmic Problems Solved
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Focusing on Dynamic Programming, graph traversals, and logic construction.
                </p>
              </div>

              {/* Philosophy Quote */}
              <div className="space-y-2">
                <p className="text-xs text-neutral-300 italic leading-relaxed">
                  &ldquo;Competitive programming instills an obsession with runtime efficiency, edge-case vigilance, and structured code modularity that directly elevates production web systems.&rdquo;
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  <span>Explore problem solving solutions on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Key Topics & Applications */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((t, i) => (
              <div
                key={t.title}
                className="p-5 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-purple-500/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
                    {t.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
