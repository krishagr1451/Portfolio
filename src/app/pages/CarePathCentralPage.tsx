import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, ShieldCheck, Stethoscope, FileSearch, Bot, FlaskConical } from "lucide-react";
import { getProjectBySlug } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";
import homepageScreenshot from "../../assets/projects/carepath/homepage.png";
import loginScreenshot from "../../assets/projects/carepath/login.png";
import landingScreenshot from "../../assets/projects/carepath/landing.png";

const carePath = getProjectBySlug("carepath-central");

const featureCards = [
  {
    title: "Role-Based Medical Access",
    text: "Separate doctor and patient experiences with secure route-level and data-level access control.",
    icon: ShieldCheck,
  },
  {
    title: "Clinical Workflow Coverage",
    text: "Supports diagnoses, prescriptions, lab reports, surgeries, and vaccination entries in doctor workflows.",
    icon: Stethoscope,
  },
  {
    title: "AI Document Scanner",
    text: "Uploaded records are processed through Gemini-powered OCR into structured medical form data.",
    icon: FileSearch,
  },
  {
    title: "Record-Aware Medical Chatbot",
    text: "Chat endpoints use patient datasets for contextual responses, with optional Telegram alert integrations.",
    icon: Bot,
  },
];

const siteScreens = [
  {
    title: "Homepage",
    route: "/",
    image: homepageScreenshot,
  },
  {
    title: "Login Page",
    route: "/login",
    image: loginScreenshot,
  },
  {
    title: "Landing Page",
    route: "/landing",
    image: landingScreenshot,
  },
];

export default function CarePathCentralPage() {
  if (!carePath) {
    return (
      <div className="min-h-screen grid place-items-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Project Not Found</h1>
          <a href="/projects" className="text-cyan-700 hover:text-cyan-800 mt-4 inline-block">
            Back to projects
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_10%,#cffafe_0%,transparent_35%),radial-gradient(circle_at_80%_15%,#dbeafe_0%,transparent_30%),linear-gradient(120deg,#f8fafc_0%,#ffffff_45%,#ecfeff_100%)] text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-cyan-700 transition-colors px-3 py-2 rounded-lg hover:bg-cyan-50"
            >
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </a>
            <a
              href="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Home
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 space-y-14">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-5"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-cyan-700 font-semibold">Healthcare Platform Case Study</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">{carePath.title}</h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-4xl leading-relaxed">{carePath.summary}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {carePath.links.live ? (
              <a
                href={carePath.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Open Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 text-slate-700 px-5 py-3 text-sm font-semibold hover:border-cyan-500 hover:text-cyan-700 transition-colors"
            >
              Explore More Projects
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.14 + index * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-cyan-100 text-cyan-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold mt-4 text-slate-900">{feature.title}</h2>
                <p className="text-slate-600 mt-2 leading-relaxed">{feature.text}</p>
              </motion.article>
            );
          })}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45 }}
          className="space-y-5"
        >
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Site Screens</h3>
            <p className="text-slate-600 mt-2">Real captures from the running CarePath app including homepage, login, and landing routes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {siteScreens.map((screen, index) => (
              <motion.article
                key={screen.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.06, duration: 0.35 }}
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                <ImageWithFallback
                  src={screen.image}
                  alt={`CarePath ${screen.title}`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h4 className="text-base font-semibold text-slate-900">{screen.title}</h4>
                  <p className="text-sm text-cyan-700 mt-1">Route: {screen.route}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Architecture Snapshot</h3>
            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li>Frontend in React + TypeScript handles role-based routing, dashboards, forms, and protected views.</li>
              <li>Supabase provides auth, row-level security, table storage, and file storage policies by user role.</li>
              <li>Flask backend serves health checks, patient dataset retrieval, AI medical chat, and notification endpoints.</li>
              <li>OCR pipeline extracts structured medical JSON from uploaded documents via Google Gemini integration.</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.4 }}
            className="lg:col-span-2 rounded-2xl border border-cyan-200 bg-cyan-50/80 p-6 sm:p-8"
          >
            <div className="inline-flex p-2.5 rounded-xl bg-cyan-200 text-cyan-900">
              <FlaskConical className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold mt-4 text-slate-900">Quality & Validation</h3>
            <p className="text-slate-700 mt-3 leading-relaxed">Documented with 129 test conditions and reported all-pass status across security, workflows, session handling, policies, and edge-case behavior.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Vitest", "Testing Library", "MSW", "RLS Policies", "RBAC"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-white text-cyan-800 text-xs font-semibold border border-cyan-200">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900">Typical User Flow</h3>
          <ol className="mt-4 space-y-3 text-slate-700 leading-relaxed list-decimal list-inside">
            <li>User signs in and gets routed by role.</li>
            <li>Doctor creates and updates patient records.</li>
            <li>Patient views own history, reports, and records.</li>
            <li>Uploaded documents are AI-processed into structured data.</li>
            <li>Chatbot answers patient-specific medical record questions.</li>
          </ol>
        </motion.section>
      </main>
    </div>
  );
}
