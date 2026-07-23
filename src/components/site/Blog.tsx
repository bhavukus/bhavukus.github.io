import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const posts = [
  { t: "Why most startups don't need more features", d: "Focus is the ultimate feature. A short essay on shipping less, better.", m: "5 min read", tag: "Essay" },
  { t: "Building AI products that people actually use", d: "Lessons on shipping AI features users adopt — not just demo.", m: "8 min read", tag: "AI" },
  { t: "Lessons learned while building Groomsta", d: "Notes from building an AI-powered grooming marketplace from scratch.", m: "7 min read", tag: "Founder" },
];

export function Blog() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-32">
      <SectionHeader eyebrow="Writing" title="Notes from the arena." />
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.05}>
            <a href="#" className="glass group flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full border border-white/10 px-2 py-0.5">{p.tag}</span>
                <span>{p.m}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">{p.t}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.d}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">Read <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}