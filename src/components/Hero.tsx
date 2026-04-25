import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';


// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

// ─── Typewriter & Rotating Roles ──────────────────────────────────────────────
const TypewriterRole = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startTyping = () => {
      if (displayText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, 70);
      }
    };

    if (displayText === '') {
      timer = setTimeout(startTyping, 400); // Wait for the flip-in animation
    } else {
      startTyping();
    }

    return () => clearTimeout(timer);
  }, [displayText, text]);

  return (
    <span className="relative inline-flex items-center h-full">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[1.1em] bg-[var(--copper-bright)] ml-[6px]"
      />
    </span>
  );
};

const RotatingRoles = () => {
  const roles = ["Data Scientist", "ML Engineer", "AI Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ fontFamily: "'Space Grotesk', sans-serif", perspective: '1000px' }}
      className="flex items-center justify-center gap-2 text-white/90 text-base md:text-lg tracking-[0.15em] uppercase h-[48px]"
    >
      <span className="w-2 h-2 rounded-full bg-[var(--copper-bright)] shadow-[0_0_8px_var(--copper-bright)]" />
      <div className="overflow-hidden h-full flex items-center justify-center min-w-[200px] md:min-w-[240px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 90 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="flex justify-center w-full"
          >
            <TypewriterRole text={roles[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="w-2 h-2 rounded-full bg-[var(--copper-bright)] shadow-[0_0_8px_var(--copper-bright)]" />
    </div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <>
    {/* Google Fonts — loaded once */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Outfit:wght@300;400;600;700&family=Space+Grotesk:wght@300;400;500&display=swap');

      /* Violet Nebula palette */
      :root {
        --copper-bright : #8B5CF6;
        --copper-mid    : #6D28D9;
        --copper-dark   : #6D28D9;
        --sand          : #E9D5FF;
        --stone         : #C4A8FF;
        --ink           : #07050F;
      }

      .hero-rule {
        width: 56px;
        height: 1px;
        background: linear-gradient(90deg, var(--copper-bright), transparent);
      }

      /* gradient on heading */
      .copper-text {
        background: linear-gradient(
          120deg,
          #E9D5FF 0%,
          #8B5CF6 30%,
          #6D28D9 55%,
          #C4A8FF 80%,
          #8B5CF6 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .primary-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 2.2rem;
        background: #F3EEFF;
        color: #07050F;
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        border-radius: 8px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px -3px rgba(139,92,246,0.2);
        cursor: pointer;
      }
      .primary-btn:hover {
        background: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px -5px rgba(139,92,246,0.4);
      }

      .secondary-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 2.2rem;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(8px);
        color: #F3EEFF;
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      .secondary-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255,255,255,0.25);
      }
    `}    </style>

    <RevealSection
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      parallaxAmount={40}
    >
      {/* 3D Canvas moved to global Background */}


      {/* ── content ── */}
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center flex flex-col items-center relative mt-16 md:mt-24"
        >
          {/* Subtle dark radial gradient behind text */}
          <div
            className="absolute inset-0 z-[-1] pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(7, 5, 15, 0.9) 0%, rgba(7, 5, 15, 0.4) 40%, transparent 70%)',
              transform: 'scale(1.5)',
              filter: 'blur(20px)'
            }}
          />

          {/* eyebrow line */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="hero-rule" />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                color: 'var(--stone)',

              }}
            >
              Hello, I'm
            </span>
            <div className="hero-rule" style={{ transform: 'scaleX(-1)' }} />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(3.5rem, 11vw, 5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: '#F3EEFF',
              marginBottom: '1.8rem',
            }}
          >
            Nithin Kumar Bonu
          </motion.h1>

          {/* Roles - Elegant Glass Badge instead of Gradient */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-10"
          >
            <RotatingRoles />
          </motion.div>

          {/* thin divider */}
          <motion.div
            variants={itemVariants}
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, var(--copper-bright), transparent)',
              marginBottom: '1.8rem',
            }}
          />

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <button className="primary-btn">
              Resume
            </button>
            <button
              className="secondary-btn"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                marginLeft: '1.3rem',
              }}>
              Contact Me
            </button>
          </motion.div>

        </motion.div>
      </div>
    </RevealSection>
  </>
);

export default Hero;
