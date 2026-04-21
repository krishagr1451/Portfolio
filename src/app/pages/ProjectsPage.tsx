import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Home } from "lucide-react";
import { projects } from "../data/projects";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#cffafe_0%,transparent_34%),radial-gradient(circle_at_80%_12%,#dbeafe_0%,transparent_32%),linear-gradient(135deg,#f8fafc_0%,#ffffff_40%,#ecfeff_100%)] text-slate-900">
      <header className="px-6 py-5 sm:px-10 lg:px-16 border-b border-slate-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto drop-shadow-sm" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-cyan-700 transition-colors px-3 py-2 rounded-lg hover:bg-cyan-50"
            >
              <Home className="h-4 w-4" />
              Home
            </a>
            <div className="text-sm text-slate-500 px-3 py-2 rounded-lg bg-slate-100">Project Pages</div>
          </div>
        </div>
      </header>

      <main className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">Portfolio Projects</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">A Page For Every Build</h1>
            <p className="text-slate-600 max-w-3xl text-lg">
              Each project gets a dedicated case-study page with architecture, workflows, and technical highlights.
            </p>
          </motion.section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
                    <p className="text-sm text-cyan-700 mt-1">{project.subtitle}</p>
                  </div>
                  {project.featured ? (
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-semibold">Featured</span>
                  ) : null}
                </div>

                <p className="text-slate-600 mt-4 leading-relaxed">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
                  >
                    Open Project Page
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-cyan-500 hover:text-cyan-700 transition-colors"
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
