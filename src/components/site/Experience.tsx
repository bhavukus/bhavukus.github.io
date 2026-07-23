import { Reveal, SectionHeader } from "./Reveal";

const items = [
  { role: "Founder", org: "Groomsta", when: "2026 — Present", pts: ["Leading product development end-to-end", "Owning brand, marketing, and business strategy", "Pilot launch shipped"] },
  { role: "Independent Developer", org: "Self", when: "2024 — Present", pts: ["Building AI products and automation workflows", "Shipping web applications and startup MVPs", "Validating multiple startup concepts"] },
  { role: "Content Creator", org: "Byteify", when: "2023 — 2024", pts: ["Created educational programming content", "Built beginner-friendly coding projects", "Reached thousands of learners"] },
];

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-4 py-32">
      <SectionHeader eyebrow="The Journey" title="A decade in the arena." />
      <div className="mt-16 space-y-4">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <details className="glass group rounded-2xl p-6 transition-all open:glow">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-foreground">{it.role} · <span className="text-primary">{it.org}</span></div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">{it.when}</div>
                </div>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {it.pts.map((p) => (<li key={p} className="flex gap-2"><span className="text-primary">→</span> {p}</li>))}
              </ul>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}