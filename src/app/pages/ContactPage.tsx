import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import logo from "../../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100">
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-3 group">
            <img src={logo} alt="Krish Agrawal Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">Portfolio</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Projects</a>
            <a href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Home</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-400 font-semibold">Contact</p>
              <h1 className="text-4xl font-bold text-white">Contact</h1>
              <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">I'd love to hear about opportunities, collaborations, or questions.</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Best way to reach me</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Send a short note with the project goal, timeline, and what kind of help you need. I reply fastest to direct, specific messages.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Mail, title: "Email", text: "For internships and project inquiries." },
              { icon: Github, title: "GitHub", text: "For code, repositories, and technical context." },
              { icon: Linkedin, title: "LinkedIn", text: "For professional networking and referrals." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">Email</h2>
              <a href="mailto:krish.agrawal23@spit.ac.in" className="inline-flex items-center gap-2 mt-3 text-cyan-300 font-medium">
                <Mail className="w-4 h-4" /> krish.agrawal23@spit.ac.in
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">Message</h2>
              <p className="mt-3 text-zinc-300">You can also reach out via LinkedIn or GitHub for project inquiries and collaborations.</p>

              <form className="mt-4 space-y-3">
                <motion.input whileFocus={{ scale: 1.01 }} className="w-full border border-white/10 bg-black/30 text-zinc-100 rounded-md px-3 py-2 placeholder:text-zinc-500" placeholder="Your name" />
                <motion.input whileFocus={{ scale: 1.01 }} className="w-full border border-white/10 bg-black/30 text-zinc-100 rounded-md px-3 py-2 placeholder:text-zinc-500" placeholder="Your email" />
                <motion.textarea whileFocus={{ scale: 1.01 }} className="w-full border border-white/10 bg-black/30 text-zinc-100 rounded-md px-3 py-2 h-28 placeholder:text-zinc-500" placeholder="Message" />
                <motion.button whileHover={{ scale: 1.03 }} className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md">Send (demo)</motion.button>
              </form>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
