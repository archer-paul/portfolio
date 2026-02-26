import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HyperdriveBackgroundProps {
  className?: string;
}

// Lightweight canvas-based radial streaks animation
// Respects prefers-reduced-motion and aims for very low CPU usage
const HyperdriveBackground: React.FC<HyperdriveBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = mql.matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getHsl = (cssVar: string, alpha = 1) => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      // v is like: "38 85% 52%" => hsla string
      return `hsla(${v} / ${alpha})`;
    };

    // Check if we're in dark mode
    const isDarkMode = document.documentElement.classList.contains('dark');

    type Ray = { angle: number; radius: number; speed: number; length: number; width: number; isAccent: boolean };
    let rays: Ray[] = [];

    const setup = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = Math.floor((rect?.width || window.innerWidth));
      height = Math.floor((rect?.height || 400));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const baseCount = Math.max(80, Math.min(180, Math.floor((width * height) / 18000)));
      const count = reducedMotion ? 0 : baseCount;

      const maxRadius = Math.hypot(width / 2, height / 2) + 100;
      const minStartRadius = 30; // Central void size

      rays = new Array(count).fill(0).map(() => ({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * (maxRadius - minStartRadius) + minStartRadius,
        speed: Math.random() * 2.5 + 1.2,
        length: Math.random() * 120 + 60,
        width: Math.random() * 1.4 + 0.5,
        isAccent: Math.random() > 0.7, // 30% are gold/accent
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      for (const r of rays) {
        const x1 = cx + Math.cos(r.angle) * r.radius;
        const y1 = cy + Math.sin(r.angle) * r.radius;
        const x2 = cx + Math.cos(r.angle) * (r.radius + r.length);
        const y2 = cy + Math.sin(r.angle) * (r.radius + r.length);

        let stroke, glow;
        if (r.isAccent) {
          // Gold/Accent rays - lower opacity for comfort
          stroke = getHsl("--accent", 0.4);
          glow = getHsl("--accent", 0.15);
        } else if (isDarkMode) {
          // Subtle white rays in dark mode
          stroke = "rgba(255, 255, 255, 0.35)";
          glow = "rgba(255, 255, 255, 0.1)";
        } else {
          // Subtle accent/primary rays in light mode
          stroke = getHsl("--primary", 0.2);
          glow = getHsl("--primary", 0.08);
        }

        // outer glow
        ctx.strokeStyle = glow;
        ctx.lineWidth = r.width * 3;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // core line
        ctx.strokeStyle = stroke;
        ctx.lineWidth = r.width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        r.radius += r.speed;
        const maxRadius = Math.hypot(cx, cy) + 200;
        if (r.radius > maxRadius) {
          r.radius = 30; // Restart from outside the central void
          r.angle = Math.random() * Math.PI * 2;
          r.speed = Math.random() * 2.5 + 1.2;
          r.length = Math.random() * 120 + 60;
          r.isAccent = Math.random() > 0.7;
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setup();
    };

    setup();
    if (!reducedMotion) {
      frameRef.current = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
};

export default HyperdriveBackground;
