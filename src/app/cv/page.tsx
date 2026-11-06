"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Download, Sparkles, FileText } from "lucide-react";
import { CVDocument } from "@/components/CVDocument";
import confetti from "canvas-confetti";

export default function CVPage() {
  const handlePrint = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
    });
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 py-6 sm:py-10 px-4 print:p-0 print:bg-white print:m-0">
      {/* Top Floating Control Bar - Hidden on print */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>

          <a
            href="/Resume_Md_Muhtasim_Zarif.pdf"
            download="Resume_Md_Muhtasim_Zarif.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Original PDF</span>
          </a>
        </div>
      </div>

      {/* Auto-built Dynamic CV Document */}
      <main className="print:m-0">
        <CVDocument />
      </main>

      {/* Print Instruction Pill - Hidden on print */}
      <div className="max-w-4xl mx-auto mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400 print:hidden">
        Tip: Click <strong>&quot;Print / Save as PDF&quot;</strong> (or press <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono">Ctrl+P</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono">⌘P</kbd>) and select <em>&quot;Save as PDF&quot;</em> in your browser for a high-resolution, ATS-friendly PDF.
      </div>
    </div>
  );
}
