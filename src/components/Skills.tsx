import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealSection from './RevealSection';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    'Machine Learning & AI': ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Hugging Face', 'OpenCV'],
    'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Tableau'],
    'Web Development': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <RevealSection id="skills" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-white"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bento-card border border-white/10 p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} variants={itemVariants} className="flex flex-col items-center md:items-start">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-gray-300 text-sm hover:border-teal/50 hover:bg-teal/20 hover:text-white transition-colors cursor-default tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </RevealSection>
  );
};

export default Skills;
