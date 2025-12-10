import { Video, ExternalLink } from 'lucide-react';

const videos = [
  {
    title: 'Elevator Pitch',
    description: 'A quick 60-second introduction about who I am and what I do.',
    link: 'https://drive.google.com/file/d/1WD0gJHkK1ctoXrrbH-CGVFXHEY8uRNYb/view?usp=sharing',
  },
  {
    title: 'Who I am',
    description: 'A detailed overview of my professional journey and aspirations.',
    link: 'https://drive.google.com/file/d/1U4oUiOZ1j2OEQylrnfZLa8qahMWTpn73/view?usp=sharing',
  },
];

const VideoIntroductions = () => {
  return (
    <section id="videos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Introduction
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some video introductions that give a brief overview of my background and skills.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Video size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {video.description}
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                <span>Watch Video</span>
                <ExternalLink size={14} className="ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoIntroductions;