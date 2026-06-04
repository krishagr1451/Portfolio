import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";
import driveHireHome from "../../assets/projects/drivehire/home.png";
import driveHireLogin from "../../assets/projects/drivehire/login.png";
import driveHireRegister from "../../assets/projects/drivehire/register.png";
import driveHireDashboard from "../../assets/projects/drivehire/dashboard.png";

const screenshots = [
  {
    title: "Homepage",
    caption: "Main landing and service options view for Drive Hire.",
    image: driveHireHome,
  },
  {
    title: "Login Page",
    caption: "Sign-in screen with animated gradient background.",
    image: driveHireLogin,
  },
  {
    title: "Register Page",
    caption: "Account creation flow for onboarding new users.",
    image: driveHireRegister,
  },
  {
    title: "Dashboard",
    caption: "Post-login dashboard and service routing experience.",
    image: driveHireDashboard,
  },
];

export default function SEProjectPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Drive Hire</h1>
          <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
            A full-stack ride-sharing and car rental platform with role-aware flows for booking rides, carpool participation, and fleet browsing.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://se-project-sable.vercel.app/login?error=Configuration" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 text-zinc-200 px-5 py-3 text-sm font-semibold hover:border-cyan-500/50 hover:text-white transition-colors">
              Open Live App
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://github.com/krishagr1451/SE_Project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-3 text-sm font-semibold hover:from-cyan-500 hover:to-blue-500 transition-colors">
              View Repository
              <Github className="h-4 w-4" />
            </a>
          </div>
        </motion.section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Highlights</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 leading-relaxed">
            <li>Uber-style ride booking with vehicle options, fare estimation, and map-assisted location selection.</li>
            <li>Car rental and carpool modules with dedicated pages and booking workflows.</li>
            <li>Authentication-aware routing logic with user role handling and protected navigation flows.</li>
            <li>Full-stack implementation using Next.js, TypeScript, Prisma, and SQLite.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Project Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          <a href="https://github.com/krishagr1451/SE_Project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white font-medium">
            Explore full repo details
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>
      </main>
    </div>
  );
}
