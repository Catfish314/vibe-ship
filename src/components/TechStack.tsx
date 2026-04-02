import { motion } from "framer-motion";

const tools = [
  { name: "Cursor", desc: "AI-native IDE" },
  { name: "Claude", desc: "Reasoning engine" },
  { name: "Replit", desc: "Instant deployment" },
  { name: "Custom Agents", desc: "Proprietary frameworks" },
];

const TechStack = () => {
  return (
    <section className="relative px-6 py-32" style={{ zIndex: 2 }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            // the arsenal
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-5xl text-foreground">
            Our Stack<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="glass-panel glow-border p-6 text-center group hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="font-mono font-bold text-primary text-lg">
                  {tool.name[0]}
                </span>
              </div>
              <h3 className="font-mono font-semibold text-sm text-foreground mb-1">
                {tool.name}
              </h3>
              <p className="text-xs text-muted-foreground">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
