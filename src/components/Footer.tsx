const Footer = () => (
  <footer className="relative px-6 py-16 border-t border-border" style={{ zIndex: 2 }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-mono font-bold text-lg text-foreground">
        vibe<span className="text-primary">.</span>logic
      </div>
      <p className="text-sm text-muted-foreground font-mono">
        Efficiency, autonomy, scale. © 2026
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
          Twitter
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
          GitHub
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
