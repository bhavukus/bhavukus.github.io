import { motion } from "motion/react";
import { Video } from "lucide-react";

export function FloatingContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href="https://calendly.com/bhavukus/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-2xl shadow-foreground/20 transition-transform hover:scale-105"
      >
        <span className="relative z-10 hidden sm:inline">Book a virtual meet</span>
        <span className="relative z-10 sm:hidden">Meet</span>
        <Video className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        <span
          className="absolute inset-0 opacity-0 blur-xl transition-opacity group-hover:opacity-70"
          style={{ background: "var(--gradient-text)" }}
        />
      </a>
    </motion.div>
  );
}
