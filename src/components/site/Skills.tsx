import { Reveal, SectionHeader } from "./Reveal";

const groups = [
  { g: "AI", items: ["Prompt Engineering", "AI Automation", "AI Agents", "LLM Applications", "Workflow Automation"] },
  { g: "Development", items: ["Java", "Python", "JavaScript", "HTML", "CSS", "React", "Next.js", "Git", "REST APIs"] },
  { g: "Business", items: ["Startup Strategy", "Product Thinking", "Market Research", "Customer Discovery", "MVP Development"] },
  { g: "Marketing", items: ["Brand Positioning", "Content Strategy", "Social Media", "Growth Marketing", "Founder Branding"] },
  { g: "Leadership", items: ["Product Vision", "Team Collaboration", "Project Management", "Problem Solving"] },
  { g: "Design", items: ["UI/UX Fundamentals", "Canva", "AI-assisted Design"] },
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