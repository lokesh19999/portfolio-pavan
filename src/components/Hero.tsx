import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Eye, Server, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-scroll";
import { resume } from "../data/resume";
import profileImage from "../assets/profile.jpg";

const dashboardItems = [
  { icon: Shield, label: "Threats Blocked", value: "Active", color: "text-green-400" },
  { icon: Activity, label: "Alerts Monitored", value: "24×7", color: "text-blue-400" },
  { icon: Eye, label: "Investigations", value: "Continuous", color: "text-cyan-400" },
  { icon: Server, label: "SIEM Events", value: "Real-time", color: "text-purple-400" },
  { icon: Mail, label: "Phishing Detection", value: "Enabled", color: "text-yellow-400" }
];

export function Hero() {
  return (
    <section id="hero" className="section-padding pt-32 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:-mt-28"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {resume.personal.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-300 font-medium mb-6 gradient-text">
              {resume.personal.title}
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl">
              {resume.personal.intro}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="experience" smooth duration={500} offset={-70} className="btn-primary cursor-pointer">
                View Experience <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="skills" smooth duration={500} offset={-70} className="btn-secondary cursor-pointer">
                Explore Skills
              </Link>
              <Link to="contact" smooth duration={500} offset={-70} className="btn-secondary cursor-pointer">
                Contact Me
              </Link>
              <a href={resume.personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <ExternalLink className="h-5 w-5" /> LinkedIn <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {resume.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="mx-auto w-64 sm:w-72 lg:w-80 mb-6 text-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={profileImage}
                  alt={resume.personal.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{resume.personal.name}</h3>
              <p className="text-sm font-medium mt-2 gradient-text">{resume.personal.title}</p>
            </div>
            <div className="glass-card relative overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="border-b border-white/10 pb-4 mb-6 mt-8">
                <h3 className="text-xl font-semibold">SOC Operations Dashboard</h3>
                <p className="text-slate-400 text-sm">Security Operations Center - Real-time Monitoring</p>
              </div>
              <div className="space-y-4">
                {dashboardItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-900/40 border border-slate-800/60"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className="text-slate-300">{item.label}</span>
                    </div>
                    <span className={`text-sm font-medium ${item.color}`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-green-400 animate-pulse-slow" />
                  <span className="text-sm text-slate-300">System Status</span>
                </div>
                <div className="text-xs text-slate-400">All security controls operational • No critical alerts</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}