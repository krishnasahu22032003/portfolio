"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        group relative inline-flex h-8 w-8 cursor-pointer items-center justify-center
        rounded-full border border-neutral-300 bg-transparent
        text-neutral-700
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:scale-110 hover:border-neutral-900 hover:text-neutral-900
        active:scale-95 active:duration-300
        focus-visible:outline-none focus-visible:ring-1
        focus-visible:ring-neutral-400 focus-visible:ring-offset-2
        focus-visible:ring-offset-white
        dark:border-neutral-700 dark:text-neutral-300
        dark:hover:border-neutral-50 dark:hover:text-neutral-50
        dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-neutral-950
      "
    >
      <Sun
        strokeWidth={1.5}
        className={`
          absolute h-[16px] w-[16px]
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          motion-reduce:transition-none
          ${isDark ? "-rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
        `}
      />
      <Moon
        strokeWidth={1.5}
        className={`
          absolute h-[16px] w-[16px]
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          motion-reduce:transition-none
          ${isDark ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-0 opacity-0"}
        `}
      />
    </button>
  );
}