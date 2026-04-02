import { motion } from "framer-motion";

const metrics = [
  "Reduced manual data entry by 94%",
  "Inventory forecasting accuracy increased to 99%",
  "Lead response time cut from 4hrs to 12sec",
  "Customer onboarding automated — 0 human touch",
  "Report generation: 3 days → 8 seconds",
  "Support ticket routing accuracy: 97.3%",
];

const CaseStudyTicker = () => {
  return (
    <section className="relative py-12 border-y border-border overflow-hidden" style={{ zIndex: 2 }}>
      <div className="flex animate-ticker-scroll whitespace-nowrap">
        {[...metrics, ...metrics].map((metric, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="status-dot flex-shrink-0" />
            <span className="font-mono text-sm text-foreground">{metric}</span>
            <span className="text-muted-foreground/30 font-mono">|</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyTicker;
