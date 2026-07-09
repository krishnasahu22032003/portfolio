"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full" aria-hidden="true" />;
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
        group relative inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center
        rounded-full
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:bg-secondary/60
        active:scale-90 active:duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 focus-visible:ring-offset-background
      "
    >
      <Sun
        strokeWidth={1.5}
        className={`
          absolute h-4 w-4 text-foreground
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          motion-reduce:transition-none
          ${isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
        `}
      />
      <Moon
        strokeWidth={1.5}
        className={`
          absolute h-4 w-4 text-foreground
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          motion-reduce:transition-none
          ${isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}
        `}
      />
    </button>
  );
}