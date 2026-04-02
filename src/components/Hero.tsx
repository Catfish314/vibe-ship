import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32" style={{ zIndex: 2 }}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 mb-8">
            <span className="status-dot" />
            <span className="font-mono text-xs tracking-wider uppercase text-primary">Systems Online</span>
          </div>
        </motion.div>

        <motion.h1
          className="font-mono font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="text-foreground">Automate the Mundane.</span>
          <br />
          <span className="text-primary text-glow">Command the Complex.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We build autonomous systems that bridge the gap between your data and your decisions. 
          Faster than traditional dev, smarter than off-the-shelf tools.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-mono font-semibold text-sm tracking-wider uppercase rounded-lg bg-primary text-primary-foreground glow-mint transition-all hover:scale-105"
          >
            Build My Automation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#comparison"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-mono font-semibold text-sm tracking-wider uppercase rounded-lg glass-panel glow-border text-foreground transition-all hover:scale-105"
          >
            <Play className="w-4 h-4" />
            Watch Agent in Action
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
