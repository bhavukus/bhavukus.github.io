import { Reveal, SectionHeader } from "./Reveal";

const groups = [
  { g: "AI", items: ["LLMs", "RAG", "Agents", "Fine-tuning", "Evals", "Vector DBs"] },
  { g: "Engineering", items: ["TypeScript", "Python", "Rust", "Next.js", "Postgres", "Kubernetes"] },
  { g: "Business", items: ["GTM", "Pricing", "Fundraising", "Sales", "Ops"] },
  { g: "Design", items: ["Product", "Brand", "Motion", "Systems"] },
  { g: "Leadership", items: ["Hiring", "0→1", "Team building", "Storytelling"] },
  { g: "Marketing", items: ["SEO", "Content", "Community", "Distribution"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-32">
      <SectionHeader eyebrow="The Stack" title="A polyglot toolkit." sub="Fluent across the stack — from model weights to marketing pages." />
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.g} delay={i * 0.05}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-60" style={{ background: "var(--gradient-text)" }} />
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-foreground">{g.g}</h3>
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">{it}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}