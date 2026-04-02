import { motion } from "framer-motion";
import { Eye, Bot, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Eye,
    number: "01",
    title: "Vision",
    description: "Define the soul of the product. We sit with founders, decode intent, and map the atmosphere of what needs to exist.",
  },
  {
    icon: Bot,
    number: "02",
    title: "Agentic Execution",
    description: "Deploying autonomous AI fleets—orchestrated agents that architect, build, and iterate in parallel. No bottlenecks. Only velocity.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Refinement",
    description: "Polishing the output to perfection. Every pixel, every interaction, every edge case—refined until the vibe is undeniable.",
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className="relative px-6 py-32" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            // the methodology
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-5xl text-foreground">
            The Vibe<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="glass-panel glow-border p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
                <div className="h-px flex-1 bg-border" />
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
