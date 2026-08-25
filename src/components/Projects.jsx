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
      title: "Roselle",
      category: "React · Web Application",
      filterType: "web",
      description: "A responsive e-commerce storefront for handcrafted fuzzy-wire floral bouquets based in Pokhara. Features a clean, modern UI for browsing bouquet styles, new arrivals, and handling cash-on-delivery orders.",
      fullDescription: "Roselle is a production e-commerce web storefront built with React and Tailwind CSS for a boutique floral business in Pokhara, Nepal. Designed with an Apple-inspired minimalist aesthetic, it allows customers to browse handcrafted fuzzy-wire floral arrangements, view product specifications, manage a dynamic shopping cart, and place instant Cash-on-Delivery (COD) orders with WhatsApp integration.",
      features: [
        "Dynamic cart management with automatic total price calculation and item quantity controls",
        "Responsive, mobile-optimized catalog layout with lazy loading and instant search filtering",
        "Seamless Cash on Delivery (COD) order checkout workflow with automated message generation",
        "Modern component-driven architecture built on React 19, Vite, and Tailwind CSS"
      ],
      tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "Responsive UI"],
      repoUrl: "https://github.com/ParbinShrees",
      demoUrl: "https://roselle-np.vercel.app/",
      imageUrl: roselleImg
    },
    {
      id: 'java-web-app',
      title: "Java Web Application",
      category: "Java · Spring Boot · Enterprise Web App",
      filterType: "web",
      description: "A multi-module enterprise web application built collaboratively with a team, featuring integrated payment processing, inventory tracking, and secure role-based access.",
      fullDescription: "An enterprise-grade Java web application designed with a clean multi-module architecture. It delivers robust backend REST APIs using Spring Boot, Spring Security for authentication and role-based permissions, and a MySQL relational database for transactional consistency across orders, inventory, and payment processing.",
      features: [
        "Secure user authentication and role-based authorization using Spring Security & JWT tokens",
        "RESTful API endpoints for order orchestration, inventory decrement, and customer lifecycle",
        "Integrated payment gateway API integration with automated order status webhooks",
        "Relational schema design with normalized tables, foreign key constraints, and indexing in MySQL"
      ],
      tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "REST APIs", "Maven"],
      repoUrl: "https://github.com/ParbinShrees",
      demoUrl: "",
      imageUrl: javaWebAppImg
    },
    {
      id: 'gym-management',
      title: "Gym Management System",
      category: "Java · Desktop System · Management",
      filterType: "systems",
      description: "A Java-based desktop application for handling day-to-day gym operations including member registration, membership detail tracking, fee status, and attendance records.",
      fullDescription: "A robust desktop management system built using Java and MySQL to automate gym administrative workflows. Gym owners can record member admissions, track active/expired membership plans, generate fee payment receipts, and monitor daily attendance records through an intuitive, fast desktop GUI.",
      features: [
        "Comprehensive member registration, profile management, and photo attachment support",
        "Automated membership expiry calculations and overdue fee alerts",
        "Secure JDBC database connectivity with parameterized queries for SQL injection prevention",
        "Exportable financial summaries and printable member billing invoices"
      ],
      tags: ["Java", "MySQL", "JDBC", "Desktop UI", "Database Design"],
      repoUrl: "https://github.com/ParbinShrees",
      demoUrl: "",
      imageUrl: gymManagementImg
    }
  ];

  const filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Full-Stack & Web' },
    { key: 'hardware', label: 'Hardware & IoT' },
    { key: 'systems', label: 'Desktop & Systems' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.filterType === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header with kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-[#0071e3] uppercase tracking-widest block mb-2">
              Portfolio Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">
              Featured Work &amp; Systems
            </h2>
            <div className="w-16 h-1.5 bg-[#0071e3] rounded-full mt-3"></div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#f5f5f7] p-1.5 rounded-full border border-[#d2d2d7] self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-white text-[#1d1d1f] shadow-sm font-bold'
                    : 'text-[#86868b] hover:text-[#1d1d1f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project (DuoPong) - Show for All or Hardware filter */}
        {(activeFilter === 'all' || activeFilter === 'hardware') && (
          <div className="mb-12">
            <FeaturedProjectCard onOpenModal={setSelectedProject} />
          </div>
        )}

        {/* Other Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                {...project} 
                onOpenModal={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          activeFilter === 'hardware' ? (
            <p className="text-center text-[#86868b] text-sm py-8 font-medium">
              See the featured hardware arcade build above!
            </p>
          ) : (
            <p className="text-center text-[#86868b] text-sm py-12 font-medium">
              No projects in this category currently.
            </p>
          )
        )}

        {/* Project Details Modal */}
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
