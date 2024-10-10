"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

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
    <div className="pt-8 pb-3 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8">Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {projects.slice(0, 5).map((project) => (
          <div
            key={project.id}
            className="dark:bg-gray-800 shadow-md rounded-lg px-5 pt-5 pb-3 transform transition-transform hover:scale-105"
          >
            <img
              src={`${imageUrlPrefix}${project.image}`}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-md font-bold text-gray-200 pt-3">
              {project.title}
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              {/* Safety check for project.description */}
              {project.description && project.description.length > 80
                ? `${project.description.slice(0, 80)}...`
                : project.description || "Description not available."}
            </p>
            <Link
              href={`/projects/${project.id}`}
              className="text-blue-500 jus mt-4 bg-slate-900 text-indigo-200 px-4 py-1 text-sm inline-block hover:underline rounded-2xl"
            >
              Read Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
