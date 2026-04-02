import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { label: "Timeline", old: "6+ months", vibe: "2 weeks" },
  { label: "Cost", old: "$50k+ budget", vibe: "Fraction of cost" },
  { label: "Codebase", old: "Static, brittle code", vibe: "AI-native, adaptive" },
  { label: "Maintenance", old: "Manual patching", vibe: "Self-healing systems" },
  { label: "Scalability", old: "Rebuild to scale", vibe: "Scales autonomously" },
];

const Comparison = () => {
  return (
    <section id="comparison" className="relative px-6 py-24" style={{ zIndex: 2 }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">// side-by-side</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground">
            Vibe vs. Standard
          </h2>
        </motion.div>

        <motion.div
          className="rounded-lg border border-border overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/50">
            <div className="p-4 font-mono text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
              Metric
            </div>
            <div className="p-4 font-mono text-xs uppercase tracking-wider text-muted-foreground border-b border-l border-border">
              Old Way
            </div>
            <div className="p-4 font-mono text-xs uppercase tracking-wider text-primary border-b border-l border-border">
              Vibe Logic Way
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 group hover:bg-muted/30 transition-colors">
              <div className="p-4 font-mono text-sm text-foreground border-b border-border">
                {row.label}
              </div>
              <div className="p-4 text-sm text-muted-foreground border-b border-l border-border flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
                {row.old}
              </div>
              <div className="p-4 text-sm text-foreground border-b border-l border-border flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                {row.vibe}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
