import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import DecryptText from './DecryptText';

const projects = Array(3).fill({
  title: 'Coming soon!...',
  description: 'Coming soon!...',
  tech: ['React', 'Tailwind', 'Framer Motion'],
  liveLink: '#',
  codeLink: '#',
  image: '/projects/placeholder.png',
});

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-8 text-center bg-black text-green-400 border-t border-green-700"
    >
      <FadeInSection>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-green-500">
            Innovative Creations
          </p>
          <h2 className="text-5xl font-extrabold glitch-title text-green-400">
            <DecryptText text="Projects" />
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 18px rgba(0, 255, 136, 0.4)',
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-black border border-green-700 rounded-xl shadow-md shadow-green-500/10 p-5 flex flex-col justify-between transition-all duration-300"
            >
              <div className="bg-green-900 text-xs text-black font-mono px-3 py-1 rounded-t-md truncate mb-4">
                C:\Projects\ComingSoon{index + 1}
              </div>

              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover border border-green-700"
              />

              <h3 className="text-lg font-bold text-green-300 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-green-200 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-xs mb-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-900 text-green-300 px-3 py-1 rounded-full"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mt-auto gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 border border-green-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600/10 transition"
                >
                  Live Project
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 border border-green-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600/10 transition"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
