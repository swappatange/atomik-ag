import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, DollarSign, Frown, Search, Calendar, CreditCard } from "lucide-react";

const farmerProblems = [
  { icon: Clock, text: "Slow & inefficient manual spraying" },
  { icon: DollarSign, text: "High labor costs" },
  { icon: AlertTriangle, text: "Uneven chemical distribution" },
  { icon: Frown, text: "Exposure to harmful chemicals" },
  { icon: Search, text: "Difficulty finding certified drone pilots" },
];

const pilotProblems = [
  { icon: AlertTriangle, text: "Idle drones & no discovery platform" },
  { icon: Calendar, text: "Unpredictable workload" },
  { icon: CreditCard, text: "Manual scheduling & payment issues" },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Farming is still powered by{" "}
            <span className="text-primary">outdated manual processes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Farmers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Farmers face:</h3>
            </div>
            <ul className="space-y-4">
              {farmerProblems.map((problem, index) => (
                <motion.li
                  key={problem.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <span>{problem.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Drone Operators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Drone operators face:</h3>
            </div>
            <ul className="space-y-4">
              {pilotProblems.map((problem, index) => (
                <motion.li
                  key={problem.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <span>{problem.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
