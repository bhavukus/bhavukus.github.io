import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const projects = [
  { name: "Groomsta", tag: "AI-powered Grooming Marketplace · 2026", problem: "Booking salon and grooming services is fragmented and inconvenient.", solution: "A modern platform connecting customers with salons and doorstep grooming professionals.", metric: "Pilot launch complete", stack: ["React", "Node.js", "Firebase", "AI"], hue: "from-blue-500/40 via-indigo-500/20 to-purple-500/40" },
  { name: "Healthcare AI OS", tag: "Autonomous AI Operating System", problem: "Healthcare organizations lose billions through inefficient administration.", solution: "AI agents that automate administrative workflows end-to-end.", metric: "Concept & architecture", stack: ["AI Agents", "LLMs", "Automation"], hue: "from-emerald-500/30 via-cyan-500/20 to-blue-500/40" },
  { name: "Byteify", tag: "Educational Tech Content · 2023", problem: "Learning programming should be engaging, not intimidating.", solution: "Educational coding content and beginner-friendly projects.", metric: "18k+ content views", stack: ["HTML", "CSS", "JavaScript"], hue: "from-fuchsia-500/40 via-pink-500/20 to-rose-500/40" },
  { name: "Iris", tag: "Desktop AI Assistant", problem: "Repetitive desktop tasks eat hours every week.", solution: "Voice-controlled Python assistant that automates workflows.", metric: "Personal project", stack: ["Python"], hue: "from-amber-500/40 via-orange-500/20 to-red-500/40" },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-32">
      <SectionHeader eyebrow="Selected Work" title="Products, not projects." sub="A curated selection of things I've shipped, sold, or open-sourced." />
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <motion.article whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="glass group relative overflow-hidden rounded-3xl p-2">
              <div className={`relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br ${p.hue}`}>
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="glass rounded-2xl px-6 py-3 text-3xl font-semibold tracking-tight text-foreground">{p.name}</div>
                </div>
                <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-white/70">{p.tag}</div>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Problem</div>
                    <p className="mt-1 text-sm text-foreground">{p.problem}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Solution</div>
                    <p className="mt-1 text-sm text-foreground">{p.solution}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted-foreground">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary"><span>{p.metric}</span></div>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-105">Case study <ArrowUpRight className="h-3.5 w-3.5" /></a>
                  <a href="#" className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:scale-105"><Github className="h-3.5 w-3.5" /> Code</a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}