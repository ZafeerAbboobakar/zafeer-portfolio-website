import FadeInSection from './FadeInSection';
import DecryptText from './DecryptText';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';

function About() {
  return (
    <FadeInSection>
      <section
        id="about"
        className="min-h-screen px-8 py-24 bg-black text-green-400 flex flex-col md:flex-row items-center justify-center gap-16 border-t border-green-800"
      >
        {/* Left - Profile Image & Buttons */}
        <div className="flex flex-col items-center space-y-8 z-10">
          <div className="w-56 h-56 rounded-full border-4 border-green-500 overflow-hidden" style={{ filter: 'drop-shadow(0 0 15px #22c55e)' }}>
            <img src={profileImage} alt="Zafeer" className="w-full h-full object-cover rounded-full" />
          </div>


          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Resume', link: '/resume.pdf' },
              { label: 'LinkedIn', link: 'https://www.linkedin.com/in/zafeer-abboobakar-2318231b2/' },
              { label: 'GitHub', link: 'https://github.com/ZafeerAbboobakar' }
            ].map(({ label, link }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="relative inline-block px-6 py-3 text-md font-bold rounded-md transition-all duration-300 
                 bg-black text-green-400 border-2 border-green-500 shadow-md shadow-green-500/30 
                 hover:shadow-green-500/80 hover:brightness-110"
              >
                <span className="absolute inset-0 border-2 border-green-300 animate-pulse rounded-md opacity-10"></span>
                <span className="relative z-10">{label}</span>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Right - Command Prompt Styled Panel */}
        <motion.div
          className="w-full max-w-3xl bg-[#0d0d0d] border border-green-700 shadow-green-800/40 shadow-lg rounded-lg p-8 font-mono relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h4 className="uppercase text-green-300 tracking-widest text-md">[ Terminal: ~zafeer/about ]</h4>
            <h2 className="text-5xl font-bold text-green-400 mt-3">
              <DecryptText text="Overview" />
            </h2>
          </div>

          <div className="space-y-5 text-green-200 text-lg leading-relaxed">
            <p><span className="text-green-500">$</span> 🛡️ Aspiring cybersecurity professional passionate about protecting digital systems and learning the art of ethical hacking.</p>
            <p><span className="text-green-500">$</span> 🎓 Currently pursuing a B.Com in Business Technology Management at TMU, with a focus on cybersecurity, automation, and information systems.</p>
            <p><span className="text-green-500">$</span> 💻 I explore cyber projects, from secure scripting in Python to understanding vulnerabilities, threat modeling, and digital forensics.</p>
            <p><span className="text-green-500">$</span> ⚙️ I build and automate systems using tools like Python, SQL, Power BI — blending tech skills with secure thinking.</p>
            <p><span className="text-green-500">$</span> 🚀 Always exploring new frameworks, staying updated on cyber threats, and committed to making tech safer for everyone.</p>

          </div>
        </motion.div>
      </section>
    </FadeInSection>
  );
}

export default About;
