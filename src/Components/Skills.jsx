import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DecryptText from './DecryptText';

const skillsData = {
  Programming: [
    { name: 'Python', level: 'Advanced' },
    { name: 'SQL', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'C/C++', level: 'Advanced' },
    { name: 'PowerBI', level: 'Advanced' },
    { name: 'R', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'TailwindCSS', level: 'Intermediate' },
  ],
  'IT Tools': [
    { name: 'Microsoft Intune', level: 'Intermediate' },
    { name: 'Nmap', level: 'Intermediate' },
    { name: 'Linux', level: 'Intermediate' },
    { name: 'Wireshark', level: 'Intermediate' },
    { name: 'Virtual Box', level: 'Intermediate' },
    { name: 'VS Code', level: 'Intermediate' },
    { name: 'FileZilla', level: 'Intermediate' },
  ],
  'Content Production': [
    { name: 'Canva', level: 'Intermediate' },
    { name: 'CapCut', level: 'Advanced' },
    { name: 'Meta Business Suite', level: 'Intermediate' },
    { name: 'Photoshop', level: 'Intermediate' },
    { name: 'Premire Pro', level: 'Intermediate' },
    { name: 'After Effects', level: 'Intermediate' },
  ],
};

const SkillPrompt = ({ name, level, delay, active }) => {
  const [displayText, setDisplayText] = useState('> Loading...');
  const [showLevel, setShowLevel] = useState(false);

  useEffect(() => {
    if (!active) return;

    const loadTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= name.length) {
          setDisplayText(`> ${name.substring(0, i)}`);
          i++;
        } else {
          clearInterval(typingInterval);
          setShowLevel(true);
        }
      }, 60);
    }, delay);

    return () => clearTimeout(loadTimeout);
  }, [active, delay, name]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#0c1c0c] border border-green-700/60 rounded-md px-4 py-3 text-left shadow-md transition-all duration-200 hover:shadow-green-400/20 font-mono text-green-300"
    >
      <p className="text-sm mb-2">{displayText}</p>
      {showLevel && (
        <span
          className={`text-xs px-2 py-0.5 rounded-sm ${
            level === 'Advanced'
              ? 'bg-green-600 text-black'
              : 'bg-green-800 text-green-200'
          }`}
        >
          {level}
        </span>
      )}
    </motion.div>
  );
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState({});

  const triggerCategory = (category) => {
    setActiveCategory((prev) => ({ ...prev, [category]: true }));
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-8 text-center bg-black text-green-400 border-t border-green-700"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="uppercase text-sm mb-2 tracking-widest text-green-300">Skills</h2>
      <h3 className="text-5xl font-extrabold glitch-title mb-4">
        <DecryptText text="Technical Expertise" />
      </h3>
      <p className="mb-12 text-green-200">Here are the technologies and tools I work with</p>

      {Object.entries(skillsData).map(([category, skills], catIdx) => (
        <motion.div
          key={category}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: catIdx * 0.3 }}
          viewport={{ once: true }}
          onViewportEnter={() => triggerCategory(category)}
        >
          <h4 className="text-2xl font-semibold mb-6 text-green-300 underline decoration-green-600">
            {category}
          </h4>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center">
            {skills.map((skill, index) => (
              <SkillPrompt
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 200}
                active={activeCategory[category]}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default Skills;
