import React, { useState } from "react";
import { Mail, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../../data/portfolio";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated cyberpunk background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: "rgba(197, 0, 60, 0.2)" }}
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: "rgba(243, 230, 0, 0.15)" }}
          animate={{
            y: [0, 60, 0],
            x: [0, -40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ background: "rgba(85, 234, 212, 0.1)" }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -40, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div className="inline-block mb-4" whileHover={{ scale: 1.05 }}>
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-cyan-400 rounded-full blur opacity-75"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative px-8 py-3 bg-black rounded-full border-2 border-red-600">
                <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm flex items-center space-x-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
                    <Zap size={16} />
                  </motion.div>
                  <span>Let's Connect</span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6"
            variants={itemVariants}
            style={{
              background: "linear-gradient(135deg, #f3e600 0%, #c5003c 50%, #55ead4 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to Create?
          </motion.h2>

          <motion.p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto" variants={itemVariants}>
            I'm always excited about new projects and collaborations.
          </motion.p>

          <motion.p className="text-lg text-red-500/80 font-semibold max-w-2xl mx-auto mb-12" variants={itemVariants}>
            Drop me a line and let's build something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div className="max-w-md mx-auto" variants={itemVariants}>
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
          >
            {/* Animated glow background */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-red-600 via-yellow-400 to-cyan-400 rounded-2xl blur"
              animate={{
                opacity: isHovered ? 1 : 0.6,
                boxShadow: isHovered
                  ? "0 0 40px rgba(197, 0, 60, 0.8)"
                  : "0 0 20px rgba(197, 0, 60, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Card */}
            <motion.div
              className="relative bg-black rounded-2xl p-8 border-2 border-red-600 group-hover:border-yellow-400 transition-all duration-300"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Inner glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/10 to-yellow-400/10"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 text-center space-y-6">
                {/* Animated icon */}
                <motion.div
                  className="flex justify-center"
                  animate={{ y: isHovered ? -5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="relative w-20 h-20"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full blur opacity-75"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 bg-black rounded-full border-2 border-red-600 flex items-center justify-center group-hover:border-yellow-400 transition-all">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Mail size={32} className="text-red-600 group-hover:text-yellow-400 transition-colors" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Email Me</h3>
                  <p className="text-gray-400 text-sm mb-6">The fastest way to reach out</p>
                </motion.div>

                {/* Email Button with advanced animation */}
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="relative inline-flex items-center justify-center w-full group/btn"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-400 to-cyan-400 rounded-lg blur"
                    animate={{
                      opacity: isHovered ? 1 : 0.5,
                      blur: isHovered ? 12 : 6,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Button content */}
                  <motion.div
                    className="relative w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg flex items-center justify-center space-x-3 font-bold text-white text-lg group-hover/btn:shadow-[0_0_40px_rgba(197,0,60,0.8)] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: isHovered ? 20 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Mail size={22} />
                    </motion.div>
                    <span>{personalInfo.email}</span>
                    <motion.div
                      animate={{
                        x: isHovered ? 5 : 0,
                        y: isHovered ? -2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send size={20} />
                    </motion.div>
                  </motion.div>
                </motion.a>

                {/* Divider */}
                <motion.div
                  className="flex items-center space-x-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.div
                    className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />
                  <span className="text-red-600/60 text-sm font-medium">OR</span>
                  <motion.div
                    className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="pt-4 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="text-gray-300 text-sm mb-3">Connect on:</div>
                  <div className="flex gap-3">
                    {[
                      { href: personalInfo.linkedin, label: "LinkedIn", color: "from-red-600 to-red-700" },
                      { href: "https://github.com/karthik-b-2001", label: "GitHub", color: "from-yellow-500 to-yellow-600" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 relative group/social"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r rounded-lg blur"
                          style={{
                            background:
                              i === 0
                                ? "linear-gradient(135deg, #c5003c, #f3e600)"
                                : "linear-gradient(135deg, #f3e600, #55ead4)",
                          }}
                          animate={{ opacity: isHovered ? 0.8 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="relative px-4 py-3 bg-black border-2 border-red-600 hover:border-yellow-400 rounded-lg text-red-600 hover:text-yellow-400 font-semibold transition-all duration-300 text-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          {social.label}
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="h-1 w-64 bg-gradient-to-r from-red-600 via-yellow-400 to-cyan-400 rounded-full blur"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
