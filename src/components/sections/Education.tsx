import { education } from '../../data/portfolio';
import { BookOpen, Calendar, MapPin, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            const cardVariants = {
              hidden: {
                opacity: 0,
                rotateX: -90,
                y: 50,
              },
              visible: {
                opacity: 1,
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.15,
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
                className="card-modern rounded-2xl border-2 border-yellow-400/40 hover:border-red-600 mb-6 perspective"
                style={{ perspective: "1000px" }}
                whileHover={{
                  rotateY: 3,
                  rotateX: -3,
                  z: 20,
                  boxShadow: "0 20px 40px rgba(243, 230, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="flex-1">
                    <motion.div
                      className="flex items-center space-x-2 mb-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <BookOpen size={20} className="text-yellow-400" />
                      </motion.div>
                      <h3 className="text-2xl font-bold gradient-text">{edu.school}</h3>
                    </motion.div>
                    <p className="text-gray-300 text-lg font-semibold mb-2">{edu.degree}</p>
                  </div>
                  <motion.div
                    className="mt-4 md:mt-0 md:text-right space-y-2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  >
                    <div className="flex items-center space-x-2 justify-end">
                      <MapPin size={16} className="text-yellow-400" />
                      <p className="text-gray-300">{edu.location}</p>
                    </div>
                    <div className="flex items-center space-x-2 justify-end">
                      <Calendar size={16} className="text-yellow-400" />
                      <p className="text-gray-400">{edu.duration}</p>
                    </div>
                  </motion.div>
                </div>

                {edu.cgpa && (
                  <motion.div
                    className="inline-block px-4 py-2 rounded-lg border border-yellow-400/50 mb-4 bg-yellow-400/10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-yellow-300 font-semibold">
                      GPA: <span className="text-cyan-400">{edu.cgpa}</span>
                    </p>
                  </motion.div>
                )}

                {edu.details && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-yellow-400/20"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                  >
                    <p className="text-sm font-semibold text-yellow-400 mb-3 uppercase tracking-wide flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      Coursework
                    </p>
                    <p className="text-gray-300">{edu.details.join(", ")}</p>
                  </motion.div>
                )}

                {edu.accomplishments && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-yellow-400/20"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
                  >
                    <p className="text-sm font-semibold text-yellow-400 mb-3 uppercase tracking-wide flex items-center">
                      <Trophy size={16} className="mr-2" />
                      Accomplishments
                    </p>
                    <ul className="space-y-2">
                      {edu.accomplishments.map((accomplishment, idx) => (
                        <motion.li
                          key={idx}
                          className="text-gray-300 flex items-start"
                          initial={{ x: -10, opacity: 0 }}
                          animate={inView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                          transition={{ delay: index * 0.15 + 0.7 + idx * 0.05, duration: 0.5 }}
                        >
                          <span className="text-yellow-400 mr-3 font-bold">✓</span>
                          <span>{accomplishment}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;