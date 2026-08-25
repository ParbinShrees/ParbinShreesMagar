import React, { useState } from 'react';
import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import roselleImg from '../projectpictures/roselle.png';
import javaWebAppImg from '../projectpictures/java_web_app.jpg';
import gymManagementImg from '../projectpictures/gym_management.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'roselle',
      title: "Roselle Storefront",
      category: "React · Web Application",
      filterType: "web",
      description: "A responsive e-commerce storefront for a boutique floral business in Pokhara, Nepal. Features product catalog browsing, cart management, and cash-on-delivery order placement.",
      fullDescription: "Roselle is a production web storefront built with React and Tailwind CSS for a handcrafted fuzzy-wire flower business in Pokhara. It provides a clean, mobile-first shopping experience allowing visitors to browse bouquet collections, customize orders, and submit orders directly via WhatsApp / Cash-on-Delivery.",
      features: [
        "Dynamic cart calculation with real-time quantity adjustments",
        "Responsive, mobile-optimized catalog layout with instant search",
        "Seamless Cash on Delivery (COD) order checkout workflow with automated WhatsApp order summary",
        "Modern component architecture built with React and Tailwind CSS"
      ],
      tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "Responsive Design"],
      repoUrl: "https://github.com/ParbinShrees",
      demoUrl: "https://roselle-np.vercel.app/",
      imageUrl: roselleImg
    },
    {
      id: 'java-web-app',
      title: "Java Web Application",
      category: "Java · Spring Boot · Web System",
      filterType: "web",
      description: "A multi-module web application built with Spring Boot and MySQL for managing orders, inventory stock, and payment processing workflows.",
      fullDescription: "A backend-focused Java web application structured as a multi-module Maven project. Built using Spring Boot and Spring Security, it handles role-based authorization, RESTful endpoints for order management, payment gateway integration, and relational data persistence in MySQL.",
      features: [
        "Role-based authentication & authorization using Spring Security",
        "REST API endpoints for order management and inventory synchronization",
        "Payment integration with transaction status webhooks",
        "Normalized MySQL relational schema with indexing for fast queries"
      ],
      tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST APIs", "Maven"],
      repoUrl: "https://github.com/ParbinShrees",
      demoUrl: "",
      imageUrl: javaWebAppImg
    },
    {
      id: 'gym-management',
      title: "Gym Management System",
      category: "Java · Desktop Application",
      filterType: "systems",
      description: "A Java desktop application for gym administrators to manage member registrations, subscription plans, fee payments, and attendance logs.",
      fullDescription: "A practical desktop management system built with Java and MySQL to replace manual paper record-keeping in local gyms. Features a clear GUI for tracking active/expired memberships, logging fee transactions, and generating member reports.",
      features: [
        "Member admission registration with profile tracking and renewal logs",
        "Automatic subscription expiration calculation and payment status alerts",
        "Reliable JDBC database connectivity with parameterized queries",
        "Summary reporting for monthly gym revenues and member counts"
      ],
      tags: ["Java", "MySQL", "JDBC", "Desktop UI", "Database Design"],
      repoUrl: "https://github.com/ParbinShrees",
      demoUrl: "",
      imageUrl: gymManagementImg
    }
  ];

  const filterTabs = [
    { key: 'all', label: 'All Work' },
    { key: 'web', label: 'Web Applications' },
    { key: 'hardware', label: 'Hardware & Arduino' },
    { key: 'systems', label: 'Desktop & Systems' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.filterType === activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider block mb-1">
              02 / Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Selected Work
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 bg-zinc-100 p-1 rounded-lg border border-zinc-200 self-start sm:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Hardware Project (Shown for All or Hardware) */}
        {(activeFilter === 'all' || activeFilter === 'hardware') && (
          <div className="mb-8">
            <FeaturedProjectCard onOpenModal={setSelectedProject} />
          </div>
        )}

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                {...project} 
                onOpenModal={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          activeFilter === 'hardware' ? null : (
            <p className="text-center text-zinc-500 text-sm py-12">
              No projects in this category.
            </p>
          )
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
