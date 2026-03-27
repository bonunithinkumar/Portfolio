import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className={`flex items-center gap-6 px-8 py-3 rounded-full border transition-all duration-300 ${scrolled ? 'bg-surface/80 border-white/10 backdrop-blur-md' : 'bg-surface/50 border-white/5 backdrop-blur-sm'}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`text-sm font-medium transition-colors ${
              activeSection === link
                ? 'text-teal'
                : 'text-gray-300 hover:text-teal/80'
            }`}
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
