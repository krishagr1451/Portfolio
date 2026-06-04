import { motion } from "motion/react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

export default function AboutPage() {
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
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-400 font-semibold">About</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">About — Krish Agrawal</h1>
              <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">
                I am a Computer Science student at Sardar Patel Institute of Technology with a passion for building web applications and crafting thoughtful user
                experiences. I combine backend engineering skills with UI/UX design principles to deliver end-to-end solutions.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Quick facts</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["Degree", "Computer Science"],
                  ["Focus", "UI/UX + full-stack"],
                  ["Style", "Clean and functional"],
                  ["Goal", "Strong internships"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
                    <div className="mt-1 text-base font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02, y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">Background</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                Coursework in algorithms, databases, and systems; practical experience building full-stack apps. Currently pursuing a UI/UX minor
                to improve product design and research skills.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">Interests</h2>
              <ul className="mt-3 list-disc list-inside text-zinc-300">
                <li>Full-stack web development</li>
                <li>Design systems & interaction design</li>
                <li>Design Research</li>
                <li>Product thinking and prototyping</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Experience</h3>
              <ul className="mt-3 list-disc list-inside text-zinc-300">
                <li>
                  Frontend intern — built responsive dashboards and interactive components using React, TypeScript, and Tailwind.
                </li>
                <li>
                  Full-stack project — designed and implemented a booking flow with Node.js backend and a polished Tailwind UI.
                </li>
                <li>
                  Student lead — coordinated small design sprints and mentored peers on accessibility and component thinking.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Education</h3>
              <div className="mt-3 text-zinc-300 text-sm space-y-2">
                <div>
                  <strong className="text-white">Sardar Patel Institute of Technology</strong>
                  <div>B.Tech — Computer Science (expected 2026)</div>
                </div>
                <div>
                  <strong className="text-white">Selected coursework</strong>
                  <div className="text-zinc-400">Algorithms, Databases, Human-Computer Interaction, Software Engineering</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Process</h3>
              <ol className="mt-3 list-decimal list-inside text-zinc-300 space-y-2">
                <li>Research: user interviews, competitive analysis, and alignment on goals.</li>
                <li>Design: wireframes, prototypes, and interaction specs in Figma.</li>
                <li>Build: iterate with real data, accessible markup, and component-driven UI.</li>
                <li>Measure: user feedback, analytics, and continuous refinement.</li>
              </ol>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
