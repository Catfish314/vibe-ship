import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32" style={{ zIndex: 2 }}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6 animate-pulse-glow">
            // the future is atmospheric
          </p>
        </motion.div>

        <motion.h1
          className="font-mono font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight mb-8 text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground">Vibe Coding:</span>
          <br />
          <span className="text-primary">Shipping at the Speed</span>
          <br />
          <span className="text-foreground">of Thought.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We don't just write lines of code; we curate intent. The future of software isn't manual—it's atmospheric.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-mono font-semibold text-sm tracking-wider uppercase rounded-lg bg-primary text-primary-foreground glow-violet transition-all hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#methodology"
            className="inline-flex items-center justify-center px-8 py-4 font-mono font-semibold text-sm tracking-wider uppercase rounded-lg glass-panel glow-border text-foreground transition-all hover:scale-105"
          >
            View the Manifest
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
