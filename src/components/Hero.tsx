"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Terminal,
  MapPin,
  CheckCircle2,
  Code2,
  Cpu,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { personal, stats } = portfolioData;
  const [activeTab, setActiveTab] = useState<"profile" | "terminal">("profile");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-Time & Contract Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 text-transparent bg-clip-text">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
                {personal.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate engineer specialized in{" "}
              <strong className="text-neutral-900 dark:text-white font-semibold">
                React.js, Next.js, React Native, Node.js
              </strong>{" "}
              and database architectures. Proven problem-solving capabilities with{" "}
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                150+ Codeforces algorithmic problems solved
              </strong>
              . Crafting high-performance digital products from Dhaka, Bangladesh.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>View Resume PDF</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-sm text-neutral-600 dark:text-neutral-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-all bg-white/50 dark:bg-neutral-900/50"
              >
                <Github className="w-4 h-4" />
                <span>mdzarif55</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all bg-white/50 dark:bg-neutral-900/50"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-all bg-white/50 dark:bg-neutral-900/50"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span className="hidden sm:inline">{personal.email}</span>
                <span className="sm:hidden">Email</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-neutral-500 dark:text-neutral-400">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Card / Terminal */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-20 blur-xl"></div>

              <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 ml-2">
                      zarif.config.ts
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                        activeTab === "profile"
                          ? "bg-blue-600 text-white font-medium"
                          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => setActiveTab("terminal")}
                      className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                        activeTab === "terminal"
                          ? "bg-blue-600 text-white font-medium"
                          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      Console
                    </button>
                  </div>
                </div>

                {/* Tab 1: Profile View */}
                {activeTab === "profile" && (
                  <div className="p-6 space-y-5">
                    {/* Dev avatar + Title */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-blue-500/30 shadow-md">
                        <Image
                          src={personal.avatarUrl}
                          alt="Md. Muhtasim Zarif"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                            Md. Muhtasim Zarif
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            Available
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          BSc in CSE • Daffodil Institute of IT
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                          @mdzarif55
                        </p>
                      </div>
                    </div>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60">
                        <span className="text-neutral-500 dark:text-neutral-400 block mb-1">
                          Primary Stack
                        </span>
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          MERN & Next.js
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60">
                        <span className="text-neutral-500 dark:text-neutral-400 block mb-1">
                          Mobile
                        </span>
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          React Native
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60">
                        <span className="text-neutral-500 dark:text-neutral-400 block mb-1">
                          Algorithms
                        </span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          150+ Solved (Codeforces)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60">
                        <span className="text-neutral-500 dark:text-neutral-400 block mb-1">
                          Location
                        </span>
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          Dhaka, Bangladesh
                        </span>
                      </div>
                    </div>

                    {/* Key Live Projects Peek */}
                    <div className="space-y-2 pt-1 border-t border-neutral-200 dark:border-neutral-800">
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <span>Pinned Live Deployments</span>
                        <span className="font-mono text-[10px] text-blue-500">5 Live on Vercel</span>
                      </div>
                      <div className="space-y-1.5">
                        <a
                          href="https://studio-space-eosin.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-xs"
                        >
                          <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            StudioSpace — Creative Venue Platform
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                        </a>
                        <a
                          href="https://medicare-solution.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-xs"
                        >
                          <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Medicare Solution — Full-Stack Health
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                        </a>
                        <a
                          href="https://bajar-dor-ruddy.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-xs"
                        >
                          <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Bajar Dor — BD Daily Market Price
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Terminal Console */}
                {activeTab === "terminal" && (
                  <div className="p-5 font-mono text-xs space-y-3 bg-neutral-950 text-neutral-200 select-text overflow-x-auto">
                    <p className="text-neutral-500">// Welcome to Muhtasim Zarif's environment</p>
                    <p>
                      <span className="text-emerald-400">zarif@workstation:~$</span> agy
                      developer --inspect
                    </p>
                    <div className="text-neutral-400 pl-2 space-y-1 border-l-2 border-blue-500/50">
                      <p>
                        name: <span className="text-amber-300">&quot;Md. Muhtasim Zarif&quot;</span>
                      </p>
                      <p>
                        title:{" "}
                        <span className="text-amber-300">
                          &quot;MERN &amp; Cross-Platform Developer&quot;
                        </span>
                      </p>
                      <p>
                        education:{" "}
                        <span className="text-amber-300">
                          &quot;BSc in CSE, Daffodil Institute of IT (3.18)&quot;
                        </span>
                      </p>
                      <p>
                        codeforces_solved: <span className="text-blue-400">150+</span>
                      </p>
                      <p>
                        skills: [
                        <span className="text-cyan-300">
                          &quot;React&quot;, &quot;Next.js&quot;, &quot;React Native&quot;, &quot;Node.js&quot;,
                          &quot;Tailwind&quot;, &quot;MongoDB&quot;
                        </span>
                        ]
                      </p>
                      <p>
                        hireable: <span className="text-emerald-400">true</span>
                      </p>
                      <p>
                        status:{" "}
                        <span className="text-emerald-300">&quot;Ready for impact&quot;</span>
                      </p>
                    </div>
                    <p className="pt-2 text-neutral-400">
                      <span className="text-emerald-400">zarif@workstation:~$</span> echo
                      &quot;Let&apos;s build scalable applications together!&quot;
                    </p>
                    <p className="text-cyan-400 font-semibold">
                      &gt; Let&apos;s build scalable applications together!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-sm hover:border-blue-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
