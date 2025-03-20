"use client";
import { useState, useEffect } from 'react';
import projectsData from '../../data/db.json';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = () => {
      try {
        const data = projectsData.projects || [];
        setProjects(data);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, []);

  const categories = ['all', ...new Set(projects.map(project => project.category || 'uncategorized'))];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-400">
            Explore my latest work and creative endeavors
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={`/images/${project.image}`}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-600/30 hover:text-blue-200 group-hover:translate-x-1"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
