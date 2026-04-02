import { motion } from "framer-motion";

const tools = [
  { name: "LangChain", category: "Orchestration" },
  { name: "Python", category: "Core Runtime" },
  { name: "DeepSeek-V3", category: "LLM Engine" },
  { name: "Custom Agents", category: "Agentic Framework" },
  { name: "Vector DBs", category: "Memory Layer" },
  { name: "FastAPI", category: "API Gateway" },
];

const EngineRoom = () => {
  return (
    <section id="engine" className="relative px-6 py-24" style={{ zIndex: 2 }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">// engine room</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground">
            Under the Hood
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="bento-card text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="font-mono font-bold text-lg text-foreground mb-1">{tool.name}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{tool.category}</div>
            </motion.div>
          ))}
        </div>

        {/* Flow visualization */}
        <motion.div
          className="mt-12 bento-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="status-dot" />
            <span className="font-mono text-xs text-primary uppercase tracking-wider">Live Agent Pipeline</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
            {["Input Data", "→", "LangChain Router", "→", "DeepSeek-V3 Analysis", "→", "Agent Swarm", "→", "Output"].map((item, i) => (
              <span key={i} className={item === "→" ? "text-primary" : "px-3 py-1.5 rounded bg-muted text-foreground"}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineRoom;
