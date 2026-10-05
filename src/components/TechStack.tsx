import { motion } from "framer-motion";
import { techStack } from "../data/techStack";
import { Info } from "lucide-react";

export function TechStack() {
  return (
    <section id="technology" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Security Technology Stack</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Professional experience with industry-leading security tools and technologies across SIEM, EDR, XDR, email security, identity, network, DLP, ITSM, and threat intelligence.
          </p>
        </motion.div>
        <div className="space-y-12">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-blue-400">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="card group relative"
                    title={item.name}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="text-blue-400 group-hover:text-cyan-400 transition-colors">
                        {item.logo}
                      </div>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-tight">
                        {item.name}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="h-4 w-4 text-slate-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}