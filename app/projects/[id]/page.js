"use client"; // Declare this as a client component
import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import projectsData from '../../../data/db.json'; // Ensure this path is correct
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProjectDetails() {
  const { id } = useParams(); // Get the ID directly from URL parameters
  const [project, setProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    if (id) {
      const foundProject = projectsData.projects.find((p) => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
      }
    }
    // Get the 5 most recent projects
    const sortedProjects = projectsData.projects.sort((a, b) => b.id - a.id);
    setRecentProjects(sortedProjects.slice(0, 5));
  }, [id]);

  if (!id) {
    return <div>Loading...</div>; // Show loading if `id` is not available yet
  }

  if (!project) {
    return <div className="text-center text-gray-400">Project not found</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 dark:bg-gray-900 flex">
      {/* Main project details section */}
      <div className="flex-1 max-w-3xl mr-8">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <img
          src={`./../images/${project.image}`} // Ensure correct path to the project image
          alt={project.title}
          className="object-cover rounded-lg mb-6"
        />
        <p className="text-gray-400 mb-6">{project.description}</p>
      </div>

      {/* Sidebar with search box and recent projects */}
      <div className="w-1/3 bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Search</h2>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-600 rounded-lg bg-gray-700 text-white"
        />

        <h2 className="text-2xl font-bold mb-4 text-gray-200">Recent Projects</h2>
        <ul>
          {recentProjects
            .filter(recentProject => recentProject.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((recentProject) => (
              <li key={recentProject.id} className="mb-3 flex items-center">
                <Link href={`/projects/${recentProject.id}`} className="flex items-center text-blue-500 hover:underline">
                  <img
                    src={`./../images/${recentProject.image}`} // Ensure correct path to the recent project image
                    alt={recentProject.title}
                    className="h-16 object-cover rounded mr-3" // Adjust size as needed
                  />
                  <span>{recentProject.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
