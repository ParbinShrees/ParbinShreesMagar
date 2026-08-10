import React from 'react';

const ProjectCard = ({ title, category, description, tags, repoUrl, demoUrl, imageUrl }) => {
  return (
    <div className="bg-white border border-[#d2d2d7] rounded-3xl overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 h-full shadow-sm">
      
      {/* Image / Card Header */}
      <div className="h-48 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] flex items-center justify-center border-b border-[#d2d2d7] overflow-hidden relative group-hover:bg-[#f0f0f5] transition-colors">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-[#86868b] space-y-2">
            <svg className="w-10 h-10 text-[#0071e3]/60 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">{title}</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#1d1d1f] mb-1 tracking-tight">{title}</h3>
        <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wide mb-4">{category}</p>
        
        <p className="text-[#1d1d1f] font-medium text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="text-[11px] font-semibold bg-[#f5f5f7] px-2.5 py-1 text-[#1d1d1f] rounded-full border border-[#d2d2d7]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-[#d2d2d7]">
          {repoUrl && (
            <a 
              href={repoUrl} 
              className="text-xs font-semibold text-[#0071e3] hover:text-[#0077ed] transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              className="text-xs font-semibold text-[#0071e3] hover:text-[#0077ed] transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
