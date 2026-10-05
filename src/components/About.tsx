import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { Shield, Clock, Users, Server } from "lucide-react";

const highlights = [
  { icon: Shield, title: "SOC L1/L2 Operations", desc: "Experienced in tiered SOC operations" },
  { icon: Clock, title: "24×7 Global SOC", desc: "Round-the-clock security monitoring" },
  { icon: Users, title: "MSSP Environments", desc: "Managed Security Services Provider experience" },
  { icon: Server, title: "SIEM & EDR Expertise", desc: "Advanced threat detection and response" }
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Professional Summary</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            {resume.personal.intro}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resume.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="mb-6">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "SOC L1/L2 operations",
              "MSSP environments",
              "24x7 global SOC operations",
              "SIEM monitoring and investigation",
              "Incident response",
              "Threat hunting",
              "IOC/IOA analysis",
              "Malware and phishing investigation",
              "EDR/XDR",
              "Email Security",
              "DLP",
              "IAM",
              "Firewall / IDS / IPS",
              "Cloud Security",
              "Vulnerability management",
              "Security detection engineering",
              "Root cause analysis",
              "SLA-driven incident management"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-slate-300"
              >
                <Shield className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <item.icon className="h-8 w-8 text-blue-400 mb-4" />
              <h4 className="mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}