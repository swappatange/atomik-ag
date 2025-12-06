import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Smartphone, Package, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Smartphone,
    title: "Aggregation Platform",
    description: "A mobile-first platform where farmers can book certified drone pilots with transparent pricing and guaranteed time slots.",
    color: "primary",
  },
  {
    icon: Package,
    title: "Agri-Input Distribution",
    description: "Genuine crop protection products delivered to the farm gate—bundled with drone spraying services.",
    color: "secondary",
  },
  {
    icon: Building2,
    title: "B2B & Government Partnerships",
    description: "Precision agriculture solutions for enterprises, agribusinesses, and government programs at scale.",
    color: "accent",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 gradient-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Atomik's 3-Pillar Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive ecosystem designed to transform agricultural operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  pillar.color === 'primary' ? 'bg-primary/10' :
                  pillar.color === 'secondary' ? 'bg-secondary/20' :
                  'bg-accent/20'
                }`}>
                  <pillar.icon className={`w-8 h-8 ${
                    pillar.color === 'primary' ? 'text-primary' :
                    pillar.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/solutions">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
