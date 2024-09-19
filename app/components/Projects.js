"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchProjects } from '../services/api';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false); // Track if fetching is completed

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setHasFetched(true); // Mark fetching as complete
      }
    };

    loadProjects();
  }, []);

  // Display error message if there was an issue fetching data
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  // Display a message if no projects are available and fetching is complete
  if (hasFetched && projects.length === 0) return <div className="text-center py-4 text-gray-400">No projects available</div>;

  const imageUrlPrefix = 'https://api.devriazul.com/storage/';

  return (
    <div className="p-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-gray-800 shadow-md rounded-lg p-5 transform transition-transform hover:scale-105"
          >
            <img
              src={project.image ? `${imageUrlPrefix}${project.image}` : '/default-image.jpg'} // Handle missing images
              alt={project.title || 'Project Image'}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-200 pt-3">{project.title || 'Untitled'}</h2>
            <p className="text-gray-400 mt-3">{project.content || 'No description available'}</p>
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
}
