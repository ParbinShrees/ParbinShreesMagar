import React from 'react';

const SkillCategory = ({ title, icon, color, description, skills }) => (
  <div className="bg-white border border-[#d2d2d7] p-7 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
    {/* Decorative colored top line */}
    <div 
      className="absolute top-0 left-0 w-full h-1.5 transition-all duration-300"
      style={{ backgroundColor: color }}
    />
    
    <div>
      <div className="flex items-center gap-3 mb-2">
        <div 
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm shadow-sm"
          style={{ backgroundColor: color }}
        >
          <i className={`fas ${icon}`} />
        </div>
        <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight">{title}</h3>
      </div>
      <p className="text-xs text-[#86868b] font-medium mb-6">{description}</p>
      
      <ul className="flex flex-wrap gap-2">
        {skills.map(({ name, icon: sIcon }) => (
          <li 
            key={name} 
            className="text-xs font-semibold bg-[#f5f5f7] px-3.5 py-2 text-[#1d1d1f] rounded-full border border-[#d2d2d7] hover:bg-[#1d1d1f] hover:text-white hover:scale-105 shadow-xs transition-all duration-200 cursor-default flex items-center gap-1.5"
          >
            {sIcon && <i className={`${sIcon} text-xs opacity-75`} />}
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend & UI',
      icon: 'fa-desktop',
      color: '#0071e3',
      description: 'Component-driven user interfaces & modern web styling',
      skills: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'JavaScript (ES6+)', icon: 'fab fa-js' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind' },
        { name: 'Vite', icon: 'fas fa-bolt' },
        { name: 'Framer Motion', icon: 'fas fa-wave-square' },
        { name: 'HTML5 & CSS3', icon: 'fab fa-html5' },
        { name: 'Responsive UI', icon: 'fas fa-mobile-alt' },
      ]
    },
    {
      title: 'Backend & Systems',
      icon: 'fa-server',
      color: '#34c759',
      description: 'RESTful architectures, enterprise APIs & business logic',
      skills: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Spring Boot', icon: 'fas fa-leaf' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express', icon: 'fas fa-network-wired' },
        { name: 'REST APIs', icon: 'fas fa-exchange-alt' },
        { name: 'Spring Security', icon: 'fas fa-shield-alt' },
        { name: 'JWT Auth', icon: 'fas fa-key' },
      ]
    },
    {
      title: 'Embedded & Hardware',
      icon: 'fa-microchip',
      color: '#ff9f0a',
      description: 'Microcontrollers, physical computing & IoT circuits',
      skills: [
        { name: 'Arduino (C/C++)', icon: 'fas fa-microchip' },
        { name: 'Sensors & Actuators', icon: 'fas fa-satellite-dish' },
        { name: 'I2C / Serial Telemetry', icon: 'fas fa-broadcast-tower' },
        { name: 'Circuit Prototyping', icon: 'fas fa-plug' },
        { name: 'Hardware Control', icon: 'fas fa-robot' },
        { name: 'IoT Integration', icon: 'fas fa-wifi' },
      ]
    },
    {
      title: 'Databases & Tools',
      icon: 'fa-database',
      color: '#af52de',
      description: 'Relational data management & developer workflows',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-table' },
        { name: 'Git & GitHub', icon: 'fab fa-github' },
        { name: 'Postman', icon: 'fas fa-paper-plane' },
        { name: 'Maven', icon: 'fas fa-cubes' },
        { name: 'Vercel', icon: 'fas fa-cloud' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-[#0071e3] uppercase tracking-widest block mb-2">
            Technical Stack &amp; Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1.5 bg-[#0071e3] rounded-full mt-3"></div>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <SkillCategory key={group.title} {...group} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
