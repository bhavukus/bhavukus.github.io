import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      {/* Aurora gradient blobs */}
      <div
        className="absolute inset-0 animate-aurora"
        style={{
          background: "var(--gradient-hero)",
          transform: "translate3d(var(--mx,0), var(--my,0), 0)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* Floating blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-float-slow"
           style={{ background: "radial-gradient(circle, oklch(0.72 0.19 250 / 0.7), transparent 70%)" }} />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-35 animate-float-slow"
           style={{ background: "radial-gradient(circle, oklch(0.65 0.24 300 / 0.7), transparent 70%)", animationDelay: "-2s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float-slow"
           style={{ background: "radial-gradient(circle, oklch(0.55 0.22 220 / 0.7), transparent 70%)", animationDelay: "-4s" }} />
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}