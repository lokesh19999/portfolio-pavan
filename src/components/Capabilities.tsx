import { motion } from "framer-motion";
import { Shield, Search, BarChart3, AlertTriangle, Target, Monitor, Globe, Cloud, Lock, Mail, Bug, Settings, FileText, Clock } from "lucide-react";

const capabilities = [
  { icon: Shield, title: "Security Operations", desc: "24x7 SOC monitoring, alert triage, and security operations management" },
  { icon: Search, title: "Threat Detection & Investigation", desc: "Proactive threat identification and comprehensive security investigations" },
  { icon: BarChart3, title: "SIEM Monitoring", desc: "Advanced SIEM platform monitoring and correlation analysis" },
  { icon: AlertTriangle, title: "Incident Response", desc: "Rapid incident response and containment procedures" },
  { icon: Target, title: "Threat Hunting", desc: "Proactive threat hunting using IOC/IOA analysis techniques" },
  { icon: Monitor, title: "Endpoint Security", desc: "EDR/XDR monitoring and endpoint threat investigation" },
  { icon: Globe, title: "Network Security", desc: "Network security monitoring, forensics, and attack analysis" },
  { icon: Cloud, title: "Cloud Security", desc: "Cloud security monitoring across Azure, AWS, and Microsoft 365" },
  { icon: Lock, title: "Identity & Access Security", desc: "Active Directory and Entra ID security investigations" },
  { icon: Mail, title: "Email Security", desc: "Phishing investigation and email threat analysis" },
  { icon: Bug, title: "Malware & Phishing Investigation", desc: "Advanced malware analysis and phishing campaign investigation" },
  { icon: Settings, title: "Detection Engineering", desc: "SIEM use-case tuning, rule development, and false positive reduction" },
  { icon: FileText, title: "Security Reporting", desc: "Security metrics, dashboards, and comprehensive reporting" },
  { icon: Clock, title: "SLA & Incident Management", desc: "End-to-end incident management with strict SLA adherence" }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">What I Do</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Comprehensive cybersecurity capabilities focused on threat detection, incident response, and security operations.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card"
            >
              <cap.icon className="h-8 w-8 text-blue-400 mb-4" />
              <h4 className="mb-2 text-sm">{cap.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}