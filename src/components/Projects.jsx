import React from 'react';
import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectCard from './ProjectCard';
import roselleImg from '../projectpictures/roselle.png';

const Projects = () => {
  const otherProjects = [
    {
      title: "Roselle",
      category: "React · Web Application",
      description: "A responsive e-commerce storefront for handcrafted fuzzy-wire floral bouquets based in Pokhara. Features a clean, modern UI for browsing bouquet styles, new arrivals, and handling cash-on-delivery orders.",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      repoUrl: "#",
      demoUrl: "https://roselle-np.vercel.app/",
      imageUrl: roselleImg
    },
    {
      title: "Java Web Application",
      category: "Java · Web Application · Team Project",
      description: "A web application built collaboratively with a team, featuring integrated payment processing and [fill in: whatever else it actually does]. My specific contribution was [fill in role].",
      tags: ["Java", "Spring Boot", "Payment Gateway", "MySQL"],
      repoUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Gym Management System",
      category: "Java · Management System",
      description: "A Java-based system for handling day-to-day gym operations including member registration, membership tracking, and [fill in: attendance/billing/scheduling].",
      tags: ["Java", "MySQL", "Swing/JavaFX"],
      repoUrl: "#",
      demoUrl: ""
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-[#1D3629]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-mono font-bold text-[#EDE8DD] mb-2">Selected Projects</h2>
          <div className="w-12 h-1 bg-[#C6903F]"></div>
        </div>

        {/* Featured Project */}
        <FeaturedProjectCard />

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
