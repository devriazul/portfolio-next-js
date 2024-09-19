// app/components/RecentProjects.js

"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchProjects } from '../services/api';

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    loadProjects();
  }, []);

  const imageUrlPrefix = 'https://api.devriazul.com/storage/';

  return (
    <div className="p-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.slice(0, 4).map((project) => (
          <div
            key={project.id}
            className="dark:bg-gray-800 shadow-md rounded-lg p-5 transform transition-transform hover:scale-105"
          >
            <img
              src={`${imageUrlPrefix}${project.image}`}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-200 pt-3">{project.title}</h2>
            <p className="text-gray-400 mt-3">{project.description}</p>
            <Link
              href={`/projects/${project.id}`}
              className="text-blue-500 font-bold mt-4 inline-block hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
