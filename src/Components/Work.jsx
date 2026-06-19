import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from './FadeInSection';
import opsLogo from '../assets/ops-logo.png';
import tdLogo from '../assets/td-logo.png';
import DecryptText from './DecryptText';

const experiences = [
  {
    company: 'Ontario Public Service',
    title: 'IT Systems Officer Co-op',
    date: 'Jan 2025 – Present',
    points: [
      'Led onboarding for new co-op students and provided ongoing mentorship.',
      'Hosted 50+ Windows 11 presentations with 500+ OPS attendees.',
      'Automated and enhanced executive tech support using AI tools.',
    ],
    logo: opsLogo,
  },
  {
    company: 'TD Canada Trust',
    title: 'Teller',
    date: 'Nov 2023 – Jan 2025',
    points: [
      'Processed large volumes of transactions with accuracy and professionalism.',
      'Delivered excellent customer service and offered tailored financial solutions.',
      'Contributed to operational efficiency and customer retention.',
    ],
    logo: tdLogo,
  },
];

function Work() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experiences[selectedIndex];

  return (
    <FadeInSection>
      <section id="work" className="py-20 px-8 text-green-400 bg-black border-t border-green-700">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-widest text-green-300">
            My Professional Journey
          </h3>
          <h2 className="text-5xl font-extrabold glitch-title"><DecryptText text="Work Experience" /></h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
          {/* Selector Inputs */}
          <div className="space-y-6 flex-1">
            {experiences.map((exp, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`cursor-pointer flex items-center p-4 rounded-xl transition-all duration-300 shadow-md font-mono text-left text-green-100 ${
                  i === selectedIndex
                    ? 'bg-green-700/80 text-white shadow-green-500/30'
                    : 'bg-green-950 hover:bg-green-900 text-green-300'
                }`}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 rounded-full mr-4 object-contain bg-white p-1"
                />
                <div>
                  <h4 className="text-lg font-bold">{exp.title}</h4>
                  <p className="text-sm text-green-200">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Output Terminal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="flex-1 rounded-lg overflow-hidden font-mono shadow-lg shadow-green-500/20 border border-green-600"
            >
              <div className="bg-green-700 text-black px-4 py-2 text-sm">
                C:\Experience\{selected.title.replace(/\s+/g, '')}
              </div>
              <div className="bg-[#0c1c0c] p-6">
                <h4 className="text-2xl font-extrabold text-green-200 mb-1">{selected.title}</h4>
                <p className="text-md text-green-400 mb-1">{selected.company}</p>
                <p className="text-sm text-green-500 italic mb-4">{selected.date}</p>
                <ul className="list-disc pl-5 space-y-2 text-green-300">
                  {selected.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Work;
