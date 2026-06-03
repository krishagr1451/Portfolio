import { motion } from "motion/react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 grid place-items-center">
      <div className="max-w-2xl w-full px-6 text-center">
        <img src={logo} alt="Logo" className="h-16 mx-auto mb-6" />
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-bold">
          404
        </motion.h1>
        <p className="mt-4 text-lg text-slate-700">Page not found. The link may be incorrect or the page has been moved.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/" className="px-4 py-2 rounded-lg bg-slate-900 text-white">Home</a>
          <a href="/projects" className="px-4 py-2 rounded-lg border border-slate-300">Projects</a>
        </div>
      </div>
    </div>
  );
}
