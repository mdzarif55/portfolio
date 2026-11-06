"use client";

import { useEffect, useState } from "react";
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { CVDocument } from "./CVDocument";
import { downloadCVAsPDF } from "@/lib/pdf-download";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function ResumeModal({ isOpen, onClose, pdfUrl }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<"auto" | "original">("auto");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadAuto = async () => {
    try {
      setIsDownloading(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
      });

      await downloadCVAsPDF("modal-cv-document", "Resume_Md_Muhtasim_Zarif.pdf");

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error("Download error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl h-[92vh] bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-semibold shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base">
                Curriculum Vitae — Md. Muhtasim Zarif
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Full-Stack Developer • 1-Page Auto-Built CV
              </p>
            </div>
          </div>

          {/* Mode Switch Tabs & Actions */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode("auto")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === "auto"
                    ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 font-semibold shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Auto-Built CV
              </button>
              <button
                type="button"
                onClick={() => setViewMode("original")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === "original"
                    ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 font-semibold shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Original PDF
              </button>
            </div>

            {/* Direct Auto Download Button */}
            {viewMode === "auto" ? (
              <button
                onClick={handleDownloadAuto}
                disabled={isDownloading}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white border-0 outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors cursor-pointer"
                title="Download 1-page PDF directly"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Preparing...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>
            ) : (
              <a
                href={pdfUrl}
                download="Resume_Md_Muhtasim_Zarif.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            )}

            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title="Open full-page view"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 w-full h-full bg-neutral-100 dark:bg-neutral-950 p-2 sm:p-4 overflow-y-auto">
          {viewMode === "auto" ? (
            <div id="modal-cv-document" className="max-w-3xl mx-auto py-2">
              <CVDocument />
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white"
              title="Md. Muhtasim Zarif Resume"
            />
          )}
        </div>
      </div>
    </div>
  );
}
