import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-xl border border-zinc-200 relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 border border-zinc-200 text-zinc-600 hover:text-zinc-950 flex items-center justify-center hover:bg-zinc-100 transition-colors"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-xs" />
          </button>

          {/* Project Image Banner */}
          {project.imageUrl && (
            <div className="w-full h-56 sm:h-64 bg-zinc-100 relative overflow-hidden border-b border-zinc-200 flex-shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-2.5">
                  Key Technical Details
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600">
                      <span className="text-zinc-400 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-zinc-100 px-2.5 py-1 text-zinc-700 rounded border border-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100">
              {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
                >
                  <i className="fas fa-external-link-alt text-[10px]" />
                  Visit Live Demo
                </a>
              )}
              {project.repoUrl && project.repoUrl !== '#' && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <i className="fab fa-github" />
                  GitHub Repository
                </a>
              )}
              <button
                onClick={onClose}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 px-3 py-2 transition-colors ml-auto cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
