"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export function CVDocument() {
  const { personal, education } = portfolioData;

  // Best curated skills for Full-Stack Developer (compact 5 rows)
  const fullStackSkills = [
    {
      category: "Frontend",
      skills: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Redux Toolkit, HTML5, CSS3, Responsive Design",
    },
    {
      category: "Backend & Auth",
      skills: "Node.js, Express.js, RESTful APIs, Next.js API Routes, Server-Side Rendering (SSR), JWT, Better Auth, RBAC",
    },
    {
      category: "Database & ORM",
      skills: "MongoDB, PostgreSQL, MySQL, Prisma, Mongoose",
    },
    {
      category: "DevOps & Tools",
      skills: "Git, GitHub, Docker, Linux, Postman, Vercel, npm, Cloudinary",
    },
    {
      category: "Payment & CS",
      skills: "Stripe, SSLCommerz, API Integration, Data Structures & Algorithms, OOP, Problem Solving (150+ Codeforces)",
    },
  ];

  // Top 4 Projects tailored specifically for 1-page resume
  const top4Projects = [
    {
      title: "StudioSpace",
      role: "Full-Stack Creative Venue Marketplace",
      liveUrl: "https://studio-space-eosin.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/StudioSpace",
      tech: "Next.js, TypeScript, React, Tailwind CSS, Vercel",
      bullets: [
        "Architected peer-to-peer marketplace for creative studios (photo, sound stages, podcast lounges, music suites).",
        "Engineered category exploration, interactive filters (rate, amenities, location), and modern booking workflows.",
      ],
    },
    {
      title: "Medicare Solution",
      role: "Full-Stack Online Medicine & Health Service",
      liveUrl: "https://medicare-solution.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/Medicare_solutionD",
      tech: "MERN Stack (MongoDB, Express.js, React.js, Node.js), Tailwind CSS, REST APIs",
      bullets: [
        "Built full-stack pharmaceutical e-commerce platform with dynamic catalog search, cart, and order handling.",
        "Implemented RESTful backend APIs, JWT authentication, and responsive mobile-first UI hosted on Vercel.",
      ],
    },
    {
      title: "FitLog",
      role: "Workout Tracking & Exercise Movement Library",
      liveUrl: "https://fit-log-theta-ebon.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/fit-log",
      tech: "TypeScript, React, Tailwind CSS, Local Analytics",
      bullets: [
        "Engineered fitness companion featuring exercise library (Bench, Squats, Pull-ups) and set/rep logging.",
        "Built progressive overload tracking and responsive high-contrast dark UI optimized for fast in-gym sessions.",
      ],
    },
    {
      title: "Bajar Dor (বাজার দর)",
      role: "Real-Time Bangladesh Commodity Price Tracker",
      liveUrl: "https://bajar-dor-ruddy.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/bajar-dor",
      tech: "TypeScript, React, Tailwind CSS, Market Analytics",
      bullets: [
        "Developed daily market price monitor tracking essential food commodities (rice, lentils, oils, spices) across BD.",
        "Integrated real-time price fluctuation indicators and fast bilingual search to empower everyday consumers.",
      ],
    },
  ];

  return (
    <div className="cv-outer-box w-full max-w-[800px] mx-auto bg-white text-neutral-900 px-6 py-5 sm:px-8 sm:py-6 shadow-md border border-neutral-200 rounded-lg print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none print:rounded-none font-sans text-[11px] leading-[1.35] tracking-tight">
      {/* Header */}
      <header className="border-b border-neutral-800 pb-2 mb-2 text-center">
        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 uppercase leading-none">
          {personal.name}
        </h1>
        <p className="text-[11.5px] font-bold text-blue-800 tracking-wide mt-0.5">
          Full-Stack Developer • MERN &amp; Cross-Platform
        </p>

        {/* Contact Info Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 mt-1 text-[10.5px] text-neutral-700 font-medium">
          <span>{personal.location}</span>
          <span>|</span>
          <a href={`tel:${personal.phone}`} className="hover:underline font-mono">
            {personal.phone}
          </a>
          <span>|</span>
          <a href={`mailto:${personal.email}`} className="hover:underline text-blue-700">
            {personal.email}
          </a>
          <span>|</span>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-700 font-mono"
          >
            github.com/mdzarif55
          </a>
          <span>|</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-700 font-mono"
          >
            linkedin.com/in/mdzarif55
          </a>
        </div>
      </header>

      {/* Career Summary */}
      <section className="mb-2">
        <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1">
          Career Objective
        </h2>
        <p className="text-neutral-800 text-justify text-[10.5px] leading-relaxed">
          Passionate Full-Stack Developer skilled in building clean, responsive web and cross-platform applications. Proficient in Next.js, React.js, Node.js, Express, MongoDB, PostgreSQL, and modern API architectures. Proven problem-solving capabilities developed through competitive programming (150+ Codeforces problems). Seeking a Full-Stack / React Developer role to engineer scalable user experiences and drive robust technical solutions.
        </p>
      </section>

      {/* Technical Skills (Curated Best for Full Stack) */}
      <section className="mb-2">
        <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1">
          Technical Skills (Full-Stack)
        </h2>
        <div className="space-y-0.5 text-[10.5px]">
          {fullStackSkills.map((item) => (
            <div key={item.category} className="flex items-baseline">
              <span className="font-bold text-neutral-950 w-28 shrink-0">
                • {item.category}:
              </span>
              <span className="text-neutral-800">{item.skills}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top 4 Projects */}
      <section className="mb-2">
        <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1">
          Key Projects (Top 4 Full-Stack Works)
        </h2>
        <div className="space-y-1.5">
          {top4Projects.map((p) => (
            <div key={p.title} className="text-[10.5px]">
              <div className="flex items-baseline justify-between">
                <div>
                  <strong className="text-neutral-950 text-[11px]">{p.title}</strong>
                  <span className="text-neutral-700 ml-1">— {p.role}</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-blue-700 print:text-neutral-800">
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
                    Live Demo
                  </a>
                  <span>|</span>
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
                    Code
                  </a>
                </div>
              </div>

              <div className="text-[10px] text-neutral-600 font-mono">
                Tech Stack: {p.tech}
              </div>

              <ul className="list-disc list-outside pl-3.5 space-y-0.5 text-neutral-800 mt-0.5">
                {p.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Programming */}
      <section className="mb-2">
        <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1">
          Competitive Programming &amp; Problem Solving
        </h2>
        <div className="text-[10.5px] text-neutral-800 space-y-0.5">
          <p>
            <strong className="text-neutral-950">• Codeforces:</strong> Solved <strong>150+ algorithmic problems</strong> focusing on Dynamic Programming, Data Structures, Graphs, and Logic Building.
          </p>
          <p>
            <strong className="text-neutral-950">• Core Fundamentals:</strong> Proficient in C/C++ programming for memory management, pointers, and computational complexity optimization.
          </p>
        </div>
      </section>

      {/* Education (All 3 Included) */}
      <section className="mb-2">
        <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1">
          Education
        </h2>
        <div className="space-y-0.5 text-[10.5px]">
          {education.map((edu, idx) => (
            <div key={idx} className="flex items-baseline justify-between">
              <div>
                <strong className="text-neutral-950">• {edu.degree}</strong>
                <span className="text-neutral-700 ml-1">— {edu.institution}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-700 shrink-0">
                <span className="font-bold text-neutral-900">{edu.cgpa}</span>
                <span>|</span>
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-0.5">
          Certifications
        </h2>
        <div className="text-[10.5px] text-neutral-800 flex flex-wrap gap-x-3 gap-y-0.5">
          <span>• <strong>MERN Stack Development</strong> (Programming Hero)</span>
          <span>• <strong>Data Analyst</strong> (Farhan Academy)</span>
          <span>• <strong>Graphic Design</strong> (Global IT)</span>
          <span>• <strong>Digital Marketing</strong> (National Skills Dev)</span>
        </div>
      </section>
    </div>
  );
}
