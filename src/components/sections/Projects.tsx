import { projects } from '../../data/portfolio';
import { Zap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pioneering solutions that push the boundaries of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            const cardVariants = {
              hidden: {
                opacity: 0,
                rotateY: 90,
                z: -100,
              },
              visible: {
                opacity: 1,
                rotateY: 0,
                z: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: "easeOut",
                },
              },
            };

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="card-modern rounded-2xl border-2 border-red-600 hover:border-cyan-400 group perspective"
                style={{ perspective: "1000px" }}
                whileHover={{
                  rotateY: -8,
                  rotateX: 4,
                  z: 30,
                  boxShadow: "0 20px 40px rgba(197, 0, 60, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="flex items-start justify-between mb-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                  transition={{ delay: index * 0.12 + 0.2, duration: 0.6 }}
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0], y: [0, -5, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <Zap size={24} className="text-red-500 group-hover:text-yellow-400 transition-colors" />
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-1 text-gray-400 text-sm"
                    initial={{ x: 20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.12 + 0.3, duration: 0.5 }}
                  >
                    <Calendar size={14} />
                    <span>{project.duration}</span>
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold gradient-text mb-4 group-hover:text-yellow-400 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.12 + 0.3, duration: 0.6 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.12 + 0.4, duration: 0.6 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="pt-4 border-t border-red-600/20 group-hover:border-yellow-400/50 transition-colors"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    delay: index * 0.12 + 0.5,
                    duration: 0.8,
                    origin: "left",
                  }}
                >
                  <motion.div
                    className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-cyan-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;