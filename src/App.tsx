import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Resume from './components/sections/Resume';
import VideoIntroductions from './components/sections/VideoIntroductions';
import JobStrategy from './components/sections/JobStrategy';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Resume />
        <VideoIntroductions />
        <JobStrategy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;