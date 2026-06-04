import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

const screenshots = [
  {
    title: "Cuisine Compass Repo",
    caption: "Main repository preview for the DBMS restaurant reservation project.",
    image: "https://opengraph.githubassets.com/11/krishagr1451/DBMS-Project",
  },
  {
    title: "Landing Visual Asset",
    caption: "Landing page illustration used in the Cuisine Compass interface.",
    image: "https://raw.githubusercontent.com/krishagr1451/DBMS-Project/main/assets/img/landing-page-img.svg",
  },
  {
    title: "Brand Logo Asset",
    caption: "Project logo used in navigation and identity across pages.",
    image: "https://raw.githubusercontent.com/krishagr1451/DBMS-Project/main/assets/img/logo.svg",
  },
];

export default function DBMSProjectPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100">
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </a>
            <a href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Home</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 space-y-10">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-cyan-400 font-semibold">Project Case Study</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Cuisine Compass</h1>
          <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
            A PHP + MySQL database project focused on restaurant discovery and table reservation workflows with filtered search criteria.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://github.com/krishagr1451/DBMS-Project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-3 text-sm font-semibold hover:from-cyan-500 hover:to-blue-500 transition-colors">
              View Repository
              <Github className="h-4 w-4" />
            </a>
          </div>
        </motion.section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Highlights</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 leading-relaxed">
            <li>Filter-driven search for restaurants by location, cuisine, budget, ambience, and rating.</li>
            <li>Reservation flow that captures guest count, date, and time and confirms bookings.</li>
            <li>Session-based user journey across login, details capture, search, and booking confirmation pages.</li>
            <li>Classic web stack with PHP templates, MySQL queries, and custom CSS styling.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Project Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {screenshots.map((shot, index) => (
              <motion.article
                key={shot.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-sm"
              >
                <ImageWithFallback src={shot.image} alt={shot.title} className="w-full h-52 object-contain bg-black/30" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-semibold text-white">{shot.title}</h3>
                  <p className="text-sm text-zinc-300 mt-1">{shot.caption}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <a href="https://github.com/krishagr1451/DBMS-Project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white font-medium">
            Explore full repo details
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>
      </main>
    </div>
  );
}
