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
      description: "A multi-module web application built collaboratively with a team, featuring integrated payment processing for managing orders and inventory. My contribution was backend development — designing the Spring Boot REST APIs and MySQL schema.",
      tags: ["Java", "Spring Boot", "Payment Gateway", "MySQL"],
      repoUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Gym Management System",
      category: "Java · Management System",
      description: "A Java-based desktop application for handling day-to-day gym operations including member registration, membership detail tracking, and a simple, clean UI for managing member records.",
      tags: ["Java", "MySQL", "Swing/JavaFX"],
      repoUrl: "#",
      demoUrl: ""
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Selected Projects</h2>
          <div className="w-16 h-1.5 bg-[#0071e3] rounded-full"></div>
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
