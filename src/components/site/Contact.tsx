import { useState } from "react";
import { motion } from "motion/react";
import { Send, Calendar, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-32">
      <SectionHeader eyebrow="Get In Touch" title="Let's build something." sub="Consulting, collaboration, or coffee — the inbox is open." />
      <div className="mt-16 grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass rounded-3xl p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Name</span>
                <input required className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.05]" placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Email</span>
                <input required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.05]" placeholder="jane@company.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Message</span>
              <textarea required rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.05]" placeholder="Tell me about your project..." />
            </label>
            <motion.button whileTap={{ scale: 0.97 }} type="submit" className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]">
              <span className="relative z-10">{sent ? "Sent — talk soon" : "Send message"}</span>
              <Send className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 opacity-0 blur-xl transition-opacity group-hover:opacity-70" style={{ background: "var(--gradient-text)" }} />
            </motion.button>
          </form>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="glass flex h-full flex-col rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-2 text-primary">
              <Calendar className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-[0.15em]">Book a call</span>
            </div>
            <p className="mt-3 text-lg font-medium leading-snug text-foreground">30 minutes. No decks. Just a real conversation about your project.</p>
            <a href="#" className="glass mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]">Open calendar →</a>
            <div className="mt-auto">
              <div className="mb-3 mt-8 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Elsewhere</div>
              <div className="flex gap-2">
                {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:scale-110 hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}