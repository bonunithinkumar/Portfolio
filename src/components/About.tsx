import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealSection from './RevealSection';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <>
      <RevealSection id="about" className="min-h-screen pt-24 pb-8 px-6 md:px-12 relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col items-center"
          >
            {/* Title */}
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-normal text-white mb-10 tracking-wide"
            >
              Who am I
            </motion.h2>

            {/* Content */}
            <div className="space-y-6 text-gray-400 text-[15px] md:text-[16px] leading-relaxed w-full max-w-3xl text-left font-light mb-16">
              <motion.p variants={itemVariants}>
                Hey, I'm <span className="text-white font-medium tracking-wide">NITHIN KUMAR BONU</span>! I'm currently pursuing a degree in <span className="text-white font-medium tracking-wide">COMPUTER SCIENCE</span> and working my way into becoming a strong <span className="text-white font-medium tracking-wide">DATA SCIENTIST & ML ENGINEER</span>.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I find meaning in the process — uncovering patterns in data, visualizing complex relationships, and building machine learning models that actually work well and provide real insights.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I'm passionate about solving problems — whether it's cleaning messy datasets, tuning hyperparameters, or just making an AI pipeline run smoother. I believe in constantly learning, reading research papers, and pushing technical boundaries.
              </motion.p>
            </div>

            {/* Education Title */}
            <motion.div variants={itemVariants} className="w-full max-w-3xl text-left">
              <h3 className="text-xl text-white mb-4 font-normal tracking-wide">Education</h3>
              
              {/* Education Card */}
              <div className="w-full border border-white/10 rounded-xl p-5 md:p-6 bg-transparent hover:bg-white/[0.02] transition-colors duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
                  <div>
                    <h4 className="text-white text-[16px] font-medium mb-1 tracking-wide">Computer Science</h4>
                    <p className="text-gray-500 text-[14px]">Vignan's Institute of Information Technology</p>
                  </div>
                  <span className="text-gray-500 text-[14px] whitespace-nowrap">Sept 2023 - May 2027</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </RevealSection>
    </>
  );
};

export default About;