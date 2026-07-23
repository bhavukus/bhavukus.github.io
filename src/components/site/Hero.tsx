import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Mail, Instagram, MousePointer2 } from "lucide-react";

const roles = ["Founder.", "AI Builder.", "Software Engineer.", "Full-Stack Developer.", "Entrepreneur.", "Problem Solver."];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-4 pt-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Open to collaborations · Delhi NCR
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Hello, I'm{" "}
          <span className="text-gradient">Bhavuk</span>.
          <br />
          <span className="relative inline-block align-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient inline-block"
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Computer Science student and founder building AI-first products that solve meaningful
          real-world problems. Currently building Groomsta and exploring autonomous AI systems
          for high-impact industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity group-hover:opacity-60"
              style={{ background: "var(--gradient-text)" }} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          {[
            { Icon: Github, href: "https://github.com/bhavukus" },
            { Icon: Linkedin, href: "https://linkedin.com/in/bhavukus" },
            { Icon: Twitter, href: "https://x.com/bhavukus" },
            { Icon: Instagram, href: "https://instagram.com/pvtfouonder" },
            { Icon: Mail, href: "mailto:bhavukus@gmail.com" },
          ].map(({ Icon, href }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <MousePointer2 className="h-4 w-4 animate-float-slow" />
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}