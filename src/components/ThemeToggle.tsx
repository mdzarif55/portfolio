"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme mode"
      className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300"
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 group-hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="w-4 h-4 text-blue-600 transition-transform duration-300 -rotate-12 group-hover:rotate-0 group-hover:scale-110" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
