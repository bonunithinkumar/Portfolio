import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealSection from './RevealSection';
import { BarChart3, Binary, Brain, Database, Network } from 'lucide-react';

const projects = [
  {
    title: 'Predictive Sales Modeler',
    description: 'A deep learning model using LSTM networks to forecast seasonal retail sales with 94% accuracy.',
    Icon: BarChart3,
    span: 'col-span-1 md:col-span-2 row-span-2',
    tags: ['Python', 'TensorFlow', 'Pandas'],
    gradient: 'from-primary/20 to-transparent'
  },
  {
    title: 'Customer Segmentation',
    description: 'K-Means clustering algorithm to categorize e-commerce customers based on purchasing behavior.',
    Icon: Database,
    span: 'col-span-1 row-span-1',
    tags: ['Scikit-Learn', 'Matplotlib'],
    gradient: 'from-secondary/20 to-transparent'
  },
  {
    title: 'NLP Sentiment Analyzer',
    description: 'Real-time Twitter sentiment analysis pipeline using BERT transformers.',
    Icon: Brain,
    span: 'col-span-1 row-span-2',
    tags: ['PyTorch', 'HuggingFace'],
    gradient: 'from-tertiary/20 to-transparent'
  },
  {
    title: 'Computer Vision Defect Detection',
    description: 'Automated CNN pipeline for detecting manufacturing defects on assembly lines.',
    Icon: Network,
    span: 'col-span-1 row-span-1',
    tags: ['OpenCV', 'YOLOv5'],
    gradient: 'from-primary/10 to-secondary/10'
  },
  {
    title: 'Recommendation Engine',
    description: 'Collaborative filtering system built for a local streaming startup.',
    Icon: Binary,
    span: 'col-span-1 md:col-span-2 row-span-1',
    tags: ['Apache Spark', 'AWS'],
    gradient: 'from-surface to-surface' // Neutral back
  }
];


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Staggered reveal
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <RevealSection id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of my recent data science and machine learning projects demonstrating theoretical knowledge applied to practical problems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[240px] gap-6"
        >
          {projects.map((project, index) => {
            const { Icon } = project;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className={`bento-card group ${project.span}`}
              >
                {/* Subtle gradient background for each card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 z-0`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-primary group-hover:bg-teal/10 group-hover:border-teal/30 group-hover:text-teal group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </RevealSection>
  );
};

export default Projects;
