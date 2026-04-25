import { motion } from 'framer-motion';
import { Code2, ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const AllProjects = () => {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 relative z-10 bg-transparent">
      <div className="max-w-6xl mx-auto w-full">
        <header className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            All <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg mb-8">
            A comprehensive collection of my work in data science, machine learning, and software engineering.
          </p>
          
          <a 
            href="/" 
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col p-6 rounded-2xl bg-[#08080A]/60 backdrop-blur-md border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 mt-auto">
                <a href={project.github} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                  <Code2 size={16} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
