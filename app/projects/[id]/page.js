import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Devriazul Portfolio || Project Details",
  description: "Detailed information about each project on Devriazul's portfolio.",
};

export default function ProjectPage({ params }) {
  const { id } = params;

  // Example project data
  const projects = [
    {
      id: 1,
      title: 'Anonymous Feedback App',
      description: 'A PHP-based feedback application that allows users to submit feedback anonymously.',
      features: [
        'Anonymous feedback submission',
        'File-based storage without a database',
        'User login and dashboard',
      ],
      technologies: ['PHP', 'Laravel', 'Bootstrap'],
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'An online shopping platform built with React and Laravel, supporting multiple payment gateways.',
      features: [
        'Product management',
        'Cart and checkout',
        'Payment integration',
      ],
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio built using Next.js and Tailwind CSS, showcasing various projects.',
      features: [
        'Responsive design',
        'Fast and optimized for SEO',
        'Built-in contact form',
      ],
      technologies: ['Next.js', 'Tailwind CSS'],
    },
  ];

  // Find the project by ID
  const project = projects.find((project) => project.id === parseInt(id));

  // If project not found, trigger 404
  if (!project) {
    notFound();
    return null; // This line will not be executed, but is required for return type
  }

  return (
    <div className=" p-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>

        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside mb-6">
            {project.features.map((feature, index) => (
            <li key={index} className="text-gray-700">{feature}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap">
            {project.technologies.map((tech, index) => (
            <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            >
                {tech}
            </span>
            ))}
        </div>

        {/* Corrected Link usage */}
        <Link href="/projects" className="text-blue-500 font-bold mt-6 inline-block hover:underline">
            Back to Projects
        </Link>
      </div>
    </div>
  );
}
