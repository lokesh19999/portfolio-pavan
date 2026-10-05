import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { CheckCircle } from "lucide-react";

export function Strengths() {
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
          <h2 className="mb-6">Additional Strengths</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Key professional strengths that enable effective security operations and stakeholder collaboration.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {resume.strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 rounded-lg border border-slate-800/60 bg-slate-900/40"
            >
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-slate-300">{strength}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}