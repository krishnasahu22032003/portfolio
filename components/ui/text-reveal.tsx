"use client";

import * as React from "react";

const styles = `
@keyframes wordReveal {
  0% {
    opacity: 0;
    filter: blur(6px);
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
}
.word-reveal {
  display: inline-block;
  opacity: 0;
  animation: wordReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
`;

export function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <span className={className}>
        {words.map((word, i) => (
          <React.Fragment key={i}>
            <span
              className="word-reveal"
              style={{ animationDelay: `${delay + i * 100}ms` }}
            >
              {word}
            </span>
            {i < words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </span>
    </>
  );
}