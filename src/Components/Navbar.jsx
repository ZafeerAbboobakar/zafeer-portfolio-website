import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#work' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-md px-6 sm:px-8 py-4 flex justify-between items-center shadow-lg"
    >
      {/* Title */}
      <h1 className="text-xl sm:text-2xl text-white font-mono tracking-wider">
        Zafeer Abboobakar
      </h1>

      {/* Hamburger Icon */}
      <div className="sm:hidden text-white text-2xl cursor-pointer z-50" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:flex space-x-4 sm:space-x-6 font-mono text-sm sm:text-base text-white">
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className="relative group transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full duration-300"></span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md py-4 flex flex-col items-center space-y-4 font-mono text-white">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={toggleMenu}
              className="text-lg hover:text-green-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
