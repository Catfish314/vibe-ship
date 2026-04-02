import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logs = [
  { type: "SYSTEM", msg: "Analyzing workflow topology..." },
  { type: "AGENT", msg: "Deploying data scraper → CRM pipeline" },
  { type: "OPTIMIZED", msg: "Lead routing improved by 40ms" },
  { type: "SYSTEM", msg: "Spinning up inference cluster..." },
  { type: "AGENT", msg: "Qualification model retrained on 12k samples" },
  { type: "COMPLETE", msg: "Dashboard sync — 0 latency drift" },
  { type: "SYSTEM", msg: "Monitoring outbound sequences..." },
  { type: "OPTIMIZED", msg: "Email deliverability +6.2%" },
  { type: "AGENT", msg: "Auto-healing schema migration applied" },
  { type: "COMPLETE", msg: "All agents nominal. Uptime: 99.97%" },
];

const typeColor: Record<string, string> = {
  SYSTEM: "text-muted-foreground",
  AGENT: "text-foreground",
  OPTIMIZED: "text-primary",
  COMPLETE: "text-primary",
};

const LiveStatusFeed = () => {
  const [visibleLogs, setVisibleLogs] = useState<typeof logs>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % logs.length;
        setVisibleLogs((cur) => [...cur.slice(-4), logs[next]]);
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 w-80 z-50">
      <div className="bento-card !p-4 border-border/50 backdrop-blur-md bg-background/90">
        <div className="flex items-center gap-2 mb-3">
          <span className="status-dot" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Agent Feed — Live</span>
        </div>
        <div className="space-y-1.5 font-mono text-[11px] min-h-[80px]">
          <AnimatePresence mode="popLayout">
            {visibleLogs.map((log, i) => (
              <motion.div
                key={`${index}-${i}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className={typeColor[log.type] || "text-foreground"}>[{log.type}]</span>{" "}
                <span className="text-muted-foreground">{log.msg}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          <span className="inline-block w-1.5 h-3.5 bg-primary animate-terminal-blink" />
        </div>
      </div>
    </div>
  );
};

export default LiveStatusFeed;
