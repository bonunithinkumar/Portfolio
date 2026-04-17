import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = '';
      
      // Update active section based on intersecting bounding rect
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold - if top is near top of screen or past it (while bottom is still visible)
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
    }
  };

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className={`flex items-center gap-2 sm:gap-6 px-4 sm:px-8 py-3 rounded-full border transition-all duration-300 ${scrolled ? 'bg-surface/80 border-white/10 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-surface/50 border-white/5 backdrop-blur-sm'}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => handleClick(e, link.toLowerCase())}
            className={`text-xs sm:text-sm font-medium px-2 py-1 rounded-md transition-colors ${
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
