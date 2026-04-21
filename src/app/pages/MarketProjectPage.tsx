import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

const screenshots = [
  {
    title: "Market Repository",
    caption: "Grain Merchant Manager repository preview.",
    image: "https://opengraph.githubassets.com/21/krishagr1451/Market",
  },
  {
    title: "Dashboard UI",
    caption: "Dashboard route and summary layout for transactions and due payments.",
    image: "https://opengraph.githubassets.com/22/krishagr1451/Market/blob/main/public/pages/dashboard.html",
  },
  {
    title: "Reports Module",
    caption: "Reports section including statement and analytics views.",
    image: "https://opengraph.githubassets.com/23/krishagr1451/Market/blob/main/public/pages/reports.html",
  },
];

export default function MarketProjectPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_8%,#d1fae5_0%,transparent_36%),radial-gradient(circle_at_85%_12%,#ecfccb_0%,transparent_30%),linear-gradient(135deg,#f0fdf4_0%,#ffffff_45%,#fffbeb_100%)] text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors px-3 py-2 rounded-lg hover:bg-emerald-50">
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </a>
            <a href="/" className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">Home</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 space-y-10">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-emerald-700 font-semibold">Project Case Study</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Grain Merchant Manager</h1>
          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            A Tally-style grain business manager with role-based auth, transaction ledgering, reports, receipts, and due-payment tracking.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://github.com/krishagr1451/Market" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors">
              View Repository
              <Github className="h-4 w-4" />
            </a>
          </div>
        </motion.section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 space-y-2 text-slate-700 leading-relaxed">
            <li>Protected pages and APIs with cookie-based auth and role-aware access controls.</li>
            <li>Ledger operations with add/edit/delete, payment tracking, and outstanding views.</li>
            <li>Reporting module with party statements, trend metrics, and export-oriented flows.</li>
            <li>Node.js + Express backend with SQLite and optional Supabase/Postgres migration support.</li>
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
                <ImageWithFallback src={shot.image} alt={shot.title} className="w-full h-52 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{shot.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{shot.caption}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <a href="https://github.com/krishagr1451/Market" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 font-medium">
            Explore full repo details
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>
      </main>
    </div>
  );
}
