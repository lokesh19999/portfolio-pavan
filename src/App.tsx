import { Navbar } from "./components/Navbar";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import { Capabilities } from "./components/Capabilities";
import { Workflow } from "./components/Workflow";
import { Frameworks } from "./components/Frameworks";
import { Strengths } from "./components/Strengths";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Capabilities />
        <Workflow />
        <Frameworks />
        <Strengths />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-slate-800/60 py-8">
        <div className="container-custom px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm"
          >
            © {new Date().getFullYear()} Pavankumar Bheesetty. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}