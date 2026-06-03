import { motion } from "motion/react";
import { Mail } from "lucide-react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-cyan-700 transition-colors px-3 py-2 rounded-lg hover:bg-cyan-50">Projects</a>
            <a href="/" className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100">Home</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-6">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">I'd love to hear about opportunities, collaborations, or questions.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Email</h2>
              <a href="mailto:krish.agrawal23@spit.ac.in" className="inline-flex items-center gap-2 mt-3 text-cyan-700 font-medium">
                <Mail className="w-4 h-4" /> krish.agrawal23@spit.ac.in
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Message</h2>
              <p className="mt-3 text-slate-700">You can also reach out via LinkedIn or GitHub for project inquiries and collaborations.</p>

              <form className="mt-4 space-y-3">
                <motion.input whileFocus={{ scale: 1.01 }} className="w-full border border-slate-200 rounded-md px-3 py-2" placeholder="Your name" />
                <motion.input whileFocus={{ scale: 1.01 }} className="w-full border border-slate-200 rounded-md px-3 py-2" placeholder="Your email" />
                <motion.textarea whileFocus={{ scale: 1.01 }} className="w-full border border-slate-200 rounded-md px-3 py-2 h-28" placeholder="Message" />
                <motion.button whileHover={{ scale: 1.03 }} className="px-4 py-2 bg-cyan-600 text-white rounded-md">Send (demo)</motion.button>
              </form>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
