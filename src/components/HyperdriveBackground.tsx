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

    type Ray = { angle: number; radius: number; speed: number; length: number; width: number };
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

      const baseCount = Math.max(24, Math.min(80, Math.floor((width * height) / 40000)));
      const count = reducedMotion ? 0 : baseCount;

      rays = new Array(count).fill(0).map(() => ({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 20 + 10,
        speed: Math.random() * 0.6 + 0.25,
        length: Math.random() * 60 + 40,
        width: Math.random() * 1.4 + 0.6,
      }));
    };

    const draw = () => {
      // subtle fade trail
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const stroke = getHsl("--accent", 0.16);
      const glow = getHsl("--accent", 0.04);

      for (const r of rays) {
        const x1 = cx + Math.cos(r.angle) * r.radius;
        const y1 = cy + Math.sin(r.angle) * r.radius;
        const x2 = cx + Math.cos(r.angle) * (r.radius + r.length);
        const y2 = cy + Math.sin(r.angle) * (r.radius + r.length);

        // outer glow
        ctx.strokeStyle = glow;
        ctx.lineWidth = r.width * 2;
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
        const maxRadius = Math.hypot(cx, cy) + 100;
        if (r.radius > maxRadius) {
          r.radius = Math.random() * 20 + 10;
          r.angle = Math.random() * Math.PI * 2;
          r.speed = Math.random() * 0.6 + 0.25;
          r.length = Math.random() * 60 + 40;
          r.width = Math.random() * 1.4 + 0.6;
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
