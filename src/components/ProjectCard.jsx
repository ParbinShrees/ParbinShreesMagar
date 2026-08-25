import React from 'react';

const ProjectCard = ({ title, category, description, fullDescription, features, tags, repoUrl, demoUrl, imageUrl, onOpenModal }) => {
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
    <div className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-zinc-300 transition-all duration-200 flex flex-col h-full group">
      
      {/* Project Image */}
      <div 
        className="h-48 bg-zinc-100 border-b border-zinc-200/80 overflow-hidden relative cursor-pointer"
        onClick={() => onOpenModal && onOpenModal(projectData)}
      >
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-zinc-400 p-4">
            <i className="fas fa-laptop-code text-2xl mb-1" />
            <span className="text-xs font-mono">{title}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
            {category}
          </span>
          <h3 
            className="text-lg font-bold text-zinc-950 tracking-tight hover:text-blue-600 transition-colors cursor-pointer mb-2"
            onClick={() => onOpenModal && onOpenModal(projectData)}
          >
            {title}
          </h3>
          <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[11px] font-mono bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200">
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-[11px] font-mono text-zinc-400 px-1 py-0.5">
                +{tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-100 text-xs">
            <div className="flex items-center gap-3">
              {demoUrl && demoUrl !== '#' && demoUrl !== '' && (
                <a 
                  href={demoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
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
                  className="font-medium text-zinc-600 hover:text-zinc-950 flex items-center gap-1"
                >
                  <i className="fab fa-github" />
                  Code
                </a>
              )}
            </div>
            
            <button
              type="button"
              onClick={() => onOpenModal && onOpenModal(projectData)}
              className="text-zinc-400 hover:text-zinc-900 font-medium transition-colors cursor-pointer"
            >
              Details →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
