export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-4 pb-12 pt-24">
      <div className="glass rounded-3xl p-8 md:p-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="text-6xl font-semibold tracking-tight md:text-8xl"><span className="text-gradient">Let's build.</span></div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Open to collaborations, startup opportunities, and building ambitious products. Based in Delhi NCR.</p>
          </div>
          <a href="#contact" className="glass whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105">Start the conversation →</a>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© 2026 Bhavuk. Crafted with intention.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Colophon</a>
          </div>
        </div>
      </div>
    </footer>
  );
}