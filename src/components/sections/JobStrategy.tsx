import { Target, Building2, CheckCircle, Users, ExternalLink } from 'lucide-react';

const JobStrategy = () => {
  // Replace with your actual Google Drive file ID
  const googleDriveFileId = '15_iEs_6UCkyoP6O8_1rV-iFYvQlWvCX4';
  const embedUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${googleDriveFileId}/view`;

  const goals = [
    'Secure a software engineer position at a top tech company by Spring 2026',
    'Master algorithmic problem-solving and system design',
    'Build a professional network of 30+ meaningful connections',
  ];

  const targetCompanies = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Salesforce', 'Capital One'];

  const skills = [
    'Full-Stack Development',
    'Cloud Architecture & DevOps',
    'Database Design & Optimization',
    'AI/ML & Computer Vision',
    'Security & Authentication',
  ];

  return (
    <section id="job-strategy" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Job Search Strategy
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A structured, goal-oriented approach to landing a software engineering role at a leading tech company.
        </p>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Goals Card */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Target size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">SMART Goals</h3>
            </div>
            <ul className="space-y-2">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Companies Card */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Building2 size={20} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Target Companies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {targetCompanies.map((company, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Key Skills Card */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Users size={20} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Key Skills</h3>
            </div>
            <ul className="space-y-1">
              {skills.map((skill, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PDF Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Full Strategy Document
            </h3>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1 text-sm"
            >
              <span>Open in Google Drive</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Google Drive PDF Embed */}
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="hidden md:block">
              <iframe
                src={embedUrl}
                className="w-full h-[600px] border-0"
                title="Job Search Strategy Preview"
                allow="autoplay"
              />
            </div>

            {/* Mobile Fallback */}
            <div className="md:hidden p-6 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For the best viewing experience on mobile, please open the document in Google Drive.
              </p>
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <span>View in Google Drive</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobStrategy;