import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import microsoftLogo from '../assets/microsoft.png';
import DecryptText from './DecryptText';

const certifications = [
  {
    title: 'Career Essentials in Cybersecurity',
    details: 'Cybersecurity, Information Security Awareness, Threat & Vulnerability Management',
    issued: 'Issued by Microsoft',
  },
  {
    title: 'The Cybersecurity Threat Landscape',
    details: 'Risk assessment, threat detection, cybersecurity landscape updates',
    issued: 'Issued by Microsoft',
  },
  {
    title: 'Cybersecurity Awareness: Cybersecurity Terminology',
    details: 'Fundamental cybersecurity, security terminology',
    issued: 'Issued by Microsoft',
  },
  {
    title: 'Cybersecurity Foundations',
    details: 'Security principles, risk management, cybersecurity frameworks',
    issued: 'Issued by Microsoft',
  },
  {
    title: 'Microsoft Security Copilot',
    details: 'AI-driven security operations, automation in cybersecurity',
    issued: 'Issued by Microsoft',
  }
];

function Certifications() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const width = carouselRef.current.scrollWidth / certifications.length;
        carouselRef.current.scrollBy({ left: width, behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certifications" className="py-20 px-8 bg-black text-green-400 border-t border-green-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-widest text-green-200">Continuous Learning</p>
        <h2 className="text-5xl font-extrabold glitch-title">
          <DecryptText text="Certifications" />
        </h2>
      </motion.div>

      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide px-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex-none w-80 rounded-xl border border-green-600 bg-black scroll-snap-align-start shadow-[0_0_10px_#00ff88] hover:shadow-[0_0_25px_#00ff88] transition-all duration-300"
          >
            <div className="bg-green-900 text-xs text-black font-mono px-3 py-1 rounded-t-xl truncate">
              C:\Certifications\{cert.title.replace(/\s+/g, '')}
            </div>
            <div className="p-6">
              <img
                src={microsoftLogo}
                alt="Microsoft"
                className="w-10 h-10 mb-4 bg-white p-1 rounded shadow-md"
              />
              <h3 className="text-lg font-bold mb-2 text-green-300">{cert.title}</h3>
              <p className="text-sm text-green-500">{cert.issued}</p>
              <ul className="mt-3 text-sm text-green-200 list-disc pl-5">
                <li>{cert.details}</li>
              </ul>
              <button className="mt-4 text-sm border border-green-400 hover:bg-green-700/10 text-green-300 px-4 py-1 rounded-md font-semibold shadow-[0_0_6px_#00ff88] hover:shadow-[0_0_12px_#00ff88] transition duration-300">
                View Credential
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
