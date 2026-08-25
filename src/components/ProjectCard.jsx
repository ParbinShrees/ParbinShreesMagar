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
    <div className="bg-white border border-[#d2d2d7] rounded-3xl overflow-hidden flex flex-col group hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition-all duration-300 h-full shadow-sm">
      
      {/* Image / Card Header */}
      <div 
        className="h-52 bg-[#f5f5f7] flex items-center justify-center border-b border-[#d2d2d7] overflow-hidden relative cursor-pointer"
        onClick={() => onOpenModal && onOpenModal(projectData)}
      >
        {imageUrl ? (
          <>
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                <i className="fas fa-search-plus" /> View Details
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-[#86868b] space-y-2 p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-[#d2d2d7] flex items-center justify-center text-[#0071e3] group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-code text-xl" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">{title}</span>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 
            className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight hover:text-[#0071e3] transition-colors cursor-pointer"
            onClick={() => onOpenModal && onOpenModal(projectData)}
          >
            {title}
          </h3>
        </div>
        <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wide mb-3">{category}</p>
        
        <p className="text-[#1d1d1f] font-medium text-sm sm:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-[11px] font-semibold bg-[#f5f5f7] px-2.5 py-1 text-[#1d1d1f] rounded-full border border-[#d2d2d7]">
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-[11px] font-semibold bg-[#f5f5f7] px-2 py-1 text-[#86868b] rounded-full border border-[#d2d2d7]">
              +{tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#d2d2d7] gap-3">
          <div className="flex items-center gap-3">
            {demoUrl && demoUrl !== '#' && demoUrl !== '' && (
              <a 
                href={demoUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0071e3] hover:text-[#0077ed] transition-colors flex items-center gap-1.5 bg-[#0071e3]/10 hover:bg-[#0071e3]/15 px-3 py-1.5 rounded-full"
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
                className="text-xs font-bold text-[#1d1d1f] hover:text-[#0071e3] transition-colors flex items-center gap-1.5"
              >
                <i className="fab fa-github text-sm" />
                Code
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={() => onOpenModal && onOpenModal(projectData)}
            className="text-xs font-semibold text-[#86868b] hover:text-[#1d1d1f] flex items-center gap-1 transition-colors cursor-pointer ml-auto"
          >
            Details <i className="fas fa-arrow-right text-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
