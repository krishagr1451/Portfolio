import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Home } from "lucide-react";
import { projects } from "../data/projects";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

const featuredProjects = projects.filter((project) => project.featured);
const liveProjects = projects.filter((project) => project.links.live).length;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100">
      <header className="px-6 py-5 sm:px-10 lg:px-16 border-b border-white/10 bg-black/70 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto drop-shadow-sm" />
            <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Home className="h-4 w-4" />
              Home
            </a>
            <div className="text-sm text-zinc-400 px-3 py-2 rounded-lg bg-white/5 border border-white/10">Project Pages</div>
          </div>
        </div>
      </header>

      <main className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-400 font-semibold">Portfolio Projects</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">A Page For Every Build</h1>
              <p className="text-zinc-300 max-w-3xl text-lg">
                Each project gets a dedicated case-study page with architecture, workflows, and technical highlights.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Projects</div>
                  <div className="mt-1 text-2xl font-semibold text-white">{projects.length}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Featured</div>
                  <div className="mt-1 text-2xl font-semibold text-white">{featuredProjects.length}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Live</div>
                  <div className="mt-1 text-2xl font-semibold text-white">{liveProjects}</div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.95),rgba(2,6,23,0.9))] p-6 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.32em] text-cyan-300">How to scan this page</div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
                <p>Open the projects that best match the job you want to show.</p>
                <p>Use the live links for the newest stack and the case-study pages for depth.</p>
                <p>Featured badges mark the strongest portfolio pieces first.</p>
              </div>
            </div>
          </motion.section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl shadow-black/20 hover:-translate-y-1 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                    <p className="text-sm text-cyan-400 mt-1">{project.subtitle}</p>
                  </div>
                  {project.featured ? (
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/20">Featured</span>
                  ) : null}
                </div>

                <p className="text-zinc-300 mt-4 leading-relaxed">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 text-xs font-medium border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 text-sm font-medium hover:from-cyan-500 hover:to-blue-500 transition-colors"
                  >
                    Open Project Page
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-zinc-200 hover:border-cyan-500/50 hover:text-white transition-colors"
                    >
                      Live App
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
