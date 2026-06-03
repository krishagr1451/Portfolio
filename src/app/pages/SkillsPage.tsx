import { motion } from "motion/react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Flask", level: "Intermediate" },
  { name: "Design Research", level: "Intermediate" },
];

export default function SkillsPage() {
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
          <h1 className="text-4xl font-bold">Skills</h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">Technical skills, tools, and design capabilities used across projects.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((s, idx) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <div className="text-sm text-slate-600">{s.level}</div>
                  </div>
                  <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-cyan-600"
                      initial={{ width: 0 }}
                      animate={{ width: s.level === "Advanced" ? "90%" : s.level === "Intermediate" ? "60%" : "30%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
