import { FileDown, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Resume = () => {
  const googleDriveFileId = '1TInybyU2_BC14KiIcnf9dNZURNakzWEZ';
  const embedUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${googleDriveFileId}/view`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="resume" className="py-24 relative">
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span
              style={{
                background: "linear-gradient(135deg, #f3e600 0%, #c5003c 50%, #55ead4 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Resume
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack engineer with 2 years of experience building scalable systems and delivering cutting-edge solutions.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-6 mb-12" variants={containerVariants}>
          {[
            { href: downloadUrl, label: "Download Resume", icon: FileDown, color: "from-red-600 to-red-700 hover:from-red-500 hover:to-red-600" },
            { href: viewUrl, label: "Open in new Tab", icon: ExternalLink, color: "from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500", newTab: true },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target={btn.newTab ? "_blank" : undefined}
              rel={btn.newTab ? "noopener noreferrer" : undefined}
              className={`relative px-6 py-3 font-semibold rounded-lg flex items-center space-x-2 group text-white`}
              variants={buttonVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${btn.color} rounded-lg`}
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, boxShadow: "0 0 20px rgba(197, 0, 60, 0.6)" }}
              />
              <span className="relative flex items-center space-x-2">
                <btn.icon size={20} />
                <span>{btn.label}</span>
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Preview */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="card-modern rounded-2xl border-2 border-yellow-400/40 hover:border-red-600 overflow-hidden perspective"
            style={{ perspective: "1000px" }}
            whileHover={{
              rotateY: 2,
              rotateX: -2,
              z: 10,
              boxShadow: "0 20px 40px rgba(243, 230, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* PDF Embed for Desktop */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <iframe
                src={embedUrl}
                className="w-full h-[900px] border-0"
                title="Resume Preview"
                allow="autoplay"
              />
            </motion.div>

            {/* Mobile Fallback */}
            <motion.div
              className="md:hidden p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                className="bg-black rounded-lg p-6 border-2 border-red-600"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-600"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FileDown size={32} className="text-red-600" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">Resume Preview</h3>
                <p className="text-gray-400 mb-6">
                  For the best viewing experience on mobile, please download the PDF or open it in Google Drive.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { href: downloadUrl, label: "Download PDF", icon: FileDown },
                    { href: viewUrl, label: "Open in new Tab", icon: ExternalLink },
                  ].map((btn, i) => (
                    <motion.a
                      key={i}
                      href={btn.href}
                      target={btn.label === "Open in new Tab" ? "_blank" : undefined}
                      rel={btn.label === "Open in new Tab" ? "noopener noreferrer" : undefined}
                      className={`relative px-6 py-3 font-semibold rounded-lg flex items-center justify-center space-x-2 text-white ${
                        i === 0
                          ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600"
                          : "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <btn.icon size={18} />
                      <span>{btn.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;