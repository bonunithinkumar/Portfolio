import { motion } from 'framer-motion';
import RevealSection from './RevealSection';

const Contact = () => {
  return (
    <RevealSection id="contact" className="py-24 px-6 md:px-12 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bento-card bg-gradient-to-br from-surface to-surface border border-white/10 py-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Let's build together</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            I'm currently looking for new opportunities in data science and machine learning. My inbox is always open.
          </p>
          <a href="mailto:nithinbono@example.com" className="inline-block px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-teal hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(29,106,94,0.4)]">
            Say Hello
          </a>
        </motion.div>
      </div>
      <div className="text-center mt-24 text-gray-600 text-sm">
        <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Nithin Kumar Bono.</p>
      </div>
    </RevealSection>
  );
};

export default Contact;
