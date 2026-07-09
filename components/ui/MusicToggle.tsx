"use client";

import * as React from "react";
import { Music2 } from "lucide-react";

const TRACK_SRC = "./audio/ambient.mp3";

export function MusicToggle() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const audio = new Audio(TRACK_SRC);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isPlaying}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      onClick={toggle}
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
      <Music2
        strokeWidth={1.5}
        className={`
          absolute h-4 w-4 text-foreground
          transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          motion-reduce:transition-none
          ${isPlaying ? "scale-0 opacity-0" : "scale-100 opacity-100"}
        `}
      />

      <span
        className={`
          absolute flex h-4 items-end justify-center gap-[3px]
          transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          motion-reduce:transition-none
          ${isPlaying ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        <span
          className="w-[3px] rounded-full bg-foreground"
          style={{
            animation: isPlaying ? "eqBar 0.9s ease-in-out infinite" : "none",
            animationDelay: "0ms",
          }}
        />
        <span
          className="w-[3px] rounded-full bg-foreground"
          style={{
            animation: isPlaying ? "eqBar 0.9s ease-in-out infinite" : "none",
            animationDelay: "180ms",
          }}
        />
        <span
          className="w-[3px] rounded-full bg-foreground"
          style={{
            animation: isPlaying ? "eqBar 0.9s ease-in-out infinite" : "none",
            animationDelay: "90ms",
          }}
        />
      </span>
    </button>
  );
}