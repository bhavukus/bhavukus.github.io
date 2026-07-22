import { Reveal, SectionHeader } from "./Reveal";

const quotes = [
  { q: "Alex ships product with the taste of a designer and the rigor of a staff engineer. Rare combination.", n: "Sarah Kim", r: "CEO, Loop" },
  { q: "One of the sharpest AI builders I know. Turned our roadmap into shipped software in weeks.", n: "Marcus Wei", r: "Partner, Sequoia" },
  { q: "Working with Alex felt like getting a co-founder for 90 days.", n: "Priya Rao", r: "Founder, Helios" },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-32">
      <SectionHeader eyebrow="Words" title="What people say." />
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <figure className="glass group h-full rounded-2xl p-6 transition-all [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)]">
              <div className="text-4xl leading-none text-primary">"</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground">{q.q}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-background">{q.n.split(" ").map((w) => w[0]).join("")}</div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{q.n}</div>
                  <div className="text-xs text-muted-foreground">{q.r}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}