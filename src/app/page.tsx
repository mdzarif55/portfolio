"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { CompetitiveCoding } from "@/components/CompetitiveCoding";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { portfolioData } from "@/data/portfolio-data";

export default function HomePage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About onOpenResume={() => setIsResumeModalOpen(true)} />
        <Skills />
        <Projects />
        <CompetitiveCoding />
        <ExperienceEducation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        pdfUrl={portfolioData.personal.resumePdfUrl}
      />
    </div>
  );
}
