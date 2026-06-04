import { motion } from "motion/react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "SQLite / Supabase", level: "Intermediate" },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Design Research", level: "Intermediate" },
      { name: "Interaction Design", level: "Intermediate" },
      { name: "Systems Thinking", level: "Advanced" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100">
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Projects</a>
            <a href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Home</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-400 font-semibold">Capabilities</p>
          <h1 className="text-4xl font-bold text-white">Skills</h1>
          <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">Technical skills, tools, and design capabilities used across projects.</p>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-400 font-semibold">Capabilities</p>
              <h1 className="text-4xl font-bold text-white">Skills</h1>
              <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">Technical skills, tools, and design capabilities used across projects.</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">Portfolio signal</div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                This mix shows I can design the interface, build the frontend, and connect it to real backends and data flows.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIndex * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold text-white">{group.title}</h2>
                <div className="mt-5 space-y-4">
                  {group.items.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      whileHover={{ scale: 1.01, y: -2 }}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{skill.level}</div>
                      </div>
                      <div className="mt-3 h-2 rounded-full overflow-hidden border border-white/5 bg-black/30">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-600 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "62%" : "35%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Tools & Platforms</h3>
              <p className="mt-3 text-sm text-zinc-300">Figma, VS Code, Git, GitHub, Tailwind CSS, Vite, Node.js, Supabase, SQLite, Postman, Chrome DevTools.</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Figma','VSCode','Git','Tailwind','Vite','Node'].map((t) => (
                  <div key={t} className="rounded-full bg-black/20 text-zinc-300 text-xs px-3 py-2 text-center">{t}</div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Certifications & Coursework</h3>
              <ul className="mt-3 list-disc list-inside text-zinc-300">
                <li>Advanced Web Development — self study and projects</li>
                <li>Human-Computer Interaction — coursework and prototyping</li>
                <li>Data Structures & Algorithms — core foundation for performant UI</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
