import { Reveal, SectionHeader } from "./Reveal";

const items = [
  { org: "Helios AI", role: "Founder & CEO", when: "2024 — Now", pts: ["Raised seed round", "Built founding team of 8", "0 → $1.4M ARR in 11 months"] },
  { org: "Independent", role: "Advisor & Engineer", when: "2022 — 2024", pts: ["Shipped 20+ launches", "Advised 3 YC companies", "Built the Prism design system"] },
  { role: "Staff Engineer", org: "BigCo", when: "2020 — 2022", pts: ["Led ML platform team", "Cut inference cost 6x", "Mentored 12 engineers"] },
  { role: "Co-founder", org: "First startup", when: "2018 — 2020", pts: ["40k+ users in six months", "Acquired by a public company", "First taste of founder mode"] },
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