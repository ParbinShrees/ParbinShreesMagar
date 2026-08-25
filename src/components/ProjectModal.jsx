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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#d2d2d7] relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-[#d2d2d7] text-[#1d1d1f] flex items-center justify-center hover:bg-[#f5f5f7] hover:scale-105 active:scale-95 transition-all shadow-sm"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Project Image Banner */}
          {project.imageUrl && (
            <div className="w-full h-64 sm:h-72 bg-[#f5f5f7] relative overflow-hidden border-b border-[#d2d2d7] flex-shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-md text-[#1d1d1f] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-white/40">
                {project.category}
              </span>
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-base text-[#86868b] font-medium leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-3">
                  Key Highlights & Architecture
                </h4>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1d1d1f] font-medium">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center text-xs mt-0.5">
                        <i className="fas fa-check text-[10px]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-[#f5f5f7] px-3 py-1.5 text-[#1d1d1f] rounded-full border border-[#d2d2d7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-[#d2d2d7]">
              {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold bg-[#0071e3] text-white px-5 py-2.5 rounded-full hover:bg-[#0077ed] hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <i className="fas fa-external-link-alt text-xs" />
                  Live Preview
                </a>
              )}
              {project.repoUrl && project.repoUrl !== '#' && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold bg-[#1d1d1f] text-white px-5 py-2.5 rounded-full hover:bg-[#333336] hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <i className="fab fa-github text-sm" />
                  Source Code
                </a>
              )}
              <button
                onClick={onClose}
                className="text-sm font-semibold border border-[#d2d2d7] text-[#1d1d1f] bg-transparent px-5 py-2.5 rounded-full hover:bg-[#f5f5f7] active:scale-95 transition-all ml-auto cursor-pointer"
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
