import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Rocket, Network, ShieldCheck, Database, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const differentiators = [
  {
    icon: Rocket,
    title: "First-mover in drone service aggregation",
  },
  {
    icon: Network,
    title: "Strong network effects: farmers ↔ pilots ↔ partners",
  },
  {
    icon: ShieldCheck,
    title: "Verified, compliant pilot network",
  },
  {
    icon: Database,
    title: "Proprietary field-level data engine",
  },
  {
    icon: TrendingUp,
    title: "Diversified revenue streams",
  },
  {
    icon: Globe,
    title: "Built for scalability across rural India",
  },
];

export function WhyAtomikSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why Atomik
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What makes us{" "}
              <span className="text-accent">different</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another agri-tech startup. We're building the infrastructure for precision agriculture at scale.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/technology">
                Learn About Our Technology
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
