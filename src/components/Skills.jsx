import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="bg-white border border-[#d2d2d7] p-8 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow">
    {/* Decorative trace line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#0071e3] transition-colors"></div>
    
    <h3 className="text-2xl font-bold text-[#1d1d1f] mb-6">{title}</h3>
    <ul className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <li 
          key={skill} 
          className="text-sm font-medium bg-[#f5f5f7] px-4 py-2 text-[#1d1d1f] rounded-full border border-[#d2d2d7] hover:bg-[#1d1d1f] hover:text-white hover:scale-105 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Skills & Technologies</h2>
          <div className="w-16 h-1.5 bg-[#0071e3] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCategory 
            title="Software" 
            skills={['Java', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'Express', 'Tailwind CSS']}
          />
          <SkillCategory 
            title="Embedded / Hardware" 
            skills={['Arduino (C/C++)', 'Sensors & Actuators', 'Circuit Prototyping', 'IoT Integration', 'Microcontrollers']}
          />
          <SkillCategory 
            title="Tools & Databases" 
            skills={['Git', 'GitHub', 'VS Code', 'MySQL', 'PostgreSQL', 'Vercel']}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
