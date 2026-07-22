import { Brain, Zap, Code2, Rocket, Layers, Palette } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const services = [
  { Icon: Brain, t: "AI Solutions", d: "LLM apps, agents, and evals — built for production." },
  { Icon: Zap, t: "Automation", d: "Internal tools and workflows that replace whole teams." },
  { Icon: Code2, t: "Web Development", d: "Fast, delightful, and built to scale from day one." },
  { Icon: Rocket, t: "Startup Consulting", d: "0→1 strategy, hiring, and technical due diligence." },
  { Icon: Layers, t: "Product Development", d: "From napkin sketch to shipped and loved." },
  { Icon: Palette, t: "UI/UX", d: "Interfaces that make users feel like superhumans." },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-32">
      <SectionHeader eyebrow="What I Do" title="Services on offer." />
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.05}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <s.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-4 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">Learn more →</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}