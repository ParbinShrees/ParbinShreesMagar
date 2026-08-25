import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5 & CSS3', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs', 'Spring Security', 'JWT Auth']
    },
    {
      title: 'Hardware & Embedded',
      skills: ['Arduino (C/C++)', 'IR / Ultrasonic Sensors', 'Servo Actuators', 'I2C & Serial Comms', 'Circuit Prototyping']
    },
    {
      title: 'Databases & Tools',
      skills: ['MySQL', 'PostgreSQL', 'Git & GitHub', 'Postman', 'Maven', 'Linux / CLI']
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider block mb-1">
            03 / Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* 4 Category Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat) => (
            <div 
              key={cat.title} 
              className="bg-white border border-zinc-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-colors"
            >
              <div>
                <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider mb-4 pb-2 border-b border-zinc-100 font-mono">
                  {cat.title}
                </h3>
                
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li 
                      key={skill}
                      className="text-xs font-mono text-zinc-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
