"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { CVDocument } from "@/components/CVDocument";
import { downloadCVAsPDF } from "@/lib/pdf-download";
import confetti from "canvas-confetti";

export default function CVPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
      });

      await downloadCVAsPDF("cv-document", "Resume_Md_Muhtasim_Zarif.pdf");

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error("PDF generation error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 py-6 sm:py-8 px-4 print:!p-0 print:!bg-white print:!m-0">
      {/* Top Floating Control Bar - Hidden on print */}
      <div className="max-w-4xl mx-auto mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Main Auto Download PDF Button */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md shadow-blue-500/25 border-0 outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 cursor-pointer"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Preparing PDF...</span>
              </>
            ) : downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Download PDF</span>
              </>
            )}
          </button>

          <a
            href="/Resume_Md_Muhtasim_Zarif.pdf"
            download="Resume_Md_Muhtasim_Zarif.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-sm transition-all"
            title="Download original uploaded resume file"
          >
            <Download className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden sm:inline">Original PDF</span>
          </a>
        </div>
      </div>

      {/* Auto-built Dynamic CV Document (A4 1-Page Calibrated) */}
      <main className="print:!m-0 print:!p-0">
        <CVDocument />
      </main>

      {/* Hint Pill */}
      <div className="max-w-4xl mx-auto mt-5 text-center text-xs text-neutral-500 dark:text-neutral-400 print:hidden">
        Click <strong>&quot;Download PDF&quot;</strong> to instantly download the full-stack 1-page resume to your device.
      </div>
    </div>
  );
}
