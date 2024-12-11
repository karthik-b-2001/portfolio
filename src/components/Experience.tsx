import { workExperience, internships } from '../data/portfolio';

const ExperienceCard = ({ experience }: { experience: typeof workExperience[0] }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
        <p className="text-gray-600">{experience.company}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-600">{experience.location}</p>
        <p className="text-gray-500">{experience.duration}</p>
      </div>
    </div>
    <ul className="list-disc list-inside space-y-2">
      {experience.points.map((point, index) => (
        <li key={index} className="text-gray-700">{point}</li>
      ))}
    </ul>
    {experience.techStack && (
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Work Experience</h3>
          {workExperience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}

          <h3 className="text-2xl font-semibold text-gray-800 mb-6 mt-12">Internships</h3>
          {internships.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;