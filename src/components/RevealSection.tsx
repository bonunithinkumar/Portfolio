import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  parallaxAmount?: number; // Kept for backwards compatibility but not used to save performance
}

const RevealSection = ({
  children,
  id,
  className = '',
  style = {},
}: RevealSectionProps) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`overflow-hidden ${className}`}
      style={style}
    >
      {/* Fade + slide up on enter */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default RevealSection;

