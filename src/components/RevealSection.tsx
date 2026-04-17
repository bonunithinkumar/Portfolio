import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Parallax intensity — 0 means none, 60 (default) is subtle */
  parallaxAmount?: number;
}

const RevealSection = ({
  children,
  id,
  className = '',
  style = {},
  parallaxAmount = 60,
}: RevealSectionProps) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax: content drifts upward as you scroll past
  const y = useTransform(scrollYProgress, [0, 1], [parallaxAmount, -parallaxAmount]);

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
        style={{ y }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default RevealSection;
