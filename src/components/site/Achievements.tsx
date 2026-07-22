import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Reveal, SectionHeader } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    return () => c.stop();
  }, [inView, mv, to]);

  useEffect(() => rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v + suffix; }), [rounded, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { n: 40, suffix: "+", l: "Products shipped" },
  { n: 10, suffix: "M+", l: "Users reached" },
  { n: 8, suffix: "", l: "Awards & features" },
  { n: 24, suffix: "", l: "Hackathons won" },
];

export function Achievements() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      <SectionHeader eyebrow="Numbers" title="Milestones that matter." />
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.05}>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl font-semibold tracking-tight text-gradient md:text-5xl"><Counter to={s.n} suffix={s.suffix} /></div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}