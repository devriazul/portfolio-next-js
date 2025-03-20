"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import the JSON data
import projectsData from "../../data/db.json"; // Adjust this path based on your project structure

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the JSON file
    const loadProjects = () => {
      try {
        // Assuming projectsData is structured with a key 'projects'
        const data = projectsData.projects || []; // Fallback to empty array if 'projects' is undefined
        
        // Sort projects in descending order by ID (or any other relevant property)
        const sortedProjects = data.sort((a, b) => b.id - a.id);
        
        setProjects(sortedProjects);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };

    loadProjects();
  }, []);

  const imageUrlPrefix = "../images/"; // Update to your image path if needed

  return (
    <div className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-100">Recent Projects</h1>
        {projects.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-400">Loading projects...</div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="mySwiper pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/30 shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
                  <div className="relative">
                    <img
                      src={`${imageUrlPrefix}${project.image}`}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.category && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-xs font-medium rounded-full border border-blue-500/20">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6 relative z-10">
                    <h2 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description || "Description not available."}
                    </p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-600/30 hover:text-blue-200 group-hover:translate-x-1"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
