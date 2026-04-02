import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const [hours, setHours] = useState(40);
  const [cost, setCost] = useState(35);

  const weeklySavings = hours * cost * 0.85;
  const annualSavings = weeklySavings * 52;

  return (
    <section id="roi" className="relative px-6 py-24" style={{ zIndex: 2 }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">// roi calculator</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground">
            Calculate Your Savings
          </h2>
        </motion.div>

        <motion.div
          className="bento-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="space-y-8">
            {/* Hours slider */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-mono text-sm text-muted-foreground">Hours on manual tasks / week</label>
                <span className="font-mono text-sm text-primary font-bold">{hours}h</span>
              </div>
              <Slider
                value={[hours]}
                onValueChange={(v) => setHours(v[0])}
                min={5}
                max={200}
                step={5}
              />
            </div>

            {/* Cost slider */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-mono text-sm text-muted-foreground">Avg. staff cost / hour ($)</label>
                <span className="font-mono text-sm text-primary font-bold">${cost}</span>
              </div>
              <Slider
                value={[cost]}
                onValueChange={(v) => setCost(v[0])}
                min={15}
                max={150}
                step={5}
              />
            </div>

            {/* Results */}
            <div className="pt-6 border-t border-border grid grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">Weekly Savings</p>
                <p className="font-mono text-2xl md:text-3xl font-bold text-primary text-glow">
                  ${weeklySavings.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">Annual Savings</p>
                <p className="font-mono text-2xl md:text-3xl font-bold text-foreground">
                  ${annualSavings.toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Based on 85% task automation rate. Actual results vary by workflow complexity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
