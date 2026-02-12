import { workExperience, internships } from '../../data/portfolio';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = ({ experience, index }: { experience: typeof workExperience[0]; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: 50,
      z: -100,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      z: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="card-modern rounded-2xl border-2 border-red-600 hover:border-yellow-400 perspective"
      style={{ perspective: "1000px" }}
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        z: 20,
        boxShadow: "0 20px 40px rgba(197, 0, 60, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div>
          <motion.div
            className="flex items-center space-x-2 mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              <Briefcase size={20} className="text-red-500" />
            </motion.div>
            <h3 className="text-2xl font-bold gradient-text">{experience.title}</h3>
          </motion.div>
          <p className="text-gray-300 text-lg font-semibold">{experience.company}</p>
        </div>
        <motion.div
          className="mt-4 md:mt-0 md:text-right space-y-2"
          initial={{ x: 20, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 justify-end">
            <MapPin size={16} className="text-red-500" />
            <p className="text-gray-300">{experience.location}</p>
          </div>
          <div className="flex items-center space-x-2 justify-end">
            <Calendar size={16} className="text-red-500" />
            <p className="text-gray-400">{experience.duration}</p>
          </div>
        </motion.div>
      </div>
      <ul className="space-y-3 mb-4">
        {experience.points.map((point, idx) => (
          <motion.li
            key={idx}
            className="text-gray-300 flex items-start"
            initial={{ x: -10, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
            transition={{ delay: index * 0.1 + 0.4 + idx * 0.05, duration: 0.5 }}
          >
            <span className="text-red-500 mr-3 font-bold">▸</span>
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
      {experience.techStack && (
        <motion.div
          className="mt-6 pt-4 border-t border-red-600/20"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-red-500 mb-3 uppercase tracking-wide">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                className="tech-badge text-xs"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(197, 0, 60, 0.3)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const Experience = () => {
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
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey building scalable systems and delivering impactful solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <motion.h3
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 flex items-center"
            >
              <span className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></span>
              Work Experience
            </motion.h3>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 flex items-center"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
              Internships & Early Career
            </motion.h3>
            <div className="space-y-6">
              {internships.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;