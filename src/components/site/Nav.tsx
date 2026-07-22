import { motion, useScroll, useSpring } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Journey" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-primary via-accent to-primary"
      />
      <header className="fixed inset-x-0 top-4 z-40 mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#top" className="glass rounded-full px-4 py-2 text-sm font-semibold tracking-tight">
          <span className="text-gradient">◆ ALEX / CHEN</span>
        </a>
        <nav className="glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="relative rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact"
          className="glass rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:scale-105">
          Let's talk →
        </a>
      </header>
    </>
  );
}