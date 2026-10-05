import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { resume } from "../data/resume";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Education</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <GraduationCap className="h-8 w-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">{resume.education.degree}</h3>
                <p className="text-lg text-blue-400 mb-3">{resume.education.field}</p>
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{resume.education.institution}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {resume.education.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    CGPA: {resume.education.cgpa}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}