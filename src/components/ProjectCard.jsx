import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ title, category, description, fullDescription, features, tags, repoUrl, demoUrl, imageUrl, onOpenModal }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const projectData = {
    title,
    category,
    description,
    fullDescription,
    features,
    tags,
    repoUrl,
    demoUrl,
    imageUrl
  };

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/90 rounded-2xl overflow-hidden shadow-xs hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col h-full group"
    >
      
      {/* Project Image */}
      <div 
        className="h-44 sm:h-48 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-700/80 overflow-hidden relative cursor-pointer"
        onClick={() => onOpenModal && onOpenModal(projectData)}
        style={{ transform: "translateZ(30px)" }}
      >
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        ) : null}
        <div className="flex flex-col items-center justify-center h-full text-zinc-400 dark:text-zinc-600 p-4" style={{ display: imageUrl ? 'none' : 'flex' }}>
          <i className="fas fa-laptop-code text-2xl mb-1" />
          <span className="text-xs font-mono">{title}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4" style={{ transform: "translateZ(20px)" }}>
        <div>
          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-1">
            {category}
          </span>
          <h3 
            className="text-lg font-bold text-zinc-950 dark:text-zinc-50 tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer mb-2"
            onClick={() => onOpenModal && onOpenModal(projectData)}
          >
            {title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[11px] font-mono bg-zinc-100 dark:bg-zinc-700/50 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700/50">
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-[11px] font-mono text-zinc-400 px-1 py-0.5">
                +{tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-700 text-xs">
            <div className="flex items-center gap-3">
              {demoUrl && demoUrl !== '#' && demoUrl !== '' && (
                <a 
                  href={demoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 py-1"
                >
                  <i className="fas fa-external-link-alt text-[10px]" />
                  Live Demo
                </a>
              )}
              {repoUrl && repoUrl !== '#' && (
                <a 
                  href={repoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 flex items-center gap-1 py-1"
                >
                  <i className="fab fa-github" />
                  Code
                </a>
              )}
            </div>
            
            <button
              type="button"
              onClick={() => onOpenModal && onOpenModal(projectData)}
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 font-medium transition-colors cursor-pointer py-1"
            >
              Details →
            </button>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;
