import { motion } from "framer-motion";
import { Mail, Phone, Link2, MapPin, ExternalLink } from "lucide-react";
import { resume } from "../data/resume";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Open to opportunities in SOC operations, incident response, and cybersecurity analyst roles.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card">
            <h3 className="text-2xl mb-6 text-center">{resume.personal.name}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">{resume.personal.location}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href={`tel:${resume.personal.phone}`} className="text-slate-300 hover:text-blue-400">
                  {resume.personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href={`mailto:${resume.personal.email}`} className="text-slate-300 hover:text-blue-400 break-all">
                  {resume.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <Link2 className="h-5 w-5 text-blue-400" />
                <a href={resume.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 flex items-center gap-2 break-all">
                  linkedin.com/in/pavankumar-bheesetty-4a44b5249/ <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href={`mailto:${resume.personal.email}`} className="btn-primary">
                <Mail className="h-5 w-5" /> Email Me
              </a>
              <a href={`tel:${resume.personal.phone}`} className="btn-secondary">
                <Phone className="h-5 w-5" /> Call Me
              </a>
              <a href={resume.personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Link2 className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}