import { personalInfo } from "../../data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Hi, I'm {personalInfo.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Passionate about {personalInfo.areasOfInterest.join(", ")}{" "}
          
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Incoming MSCS Student @ Northeastern | ex-SDE1 @ Zevvo | ex-Conneqt
          Digital | Passionate About AI, Full-Stack & Scalable Systems | RVCE
          '23</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/karthik-b-2001"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={20} href="https://github.com/karthik-b-2001" />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-500 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-500 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
