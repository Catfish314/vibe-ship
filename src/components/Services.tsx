import { motion } from "framer-motion";
import { Link2, Users, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Link2,
    title: "Custom CRM/ERP Glue",
    description: "Connecting disconnected tools via AI agents. We build the intelligent middleware that makes your existing stack work as one unified system.",
    metric: "12+ integrations avg.",
  },
  {
    icon: Users,
    title: "Autonomous Outreach",
    description: "AI that researches, qualifies, and engages leads on autopilot. From prospecting to first touch — fully autonomous.",
    metric: "3x pipeline velocity",
  },
  {
    icon: BarChart3,
    title: "Data Orchestration",
    description: "Turning messy spreadsheets into real-time executive dashboards. Your data, structured, visualized, and actionable.",
    metric: "94% time reduction",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative px-6 py-24" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">// service pillars</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground">
            What We Architect
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bento-card group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-mono font-bold text-lg text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>
              <div className="pt-4 border-t border-border">
                <span className="font-mono text-xs text-primary">{service.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
