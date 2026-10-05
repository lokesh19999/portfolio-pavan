import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { FileCheck, Shield, BookOpen, Award, Lock, Globe } from "lucide-react";

const icons = [Shield, BookOpen, Award, FileCheck, Lock, Globe];

export function Frameworks() {
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
          <h2 className="mb-6">Frameworks & Standards</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Experience supporting industry-standard frameworks and compliance requirements.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {resume.frameworks.map((fw, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={fw}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <Icon className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <div className="font-medium text-sm">{fw}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}