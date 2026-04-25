import { motion } from 'framer-motion';
import { Code2, ExternalLink, ArrowRight } from 'lucide-react';
import RevealSection from './RevealSection';
import { projects } from '../data/projects';

const Projects = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <RevealSection id="projects" className="min-h-screen py-16 px-6 md:px-12 flex flex-col justify-center relative z-10 bg-transparent">
      <div className="max-w-5xl mx-auto w-full">
        <header className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base">
            A selection of my featured projects showcasing my skills in data analysis, machine learning, and problem-solving.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col p-5 rounded-2xl bg-[#08080A]/60 backdrop-blur-md border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Featured
                </span>
              </div>
              
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 rounded-full text-[10px] font-medium bg-white/5 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a href={project.github} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                  <Code2 size={14} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="/projects" 
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent border border-purple-500/30 text-white text-xs font-medium hover:bg-purple-500/10 transition-all duration-300"
          >
            View All Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </RevealSection>
  );
};

export default Projects;