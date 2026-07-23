import { Reveal, SectionHeader } from "./Reveal";

const pillars = [
  { k: "Mission", v: "Build AI-powered products that solve meaningful problems and improve everyday life through intelligent automation." },
  { k: "Vision", v: "To create globally impactful technology companies that redefine how people interact with AI and digital services." },
  { k: "Philosophy", v: "Build products that solve real problems — not products that simply showcase technology." },
];

const timeline = [
  { y: "Early", t: "First lines of code", d: "Curiosity about software evolved into a passion for building — not just coding." },
  { y: "2023", t: "Byteify", d: "Created educational programming content and beginner-friendly coding projects." },
  { y: "2024", t: "Independent Developer", d: "Started building AI products, automation workflows, and startup MVPs." },
  { y: "2026", t: "Founded Groomsta", d: "Leading product, brand, and business for an AI-powered grooming marketplace." },
  { y: "Next", t: "AI Healthcare OS", d: "Designing autonomous AI systems for healthcare administration and beyond." },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-32">
      <SectionHeader
        eyebrow="The Story"
        title="Founder. Engineer. Builder."
        sub="A Computer Science student turned founder, obsessed with building AI-first products that create measurable impact."
      />
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.k} delay={i * 0.08}>
            <div className="glass group h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow">
              <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">{p.k}</div>
              <p className="mt-3 text-lg font-medium leading-snug text-foreground">{p.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-24 relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {timeline.map((e, i) => (
            <Reveal key={e.y} delay={i * 0.05}>
              <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                <div className={i % 2 ? "md:col-start-2 md:pl-8" : "md:pr-8 md:text-right"}>
                  <div className="glass rounded-2xl p-6 inline-block text-left">
                    <div className="text-sm font-mono text-primary">{e.y}</div>
                    <div className="mt-1 text-xl font-semibold text-foreground">{e.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary)] md:left-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}