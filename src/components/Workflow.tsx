import { motion } from "framer-motion";
import { ArrowRight, Search, Eye, CheckCircle, Shield, Wrench, RotateCcw, FileText, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, step: "1", title: "Detect", desc: "Monitor alerts from SIEM/EDR/XDR platforms" },
  { icon: Eye, step: "2", title: "Analyze", desc: "Initial triage and event correlation" },
  { icon: CheckCircle, step: "3", title: "Validate", desc: "Verify false positives and true positives" },
  { icon: Search, step: "4", title: "Investigate", desc: "Deep dive with IOC/IOA analysis" },
  { icon: Shield, step: "5", title: "Contain", desc: "Implement containment measures" },
  { icon: Wrench, step: "6", title: "Remediate", desc: "Apply remediation actions" },
  { icon: RotateCcw, step: "7", title: "Recover", desc: "Restore systems to secure state" },
  { icon: FileText, step: "8", title: "Document", desc: "Record findings and actions taken" },
  { icon: TrendingUp, step: "9", title: "Improve", desc: "Update detection rules and SOPs" }
];

export function Workflow() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Incident Response Workflow</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Systematic approach to incident handling based on industry best practices and extensive SOC experience.
          </p>
        </motion.div>
        <div className="relative overflow-x-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-center min-w-max md:min-w-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col items-center max-w-[120px] md:max-w-none"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border border-blue-400 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-400">{step.step}</span>
                  </div>
                </div>
                <h4 className="text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-slate-400 text-center leading-tight">{step.desc}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 left-[calc(100%+8px)] transform -translate-y-1/2 h-6 w-6 text-blue-400" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}