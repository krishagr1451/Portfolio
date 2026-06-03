import { motion } from "motion/react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-cyan-700 transition-colors px-3 py-2 rounded-lg hover:bg-cyan-50">Projects</a>
            <a href="/" className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">Home</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-6">
          <h1 className="text-4xl font-bold">About — Krish Agrawal</h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            I am a Computer Science student at Sardar Patel Institute of Technology with a passion for building web applications and crafting thoughtful user
            experiences. I combine backend engineering skills with UI/UX design principles to deliver end-to-end solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Background</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Coursework in algorithms, databases, and systems; practical experience building full-stack apps. Currently pursuing a UI/UX minor
                to improve product design and research skills.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Interests</h2>
              <ul className="mt-3 list-disc list-inside text-slate-700">
                <li>Full-stack web development</li>
                <li>Design systems & interaction design</li>
                <li>Natural Language Processing</li>
                <li>Product thinking and prototyping</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
