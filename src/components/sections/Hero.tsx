import { personalInfo } from "../../data/portfolio";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: -50, rotateZ: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated 3D background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: "rgba(197, 0, 60, 0.2)" }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: "rgba(243, 230, 0, 0.15)" }}
          animate={{
            y: [0, 60, 0],
            x: [0, -40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: "rgba(85, 234, 212, 0.15)" }}
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 py-16 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6 inline-block" variants={floatingVariants}>
          <motion.div
            className="px-4 py-2 rounded-full border-2 border-red-600 bg-black/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "#f3e600" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-yellow-400 text-sm font-semibold">👋 Welcome to my portfolio</span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-black mb-6"
          variants={itemVariants}
          style={{
            background: "linear-gradient(135deg, #f3e600 0%, #c5003c 50%, #55ead4 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Hi, I'm {personalInfo.name}
        </motion.h1>

        <motion.p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
          Full-Stack Developer | AI Enthusiast | System Architecture Specialist
        </motion.p>

        <motion.p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto" variants={itemVariants}>
          MSCS Student @ Northeastern | ex-SDE1 @ Zevvo | Passionate About AI, Full-Stack Development & Scalable Systems | RVCE '23
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-6 mb-12" variants={containerVariants}>
          {[
            { href: "https://github.com/karthik-b-2001", label: "GitHub", color: "from-red-600 to-red-700 hover:from-red-500 hover:to-red-600" },
            { href: personalInfo.linkedin, label: "LinkedIn", color: "from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500" },
            { href: `mailto:${personalInfo.email}`, label: "Email", color: "from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500" },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`relative px-6 py-3 font-semibold rounded-lg flex items-center space-x-2 group text-black`}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${btn.color} rounded-lg`}
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, boxShadow: "0 0 20px rgba(197, 0, 60, 0.6)" }}
              />
              <span className="relative">
                {btn.label === "GitHub" && <Github size={20} />}
                {btn.label === "LinkedIn" && <Linkedin size={20} />}
                {btn.label === "Email" && <Mail size={20} />}
              </span>
              <span className="relative">{btn.label}</span>
              <motion.span
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Tech stack teaser */}
        <motion.div
          className="inline-block px-8 py-6 rounded-2xl border-2 border-red-600 bg-black/30 backdrop-blur-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05, borderColor: "#f3e600" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-gray-300 mb-4">Tech Stack Expertise:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["React", "Node.js", "TypeScript", "AWS", "Python", "System Design"].map((tech, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-red-600/20 to-yellow-400/20 border border-red-500/50 text-red-300"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(197, 0, 60, 0.3)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
