import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "$ vibe init --project=next-big-thing", delay: 0 },
  { text: "→ Analyzing intent...", delay: 800 },
  { text: "→ Mapping product architecture...", delay: 1600 },
  { text: "→ Deploying agent fleet [3 agents]...", delay: 2400 },
  { text: "  ├─ Agent Alpha: Frontend scaffold ✓", delay: 3200 },
  { text: "  ├─ Agent Beta: API layer ✓", delay: 3800 },
  { text: "  └─ Agent Gamma: Database schema ✓", delay: 4400 },
  { text: "→ Optimizing architecture...", delay: 5200 },
  { text: "→ Running quality pass...", delay: 6000 },
  { text: "→ Vibe confirmed. ✦", delay: 6800 },
  { text: "", delay: 7400 },
  { text: "Product shipped. Time elapsed: 4h 23m.", delay: 7800 },
];

const VibeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );

    const resetTimer = setTimeout(() => {
      setVisibleLines(0);
      setStarted(false);
      setTimeout(() => setStarted(true), 500);
    }, 10000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(resetTimer);
    };
  }, [started]);

  return (
    <section className="relative px-6 py-32" style={{ zIndex: 2 }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            // live session
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-5xl text-foreground">
            A Vibe in Action<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="glass-panel glow-border rounded-xl overflow-hidden glow-violet"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              vibe-terminal v2.0
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm min-h-[320px]">
            {lines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={`mb-1 ${
                  line.text.includes("✓")
                    ? "text-green-400/80"
                    : line.text.includes("✦")
                    ? "text-primary"
                    : line.text.startsWith("$")
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {line.text}
              </div>
            ))}
            <span className="inline-block w-2.5 h-5 bg-primary animate-terminal-blink" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VibeTerminal;
