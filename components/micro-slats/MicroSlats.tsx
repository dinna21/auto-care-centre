"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import "./MicroSlats.css";

type Preset = "swell" | "tide" | "storm" | "signal";

export type MicroSlatsProps = {
  preset?: Preset;
  color?: string;
  glintColor?: string;
  backgroundColor?: string;
  slatWidth?: number;
  slatHeight?: number;
  gap?: number;
  roundness?: number;
  speed?: number;
  glint?: number;
  contrast?: number;
  perspective?: number;
  interactive?: boolean;
  intro?: boolean;
  paused?: boolean;
  className?: string;
  style?: CSSProperties;
};

const presetDefaults: Record<Preset, { speed: number; glint: number; perspective: number }> = {
  swell: { speed: 0.18, glint: 0.7, perspective: 0.55 },
  tide: { speed: 0.12, glint: 0.45, perspective: 0.5 },
  storm: { speed: 0.35, glint: 1.1, perspective: 0.7 },
  signal: { speed: 0.2, glint: 0.25, perspective: 0 },
};

export default function MicroSlats({
  preset = "swell",
  color = "#0a1628",
  glintColor = "#f5c518",
  backgroundColor = "transparent",
  slatWidth = 9,
  slatHeight = 24,
  gap = 4,
  roundness = 0.75,
  speed,
  glint,
  contrast = 1,
  perspective,
  interactive = false,
  intro = false,
  paused = false,
  className = "",
  style,
}: MicroSlatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);

    const container = containerRef.current;
    if (!container) return () => media.removeEventListener("change", updateMotion);

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0,
      rootMargin: "120px",
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", updateMotion);
    };
  }, []);

  const defaults = presetDefaults[preset];
  const animationSpeed = speed ?? defaults.speed;
  const glowStrength = glint ?? defaults.glint;
  const isPaused = paused || reducedMotion || !visible;
  const slatRadius = `${Math.min(50, Math.max(0, roundness * 50))}%`;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`micro-slats ${isPaused ? "micro-slats--paused" : ""} ${intro ? "micro-slats--intro" : ""} ${interactive ? "micro-slats--interactive" : ""} ${className}`.trim()}
      style={
        {
          ...style,
          "--slat-color": color,
          "--glint-color": glintColor,
          "--slat-background": backgroundColor,
          "--slat-width": `${slatWidth}px`,
          "--slat-height": `${slatHeight}px`,
          "--slat-gap": `${gap}px`,
          "--slat-radius": slatRadius,
          "--slat-duration": `${Math.max(8, 24 / Math.max(animationSpeed, 0.01))}s`,
          "--slat-glint": glowStrength,
          "--slat-contrast": contrast,
          "--slat-perspective": perspective ?? defaults.perspective,
        } as CSSProperties
      }
    >
      <div className="micro-slats__field" />
    </div>
  );
}
