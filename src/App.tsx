import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Resume from './components/sections/Resume';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import GlowingCursor from './components/ui/GlowingCursor';

function App() {
  return (
    <div className="min-h-screen bg-black transition-colors">
      <GlowingCursor />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;