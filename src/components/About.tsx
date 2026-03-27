import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealSection from './RevealSection';
import DataCore from './DataCore';

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:wght@300;400&display=swap');

        .about-rule {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, #E87C52, transparent);
          flex-shrink: 0;
        }

        .stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(232,132,74,0.2);
          align-self: center;
        }

        .edu-card {
          border: 1px solid rgba(232,132,74,0.18);
          padding: 1.4rem 1.6rem;
          position: relative;
          background: linear-gradient(135deg, rgba(30, 25, 20, 0.85) 0%, rgba(14, 11, 7, 0.95) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 16px;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.8);
          transition: border-color 0.3s;
        }
        .edu-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
          background: linear-gradient(to bottom, #E87C52, #8C3D18);
        }
        .edu-card:hover {
          border-color: rgba(232,132,74,0.38);
        }

        .glass-panel {
          background: linear-gradient(135deg, rgba(30, 25, 20, 0.85) 0%, rgba(14, 11, 7, 0.95) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.8);
        }

        /* Contain + softly vignette the DataCore orb */
        .orb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          max-width: 400px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 50%;
          border: 1px solid rgba(232,132,74,0.1);
        }
        .orb-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            ellipse 65% 65% at 50% 50%,
            transparent 45%,
            rgba(14,11,7,0.9) 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        .trait-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          color: rgba(168,144,112,0.75);
          text-transform: uppercase;
        }
        .trait-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #E87C52;
          opacity: 0.7;
          flex-shrink: 0;
        }
      `}</style>

      <RevealSection id="about" className="pt-24 pb-8 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >

            {/* Section label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-14">
              <div className="about-rule" />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#A89070',
              }}>About</span>
            </motion.div>

            {/* Two-column */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-10">

              {/* LEFT */}
              <div className="glass-panel lg:col-span-3">
                <motion.h2 variants={itemVariants} style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: 'clamp(2.6rem, 5vw, 3.8rem)',
                  lineHeight: 0.95,
                  color: '#FFFFFF',
                  marginBottom: '2rem',
                }}>
                  Who I Am
                </motion.h2>

                <motion.div variants={itemVariants} className="space-y-4" style={{ marginBottom: '2rem' }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.85)',
                  }}>
                    I'm <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Nithin Kumar Bonu</span>,
                    a Computer Science student at Vignan Institute of Information Technology —
                    building toward a career as a{' '}
                    <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontStyle: 'italic' }}>Data Scientist & ML Engineer</span>.
                  </p>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.85)',
                  }}>
                    I find meaning in the process — uncovering patterns in data, designing
                    predictive systems, and building AI pipelines that are rigorous and practical.
                  </p>
                </motion.div>

                {/* Traits */}
                <motion.div variants={itemVariants} className="space-y-3" style={{ marginBottom: '2.2rem' }}>
                  {['Data-driven problem solver', 'Deep learning enthusiast', 'Continuous learner'].map(t => (
                    <div key={t} className="trait-row">
                      <div className="trait-dot" />
                      {t}
                    </div>
                  ))}
                </motion.div>


              </div>

              {/* RIGHT — orb */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="orb-wrap">
                  <DataCore />
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div variants={itemVariants} style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(232,132,74,0.2), transparent)',
              marginBottom: '1rem',
            }} />

            {/* Education */}
            <motion.div variants={itemVariants}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#A89070',
                display: 'block',
                marginBottom: '1rem',
              }}>Education</span>

              <div className="edu-card">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      color: '#FFFFFF',
                      marginBottom: '0.2rem',
                    }}>B.Tech — Computer Science</p>
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontWeight: 300,
                      fontStyle: 'italic',
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}>Vignan Institute of Information Technology, Vishakapatnam</p>
                  </div>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    color: '#E87C52',
                    whiteSpace: 'nowrap',
                  }}>2023 — 2027</span>
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