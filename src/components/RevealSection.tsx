import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RevealSection = ({ children, id, className = '', style = {} }: RevealSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10px' }}
    >
      <motion.div
        variants={{
          hidden: { clipPath: 'inset(100% 0 0 0)' },
          visible: { 
            clipPath: 'inset(0% 0% 0% 0%)', 
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } 
          }
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default RevealSection;
