import { Reveal, SectionHeader } from "./Reveal";

const pillars = [
  { k: "Mission", v: "Build AI-native products that give individuals leverage of entire teams." },
  { k: "Vision", v: "A world where every founder ships at the speed of thought." },
  { k: "Philosophy", v: "Taste is a moat. Speed is a feature. Distribution wins." },
];

const timeline = [
  { y: "2018", t: "First startup", d: "Sold a browser extension to 40k users in six months." },
  { y: "2020", t: "Big tech, big lessons", d: "Shipped ML infra at scale. Learned what not to do." },
  { y: "2022", t: "Went independent", d: "Consulted for 20+ AI-native teams from seed to Series B." },
  { y: "2024", t: "Founded a company", d: "Raised, built, and shipped an AI product used by thousands." },
  { y: "2026", t: "What's next", d: "Investing in agents, ambient interfaces, and post-SaaS." },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-32">
      <SectionHeader
        eyebrow="The Story"
        title="Operator. Engineer. Builder."
        sub="I've spent a decade turning ambiguous problems into products people pay for. Here's the throughline."
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