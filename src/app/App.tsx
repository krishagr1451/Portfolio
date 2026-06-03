import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import logo from "../assets/46a5b19d189626a606e954cf6435ae16ff86fc69.png";
import ProjectsPage from "./pages/ProjectsPage";
import CarePathCentralPage from "./pages/CarePathCentralPage";
import SEProjectPage from "./pages/SEProjectPage";
import DBMSProjectPage from "./pages/DBMSProjectPage";
import MarketProjectPage from "./pages/MarketProjectPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const pathname = window.location.pathname;
  if (pathname === "/projects") {
    return <ProjectsPage />;
  }

  if (pathname === "/projects/carepath-central") {
    return <CarePathCentralPage />;
  }

  if (pathname === "/projects/se-project") {
    return <SEProjectPage />;
  }

  if (pathname === "/projects/dbms-project") {
    return <DBMSProjectPage />;
  }

  if (pathname === "/projects/market") {
    return <MarketProjectPage />;
  }

  if (pathname === "/about") {
    return <AboutPage />;
  }

  if (pathname === "/skills") {
    return <SkillsPage />;
  }

  if (pathname === "/contact") {
    return <ContactPage />;
  }

  const sectionViewport = { once: true, amount: 0.25 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  if (pathname === "/") {
    return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white h-24 sm:h-28 lg:h-[141px] w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 shadow-md relative overflow-hidden border-b-2 border-slate-100"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-50/40 via-blue-50/40 to-cyan-50/40"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        {/* Animated accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        />

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
          className="flex items-center z-10 cursor-pointer"
        >
          <img src={logo} alt="Krish Agrawal Logo" className="h-16 sm:h-20 lg:h-28 drop-shadow-md" />
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden md:flex gap-8 lg:gap-10 z-10"
        >
          {[
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Skills", href: "/skills" },
            { label: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-base font-semibold text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer relative group"
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated dot indicator */}
              <motion.span
                className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full opacity-0"
                whileHover={{ opacity: 1, scale: [0, 1.2, 1] }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-10 sm:py-16 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 sm:top-20 right-4 sm:right-20 w-56 h-56 sm:w-72 sm:h-72 bg-cyan-200 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-8 sm:bottom-20 left-0 sm:left-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
          {/* Left Side - Profile Circle */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-3 sm:-inset-5 rounded-full border border-cyan-300/30 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />

              {/* Main profile circle */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: [0, 1, -1, 0] }}
                transition={{ duration: 0.3 }}
                className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[510px] lg:h-[510px] rounded-full bg-gradient-to-br from-slate-800 via-cyan-900 to-blue-900 flex items-center justify-center overflow-hidden shadow-2xl relative border-4 border-cyan-100"
              >
                {/* Subtle animated glow */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    rotate: 360,
                  }}
                  transition={{
                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20"
                />
                
                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-300 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                    }}
                    animate={{
                      x: [0, Math.cos((i * Math.PI * 2) / 8) * 145],
                      y: [0, Math.sin((i * Math.PI * 2) / 8) * 145],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
                
                {/* Profile placeholder */}
                <div className="z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-[90px] sm:text-[120px] lg:text-[140px] font-bold bg-gradient-to-br from-cyan-300 via-blue-200 to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl"
                  >
                    KA
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-cyan-100/90 text-lg tracking-wider font-light"
                  >
                  
                  </motion.p>
                </div>
              </motion.div>

              {/* Decorative elements with animation */}
              <motion.div 
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-400 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="space-y-8"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50"
              />
              <motion.h2 
                className="text-lg font-medium text-cyan-600 tracking-wide"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                HELLO, I'M
              </motion.h2>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900"
                whileHover={{ 
                  scale: 1.02,
                  color: "#0891b2",
                }}
                transition={{ duration: 0.3 }}
              >
                Krish Agrawal
              </motion.h1>
              <motion.p
                className="text-2xl text-slate-600 font-light"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                Computer Science Student & UI/UX Designer
              </motion.p>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a Computer Science student at Sardar Patel Institute of Technology with a passion for creating intelligent web applications. Currently pursuing a minor in UI/UX Design from Pearl Academy, I blend technical expertise with design thinking.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Specializing in full-stack development with React, Node.js, and Flask, alongside expertise in data-driven and database applications. I create solutions that are both functional and user-friendly.
              </p>
            </motion.div>

            {/* Stats/Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6">
              {[
                { number: "8.4", label: "CGPA" },
                { number: "2+", label: "Major Projects" },
                { number: "2027", label: "Expected Graduation" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)",
                  }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-50 to-cyan-50/30 border border-slate-200/50 cursor-default transition-all"
                >
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                    animate={{ opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                View My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
              >
                <motion.span
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 1.4 }}
                >
                  <Download className="w-5 h-5" />
                </motion.span>
                Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-2">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/krishagr1451" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/krish-agrawal-073a08304" },
                { icon: Mail, label: "Email", href: "mailto:krish.agrawal23@spit.ac.in" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ y: -3, scale: 1.1, borderColor: "#06b6d4", color: "#0891b2" }}
                  className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        className="h-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 origin-left"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
        />
      </motion.div>
    </div>
    );
  }

  return <NotFoundPage />;
}