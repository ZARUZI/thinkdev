"use client";
import { useRef } from "react";

export default function Spotlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative"
      style={{ ["--x" as any]: "50%", ["--y" as any]: "50%" }}
    >
      {/* Layer spotlight pakai inline style biar aman */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(400px circle at var(--x) var(--y), rgba(59,130,246,0.25), transparent 70%)`,
          mixBlendMode: "screen",
        }}
      />
      {children}
    </div>
  );
}
