import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="bg-[#1D3629] border border-[#15291F] p-6 rounded-lg relative overflow-hidden group hover:border-[#C6903F]/50 transition-colors">
    {/* Decorative trace line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-[#15291F] group-hover:bg-[#C6903F]/30 transition-colors"></div>
    
    <h3 className="font-mono text-xl text-[#C6903F] mb-4">{title}</h3>
    <ul className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <li 
          key={skill} 
          className="font-mono text-sm bg-[#15291F] border border-[#2A4B3A] px-3 py-1 text-[#EDE8DD] opacity-90 rounded"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-[#1D3629]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-mono font-bold text-[#EDE8DD] mb-2">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-[#C6903F]"></div>
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
