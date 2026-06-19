import { useState } from 'react';
import TerminalIntro from './Components/TerminalIntro';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Education from './Components/Education';
import Work from './Components/Work';
import Certifications from './Components/Certifications';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className="bg-black text-white scroll-smooth overflow-x-hidden">
      {!bootComplete ? (
        <TerminalIntro onComplete={() => setBootComplete(true)} />
      ) : (
        <>
          <Navbar />
          <main className="min-h-screen">
            <Hero />
            <About />
            <Education />
            <Work />
            <Certifications />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
