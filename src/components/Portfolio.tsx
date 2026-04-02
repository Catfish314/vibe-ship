import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NeuroSync",
    tag: "SaaS Platform",
    prompt: '"Build me a real-time neural data sync platform with collaborative editing."',
    result: "Full-stack app shipped in 72 hours. 12k MAU in first month.",
  },
  {
    title: "VaultOS",
    tag: "FinTech",
    prompt: '"I need a crypto portfolio manager that actually makes sense."',
    result: "Prompt to production in 48 hours. Acquired within 6 months.",
  },
  {
    title: "Moodboard AI",
    tag: "Creative Tool",
    prompt: '"An AI that understands my aesthetic and generates design systems."',
    result: "MVP launched in 36 hours. Featured on Product Hunt #1.",
  },
];

const Portfolio = () => {
  return (
    <section className="relative px-6 py-32" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            // prompt → product
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-5xl text-foreground">
            Case Studies<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-panel glow-border p-8 group cursor-pointer hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                {project.prompt}
              </p>
              <div className="h-px bg-border mb-4" />
              <p className="text-sm text-foreground/80">
                {project.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
