"use client";

import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { useEffect, useState } from 'react';
import { fetchProjectById, fetchProjects } from '../services/api';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the ID from the URL using useParams from next/navigation
  const [project, setProject] = useState(null);
  const [recentProjects, setRecentProjects] = useState([]);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false); // Track if fetching is completed

  useEffect(() => {
    const loadProjectDetails = async () => {
      try {
        // Fetch project details
        const projectData = await fetchProjectById(id);
        setProject(projectData);

        // Fetch recent projects
        const allProjects = await fetchProjects();
        // Filter out the current project from recent projects
        const recentProjectsData = allProjects.filter((p) => p.id !== id);
        setRecentProjects(recentProjectsData);

        setHasFetched(true); // Mark fetching as complete
      } catch (error) {
        console.error('Failed to fetch project details:', error);
        setError('Failed to load project details. Please try again later.');
        setHasFetched(true); // Mark fetching as complete even on error
      }
    };

    if (id) {
      loadProjectDetails();
    }
  }, [id]);

  // Display error message if there was an issue fetching data
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  // Display a message if no project is found and fetching is complete
  if (hasFetched && !project) return <div className="text-center py-4">Project not found</div>;

  const imageUrlPrefix = 'https://api.devriazul.com/storage/';

  return (
    <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Project Content */}
      <div className="lg:col-span-2">
        {project && (
          <>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <img
              src={`${imageUrlPrefix}${project.image}`}
              alt={project.title}
              className="w-full h-auto mb-4 rounded-lg shadow-md"
            />
            <p className="text-lg leading-relaxed">{project.content}</p>
          </>
        )}
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        {/* Categories */}
        <div className="mb-8 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Categories</h3>
          <hr className="border-gray-500 mb-4" />
          {/* Assuming categories are part of the project data */}
          <ul className="space-y-2">
            {project && project.categories && project.categories.map((category) => (
              <li key={category.slug}>
                <a href={`/projects/category/${category.slug}`} className="text-blue-500 hover:underline">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Projects */}
        <div className="dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Recent Projects</h3>
          <hr className="border-gray-500 mb-4" />
          <ul className="space-y-4">
            {recentProjects.length > 0 ? (
              recentProjects.map((recent) => (
                <li key={recent.id} className="flex items-start space-x-4">
                  <img
                    src={`${imageUrlPrefix}${recent.image}`}
                    alt={recent.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      <a href={`/projects/${recent.id}`} className="text-blue-500 hover:underline">
                        {recent.title}
                      </a>
                    </h4>
                    <p className="text-sm text-gray-500">{recent.content.substring(0, 100)}...</p>
                  </div>
                </li>
              ))
            ) : (
              <div>No recent projects available</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
