import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-gray-500">{edu.duration}</p>
                </div>
              </div>
              {edu.cgpa && (
                <p className="text-gray-700 mb-2">CGPA: {edu.cgpa}</p>
              )}
              {edu.accomplishments && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Accomplishments:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {edu.accomplishments.map((accomplishment, idx) => (
                      <li key={idx} className="text-gray-700">{accomplishment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;