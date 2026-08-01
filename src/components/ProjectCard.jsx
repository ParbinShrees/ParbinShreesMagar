import React from 'react';

const ProjectCard = ({ title, category, description, tags, repoUrl, demoUrl, imageUrl }) => {
  return (
    <div className="bg-[#1D3629] border border-[#15291F] rounded-lg overflow-hidden flex flex-col group hover:border-[#C6903F]/50 transition-colors h-full">
      
      {/* Image / Placeholder */}
      <div className="h-48 bg-[#15291F] flex items-center justify-center border-b border-[#15291F] group-hover:border-[#C6903F]/30 transition-colors overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        ) : null}
        <span className={`font-mono text-xs opacity-50 text-[#EDE8DD] ${imageUrl ? 'hidden' : 'block'}`}>
          [Add project screenshot here]
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-mono text-[#EDE8DD] mb-1">{title}</h3>
        <p className="font-mono text-xs text-[#C6903F] mb-4">{category}</p>
        
        <p className="text-[#EDE8DD] opacity-80 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="font-mono text-[10px] bg-[#15291F] px-2 py-1 text-[#EDE8DD] opacity-70 rounded border border-[#2A4B3A]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-[#15291F]">
          {repoUrl && (
            <a 
              href={repoUrl} 
              className="font-mono text-xs font-bold text-[#EDE8DD] hover:text-[#C6903F] transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              className="font-mono text-xs font-bold text-[#EDE8DD] hover:text-[#C6903F] transition-colors flex items-center gap-1"
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
