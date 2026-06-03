import { motion } from "motion/react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 grid place-items-center">
      <div className="max-w-2xl w-full px-6 text-center">
        <img src={logo} alt="Logo" className="h-16 mx-auto mb-6" />
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 90 }}
          className="text-6xl font-bold"
        >
          404
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-lg text-slate-700">
          Page not found. The link may be incorrect or the page has been moved.
        </motion.p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <motion.a whileHover={{ scale: 1.03 }} href="/" className="px-4 py-2 rounded-lg bg-slate-900 text-white">Home</motion.a>
          <motion.a whileHover={{ scale: 1.03 }} href="/projects" className="px-4 py-2 rounded-lg border border-slate-300">Projects</motion.a>
        </div>
      </div>
    </div>
  );
}
