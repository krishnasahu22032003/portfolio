"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-7 w-[3.25rem] rounded-full" aria-hidden="true" />;
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
        group relative inline-flex h-7 w-[3.25rem] shrink-0 cursor-pointer items-center
        rounded-full border border-border bg-secondary
        skill-inner-shadow
        transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:border-accent/40
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 focus-visible:ring-offset-background
        active:duration-200
      "
    >
      <span
        className="
          pointer-events-none absolute inset-0 rounded-full opacity-0
          transition-opacity duration-500 ease-out
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)",
          opacity: isDark ? undefined : undefined,
        }}
      />

      <span
        className={`
          relative flex h-5.5 w-5.5 items-center justify-center rounded-full
          border border-border bg-card
          shadow-sm
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-active:scale-90
          ${isDark ? "translate-x-[calc(3.25rem-1.625rem-4px)]" : "translate-x-[3px]"}
        `}
      >
        <Sun
          strokeWidth={1.5}
          className={`
            absolute h-3.5 w-3.5 text-accent
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            motion-reduce:transition-none
            ${isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
          `}
        />
        <Moon
          strokeWidth={1.5}
          className={`
            absolute h-3.5 w-3.5 text-accent
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            motion-reduce:transition-none
            ${isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}
          `}
        />
      </span>
    </button>
  );
}