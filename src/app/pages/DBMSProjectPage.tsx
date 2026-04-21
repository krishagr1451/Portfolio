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
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_8%,#ffedd5_0%,transparent_36%),radial-gradient(circle_at_85%_12%,#ffe4e6_0%,transparent_30%),linear-gradient(135deg,#fff7ed_0%,#ffffff_45%,#fff1f2_100%)] text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-rose-700 transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-rose-700 transition-colors px-3 py-2 rounded-lg hover:bg-rose-50">
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </a>
            <a href="/" className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">Home</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 space-y-10">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-rose-700 font-semibold">Project Case Study</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Cuisine Compass</h1>
          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            A PHP + MySQL database project focused on restaurant discovery and table reservation workflows with filtered search criteria.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://github.com/krishagr1451/DBMS-Project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors">
              View Repository
              <Github className="h-4 w-4" />
            </a>
          </div>
        </motion.section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 space-y-2 text-slate-700 leading-relaxed">
            <li>Filter-driven search for restaurants by location, cuisine, budget, ambience, and rating.</li>
            <li>Reservation flow that captures guest count, date, and time and confirms bookings.</li>
            <li>Session-based user journey across login, details capture, search, and booking confirmation pages.</li>
            <li>Classic web stack with PHP templates, MySQL queries, and custom CSS styling.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {screenshots.map((shot, index) => (
              <motion.article
                key={shot.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                <ImageWithFallback src={shot.image} alt={shot.title} className="w-full h-52 object-contain bg-slate-50" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{shot.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{shot.caption}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <a href="https://github.com/krishagr1451/DBMS-Project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-rose-700 hover:text-rose-800 font-medium">
            Explore full repo details
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>
      </main>
    </div>
  );
}
