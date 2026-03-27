
import { motion } from 'framer-motion';
// 3D Canvas rendering has been moved to App.tsx for global parallax

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

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <>
    {/* Google Fonts — loaded once */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

      /* copper palette */
      :root {
        --copper-bright : #E8844A;
        --copper-mid    : #C4622D;
        --copper-dark   : #8C3D18;
        --sand          : #F2D9B8;
        --stone         : #A89070;
        --ink           : #1A1208;
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
          #F4D3AE 0%,
          #E87C52 30%,
          #C4622D 55%,
          #F4D3AE 80%,
          #E87C52 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .resume-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0.65rem 2rem;
        font-family: 'DM Mono', monospace;
        font-size: 0.7rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #D47B4A;
        border: 1px solid rgba(232,132,74,0.35);
        border-radius: 30px;
        background: transparent;
        cursor: pointer;
        overflow: hidden;
        transition: border-color 0.3s, color 0.3s;
      }

      .resume-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(29, 106, 94, 0.2), transparent);
        transform: translateX(-100%);
        transition: transform 0.55s ease;
      }

      .resume-btn:hover::before { transform: translateX(100%); }
      .resume-btn:hover { border-color: rgba(29, 106, 94, 0.8); background: rgba(29, 106, 94, 0.1); color: #fff; }
    `}    </style>

    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas moved to global Background */}

      {/* ── vignette overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(12,8,4,0.72) 100%)',
        }}
      />

      {/* ── content ── */}
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >

          {/* eyebrow line */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="hero-rule" />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                color: 'var(--stone)',
                textTransform: 'uppercase',
              }}
            >
              Aspiring Engineer
            </span>
            <div className="hero-rule" style={{ transform: 'scaleX(-1)' }} />
          </motion.div>

          {/* name */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              letterSpacing: '0.06em',
              color: 'var(--sand)',
              opacity: 0.7,
              marginBottom: '0.6rem',
            }}
          >
            Nithin Kumar Bonu
          </motion.p>

          {/* main headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: 'clamp(3rem, 9vw, 7.5rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
              marginBottom: '1.6rem',
            }}
          >
            <span className="copper-text">Data Scientist</span>
            <br />
            <span
              style={{
                color: 'rgba(242,217,184,0.88)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '0.62em',
                letterSpacing: '0.04em',
              }}
            >
              &amp; ML Engineer
            </span>
          </motion.h1>

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
            <button className="resume-btn">
              Resume
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  </>
);

export default Hero;
