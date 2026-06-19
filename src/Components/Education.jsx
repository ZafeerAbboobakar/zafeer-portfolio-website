import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import tmuLogo from '../assets/tmu-logo.png';
import hsLogo from '../assets/school-logo.png';
import DecryptText from './DecryptText';

function Education() {
  return (
    <FadeInSection>
      <section id="education" className="bg-black text-green-400 py-20 px-6 border-t border-green-700">
        {/* Section Titles */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-green-300 tracking-wide">What I have studied so far</p>
          <h2 className="text-5xl font-extrabold text-green-400">
            <DecryptText text="Education" />
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1 w-1 h-full bg-green-800"></div>

          {/* TMU Card - Left */}
          <motion.div
            className="mb-12 flex justify-start items-center w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="w-1/2 pr-8">
              <Tilt glareEnable={true} glareColor="lime" glareMaxOpacity={0.1} tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={400}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#0d0d0d] border border-green-600 rounded-lg shadow-lg shadow-green-500/20 overflow-hidden"
                >
                  <div className="bg-green-900 px-4 py-2 text-sm font-mono border-b border-green-700">C:\Education\TMU&gt;</div>
                  <div className="p-6 space-y-2 font-mono">
                    <h3 className="text-xl font-bold text-green-300">Business Technology Management (B.Com)</h3>
                    <p className="text-sm text-green-200">Toronto Metropolitan University, Toronto, ON</p>
                    <ul className="text-green-400 list-disc ml-4 mt-2">
                      <li>General Entrance Scholarship – 2022</li>
                      <li>Top 10% Student – 2022</li>
                    </ul>
                  </div>
                </motion.div>
              </Tilt>
            </div>

            {/* TMU Logo */}
            <motion.div
              className="w-12 h-12 bg-green-400 rounded-full overflow-hidden flex items-center justify-center z-10 border-4 border-black"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              viewport={{ once: true }}
            >
              <img src={tmuLogo} alt="TMU" className="w-full h-full object-cover" />
            </motion.div>

            <div className="w-1/2 pl-8 text-sm text-green-300">2022 – Present</div>
          </motion.div>

          {/* High School Card - Right */}
          <motion.div
            className="mb-12 flex justify-end items-center w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="w-1/2 pr-8 text-sm text-green-300 text-right">2018 – 2022</div>

            {/* High School Logo */}
            <motion.div
              className="w-12 h-12 bg-green-400 rounded-full overflow-hidden flex items-center justify-center z-10 border-4 border-black"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              viewport={{ once: true }}
            >
              <img src={hsLogo} alt="HS" className="w-full h-full object-cover" />
            </motion.div>

            <div className="w-1/2 pl-8">
              <Tilt glareEnable={true} glareColor="lime" glareMaxOpacity={0.1} tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={400}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#0d0d0d] border border-green-600 rounded-lg shadow-lg shadow-green-500/20 overflow-hidden"
                >
                  <div className="bg-green-900 px-4 py-2 text-sm font-mono border-b border-green-700">C:\Education\HighSchool&gt;</div>
                  <div className="p-6 space-y-2 font-mono">
                    <h3 className="text-xl font-bold text-green-300">High School Diploma</h3>
                    <p className="text-sm text-green-200">David Suzuki Secondary School, Brampton, ON</p>
                    <ul className="text-green-400 list-disc ml-4 mt-2">
                      <li>Ontario Scholar</li>
                      <li>12th Grade Average: 90%</li>
                    </ul>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Education;
