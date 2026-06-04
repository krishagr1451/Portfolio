import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";
import marketLogin from "../../assets/projects/market/login.png";
import marketDashboard from "../../assets/projects/market/dashboard.png";
import marketReports from "../../assets/projects/market/reports.png";

const screenshots = [
  {
    title: "Login Screen",
    caption: "Captured from the deployed app before authentication.",
    image: marketLogin,
  },
  {
    title: "Dashboard (After Login)",
    caption: "Authenticated dashboard view after signing in as admin.",
    image: marketDashboard,
  },
  {
    title: "Reports (After Login)",
    caption: "Authenticated reports section from the live deployment.",
    image: marketReports,
  },
];

export default function MarketProjectPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Grain Merchant Manager</h1>
          <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
            A Tally-style business management web app for grain merchants with protected auth, transaction ledgering, analytics cards, and due-payment tracking.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://market-marb.onrender.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-3 text-sm font-semibold hover:from-cyan-500 hover:to-blue-500 transition-colors">
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://github.com/krishagr1451/Market" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 text-zinc-200 px-5 py-3 text-sm font-semibold hover:border-cyan-500/50 hover:text-white transition-colors">
              View Repository
              <Github className="h-4 w-4" />
            </a>
          </div>
        </motion.section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Highlights</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 leading-relaxed">
            <li>Login authentication with protected pages and APIs.</li>
            <li>Transaction lifecycle support: add, edit, and delete grain entries.</li>
            <li>Ledger fields include seller, buyer, town, grain type, price, quantity, payment period, and commission percent (aadat).</li>
            <li>Extra operational fields: payment status, invoice number, and notes.</li>
            <li>Auto-calculated metrics: gross amount, commission amount, net amount, and due date.</li>
            <li>Dashboard summary cards for total transactions, gross, commission, pending payments, and due-in-7-days.</li>
            <li>Filtering tools for text search, date ranges, and payment status.</li>
            <li>Mobile responsive UI for daily business usage across devices.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Tech Stack & Data</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 leading-relaxed">
            <li>Backend: Node.js + Express.</li>
            <li>Database: SQLite file storage (`data/grain_business.db`).</li>
            <li>Frontend: HTML, CSS, and JavaScript with responsive layouts.</li>
            <li>Runtime database mode can be switched between SQLite and Supabase/Postgres.</li>
            <li>Migration scripts are included for Supabase schema setup and data transfer.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Core API Endpoints</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 leading-relaxed">
            <li>GET /api/transactions</li>
            <li>POST /api/transactions</li>
            <li>PUT /api/transactions/:id</li>
            <li>DELETE /api/transactions/:id</li>
            <li>GET /api/summary</li>
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
                <ImageWithFallback src={shot.image} alt={shot.title} className="w-full h-52 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-semibold text-white">{shot.title}</h3>
                  <p className="text-sm text-zinc-300 mt-1">{shot.caption}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <a href="https://github.com/krishagr1451/Market" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white font-medium">
            Explore full repo details
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>
      </main>
    </div>
  );
}
