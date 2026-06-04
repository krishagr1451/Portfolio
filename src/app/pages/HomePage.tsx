import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Code2, Github, Layers3, Mail, Sparkles } from "lucide-react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";
import { projects } from "../data/projects";

const coreCapabilities = [
  {
    title: "Full-stack delivery",
    copy: "I build from UI to API with TypeScript, React, Vite, Next.js, Flask, Node.js, and database-driven flows.",
    icon: Code2,
  },
  {
    title: "Product-focused UX",
    copy: "I care about hierarchy, motion, feedback, and clarity so interfaces feel polished, not just functional.",
    icon: Sparkles,
  },
  {
    title: "Systems thinking",
    copy: "I structure pages, tokens, and components so the portfolio reads like a real product, not a slideshow.",
    icon: Layers3,
  },
];

const workflow = [
  {
    step: "01",
    title: "Discover",
    copy: "Understand the problem, map users, and identify what the interface should actually help them do.",
  },
  {
    step: "02",
    title: "Design",
    copy: "Set the visual language, motion, and layout rhythm before the first component is written.",
  },
  {
    step: "03",
    title: "Build",
    copy: "Ship the experience with reusable components, responsive rules, and clean interactions.",
  },
];

export default function HomePage() {
  const featuredProjects = [...projects].sort((left, right) => Number(right.featured) - Number(left.featured));
  const highlightedProject = featuredProjects[0];

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.24),transparent_25%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_22%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.85),transparent_40%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 w-auto sm:h-12" />
            <div>
              <div className="text-sm font-semibold text-white">Krish Agrawal</div>
              <div className="text-xs uppercase tracking-[0.24em] text-zinc-400">Portfolio</div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              ["Projects", "/projects"],
              ["About", "/about"],
              ["Skills", "/skills"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-10 lg:px-16 lg:pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="space-y-7">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-200">Available for internships</span>
              <span>Computer Science student</span>
              <span>UI/UX + full-stack focus</span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                I design and build portfolios, products, and interfaces that feel premium.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                I’m Krish Agrawal, a SPIT CS student blending engineering, interaction design, and product thinking into polished web experiences.
                This portfolio is built to show the work clearly and make the motion feel intentional.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={`/projects/${highlightedProject.slug}`} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02] hover:bg-cyan-400">
                View Featured Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-400/50 hover:bg-white/5 hover:text-white">
                Contact Me
              </a>
              <a href="https://github.com/krishagr1451" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Projects", value: "4+" },
                { label: "Stack", value: "React / TS" },
                { label: "Focus", value: "UX + systems" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="border-b border-white/10 bg-white/[0.03] px-6 py-4">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>Featured project spotlight</span>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200">Live build</span>
                </div>
              </div>
              <div className="space-y-6 p-6 sm:p-8">
                <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.35),transparent_30%),linear-gradient(180deg,#0f172a_0%,#030712_100%)] p-5">
                  <div className="flex h-full flex-col justify-between">
                    <div className="space-y-3">
                      <div className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-zinc-300">
                        {highlightedProject.subtitle}
                      </div>
                      <h2 className="max-w-md text-3xl font-semibold text-white sm:text-4xl">{highlightedProject.title}</h2>
                      <p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">{highlightedProject.summary}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                        <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Stack</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {highlightedProject.stack.slice(0, 4).map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                        <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Primary links</div>
                        <div className="mt-2 flex flex-col gap-2 text-sm">
                          <a href={`/projects/${highlightedProject.slug}`} className="inline-flex items-center gap-2 text-cyan-300 transition-colors hover:text-cyan-200">
                            Open case study <ArrowUpRight className="h-4 w-4" />
                          </a>
                          {highlightedProject.links.live ? (
                            <a href={highlightedProject.links.live} className="inline-flex items-center gap-2 text-zinc-200 transition-colors hover:text-white">
                              Live route <ArrowUpRight className="h-4 w-4" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { title: "Fast UI", copy: "Intentional motion and polished hierarchy." },
                    { title: "Real apps", copy: "Projects backed by actual routes and data." },
                    { title: "Clean code", copy: "Reusable components and consistent tokens." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-zinc-400">{item.copy}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {coreCapabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.copy}</p>
              </motion.article>
            );
          })}
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Selected work</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Projects that show range and polish</h2>
            </div>
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white">
              See all projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{project.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  {project.featured ? (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-200">Featured</span>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <a href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200">
                    Open case study <ArrowUpRight className="h-4 w-4" />
                  </a>
                  {project.links.live ? (
                    <a href={project.links.live} className="text-sm text-zinc-400 transition-colors hover:text-white">
                      Live version
                    </a>
                  ) : (
                    <a href={project.links.repo ?? "/projects"} className="text-sm text-zinc-400 transition-colors hover:text-white">
                      Source / details
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">My process</p>
            <div className="mt-5 space-y-4">
              {workflow.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold text-cyan-200">{item.step}</div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-300">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.95),rgba(2,6,23,0.9))] p-6 backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-zinc-400">Let’s build</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Open to strong internships and collaboration.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
              If you want a portfolio that feels like a real product, I can help turn the idea into a clear, premium experience with the right balance of motion,
              story, and technical execution.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-cyan-400">
                <Mail className="h-4 w-4" />
                Contact
              </a>
              <a href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-400/50 hover:text-white hover:bg-white/5">
                Browse projects
              </a>
              <a href="https://github.com/krishagr1451" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.article>
        </section>
      </main>
    </div>
  );
}
