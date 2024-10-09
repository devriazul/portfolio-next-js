"use client"; // Declare this as a client component
import projectsData from '../../data/db.json'; // Ensure this path is correct
import Link from 'next/link';

export default function Projects() {
  const projects = projectsData.projects; // Assuming your db.json has a projects array

  if (!projects || projects.length === 0) {
    return <div className="text-center text-gray-400">No projects available</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="dark:bg-gray-800 shadow-md rounded-lg p-5">
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-200 pt-3">{project.title}</h2>
            <p className="text-gray-400 mt-3">{project.description}</p>
            <Link href={`/projects/${project.id}`}>
              <span className="text-blue-500 font-bold mt-4 inline-block hover:underline">View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
