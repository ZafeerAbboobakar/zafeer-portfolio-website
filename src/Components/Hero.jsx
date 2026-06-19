import { useEffect, useState } from 'react';
import '../styles/matrix.css';
import MatrixBackground from './MatrixBackground';

function Hero() {
  const fullName = "Zafeer Abboobakar";
  const [displayedText, setDisplayedText] = useState("");
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [matrixVisible, setMatrixVisible] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const decryptInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        const randomChar = () =>
          String.fromCharCode(33 + Math.floor(Math.random() * 94));
        const shuffled = [...fullName]
          .map((char, i) => (i <= currentIndex ? char : randomChar()))
          .join("");
        setDisplayedText(shuffled);
        currentIndex++;
      } else {
        clearInterval(decryptInterval);
        setDisplayedText(fullName);
        setSubtitleVisible(true);
        setTimeout(() => setMatrixVisible(true), 1000); // Delay Matrix to load AFTER subtitle
      }
    }, 80);
    return () => clearInterval(decryptInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center text-center bg-black overflow-hidden"
    >
      {/* Matrix Background */}
      {matrixVisible && (
        <div className="absolute inset-0 z-0 pointer-events-none fade-in-fast">
          <MatrixBackground />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl text-green-400 tracking-wide glowing-script font-pacifico">
          {displayedText}
          {displayedText === fullName && <span className="blinking-cursor">|</span>}
        </h1>
        {subtitleVisible && (
          <p className="mt-4 text-lg md:text-xl text-green-200 fade-in">
            Cybersecurity Enthusiast • Creative Developer • Problem Solver
          </p>
        )}
      </div>
    </section>
  );
}

export default Hero;
