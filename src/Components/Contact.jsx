import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import DecryptText from './DecryptText';

function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [loaded, setLoaded] = useState(false);
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setFormStatus('error');
      return;
    }

    emailjs
      .sendForm(
        emailServiceId,
        emailTemplateId,
        e.target,
        emailPublicKey
      )
      .then(() => {
        setFormStatus('success');
        e.target.reset();
      })
      .catch(() => setFormStatus('error'));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 text-center bg-black text-green-400 border-t border-green-700">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-green-200 mb-2">Let’s Connect</p>
        <h2 className="text-5xl font-extrabold text-green-400 mb-4">
          <DecryptText text="Contact" />
        </h2>
        <p className="text-lg text-green-200 mb-10">
          I'd love to hear from you! Whether it’s a question, opportunity, or just to say hi — feel free to reach out.
        </p>

        {loaded ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="bg-[#0f1f0f] p-8 rounded-xl border border-green-800 shadow-md shadow-green-500/10 space-y-6"
          >
            <div className="bg-green-900 text-xs text-black font-mono px-3 py-1 rounded-t-md truncate mb-4 text-left w-fit">
              C:\\Users\\Zafeer\\Contact.txt
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                pattern=".{3,}"
                title="Please enter your name"
                className="bg-black border border-green-700 text-green-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-green-500/30 transition"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your email"
                required
                title="Please enter a valid email"
                className="bg-black border border-green-700 text-green-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-green-500/30 transition"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              required
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              className="bg-black border border-green-700 text-green-300 px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:shadow-green-500/30 transition"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 255, 128, 0.5)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              className="bg-black text-green-300 border border-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-800/20 transition duration-300 w-full sm:w-auto"
            >
              Send Message 
            </motion.button>
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 mt-4"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 mt-4"
              >
                ❌ Failed to send message. Try again later.
              </motion.div>
            )}
          </motion.form>
        ) : (
          <p className="text-green-400 font-mono text-md">&gt; Loading Contact.txt</p>
        )}

        <div className="flex items-center justify-center space-x-6 mt-12 text-3xl">
          <a title="Email me" href="mailto:zafeer@example.com" className="text-green-300 hover:text-green-500 transition">
            <FaEnvelope />
          </a>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/zafeer-abboobakar-2318231b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            title="GitHub"
            href="https://github.com/ZafeerAbboobakar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
