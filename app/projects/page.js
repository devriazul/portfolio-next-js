import React from "react";
import Link from "next/link";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'Anonymous Feedback App',
      description: 'A PHP-based feedback application that allows users to submit feedback anonymously.',
      technologies: ['PHP', 'Laravel', 'Bootstrap'],
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'An online shopping platform built with React and Laravel, supporting multiple payment gateways.',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio built using Next.js and Tailwind CSS, showcasing various projects.',
      technologies: ['Next.js', 'Tailwind CSS'],
    },
  ];

  return (
    <div className="p-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white shadow-md rounded-lg p-6 transform transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-gray-700 mt-4">{project.description}</p>
            <div className="mt-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Remove the <a> tag, just use <Link> */}
            <Link href={`/projects/${project.id}`} className="text-blue-500 font-bold mt-4 inline-block hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
