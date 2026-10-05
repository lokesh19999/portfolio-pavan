import { motion } from "framer-motion";
import { resume } from "../data/resume";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Core Cybersecurity Skills</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning SOC operations, threat detection, incident response, and security engineering.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {resume.coreSkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="badge hover:border-blue-400/60 hover:bg-blue-500/20 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}