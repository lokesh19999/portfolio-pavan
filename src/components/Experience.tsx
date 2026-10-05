import { motion } from "framer-motion";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";
import { resume } from "../data/resume";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Professional Experience</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Progressive career growth across leading organizations in cybersecurity operations and SOC services.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-cyan-500/50 hidden md:block" />
          <div className="space-y-12">
            {resume.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:w-1/2">
                  <div className="card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl mb-2">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-slate-300">
                          <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-950 relative z-10" />
                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center mb-8">Career Timeline</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {resume.careerTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="badge mb-2 text-lg px-4 py-2">{item.year}</div>
                <div className="text-center">
                  <div className="font-medium">{item.company}</div>
                  <div className="text-sm text-slate-400">{item.role}</div>
                </div>
                {index < resume.careerTimeline.length - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}