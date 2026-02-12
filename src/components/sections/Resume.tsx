import { FileDown, ExternalLink } from 'lucide-react';

const Resume = () => {
  const googleDriveFileId = '1kFAmO53vQ4tTVfmf7M4w3rWLhAHBp6n_';
  const embedUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${googleDriveFileId}/view`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Resume
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Full-stack engineer with 2 years of experience building scalable systems. 
          Download or preview my resume below.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={downloadUrl}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-500 transition-colors shadow-md"
          >
            <FileDown size={20} />
            <span>Download Resume</span>
          </a>
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-md"
          >
            <ExternalLink size={20} />
            <span>Open in new Tab</span>
          </a>
        </div>

        {/* PDF Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            {/* PDF Embed for Desktop */}
            <div className="hidden md:block">
              <iframe
                src={embedUrl}
                className="w-full h-[800px] border-0"
                title="Resume Preview"
                allow="autoplay"
              />
            </div>

            {/* Mobile Fallback */}
            <div className="md:hidden p-8 text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-inner">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileDown size={32} className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Resume Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For the best viewing experience on mobile, please download the PDF or open it in Google Drive.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={downloadUrl}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-500 transition-colors"
                  >
                    <FileDown size={18} />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Open in new Tab</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;