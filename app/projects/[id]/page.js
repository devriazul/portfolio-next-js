import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Devriazul Portfolio || Project Details",
  description: "Detailed information about each project on Devriazul's portfolio.",
};

export default function ProjectPage({ params }) {
  const { id } = params;

  // Example project data with realistic features
  const projects = [
    {
      id: 1,
      image: 'https://devriazul.com/uploads/projects/project1711739930.png',
      title: 'Pharmacy Management System',
      description: 'A comprehensive pharmacy management system built using PHP and Laravel, streamlining the entire pharmacy operation with multiple payment gateways for flexibility.',
      technologies: ['PHP', 'Laravel', 'Bootstrap'],
      features: [
        'Inventory Tracking: Automatically updates inventory with every sale or purchase.',
        'Prescription Management: Easily manage and validate prescriptions with a built-in system.',
        'Multi-Payment Gateways: Supports Stripe, PayPal, and local gateways for seamless transactions.'
      ],
    },
    {
      id: 2,
      image: 'https://devriazul.com/uploads/projects/project1711739520.png',
      title: 'E-Commerce Platform',
      description: 'An advanced e-commerce platform developed using React and Laravel, providing customers with a seamless shopping experience.',
      technologies: ['React', 'Laravel', 'MySQL'],
      features: [
        'Product Search & Filters: Advanced search and filtering options to find products quickly.',
        'Secure Payment Gateways: Integration with multiple payment methods including Stripe, PayPal, and Apple Pay.',
        'Customer Management: A robust CRM to manage customer data and track sales analytics.'
      ],
    },
    {
      id: 3,
      image: 'https://devriazul.com/uploads/projects/project1711739742.png',
      title: 'Institute Management System',
      description: 'An all-in-one institute management system designed for educational institutions to manage students, courses, and faculty seamlessly.',
      technologies: ['Bootstrap', 'PHP'],
      features: [
        'Student Management: Manage student records, grades, and attendance with ease.',
        'Course Enrollment: Streamlined enrollment process for students to register for courses online.',
        'Faculty Dashboard: Provides faculty with an intuitive interface for managing classes and grading.'
      ],
    },
    {
      id: 4,
      image: 'https://devriazul.com/uploads/projects/project1711740022.png',
      title: 'Library Management System',
      description: 'A fully featured library management system designed to automate book lending, returns, and inventory tracking.',
      technologies: ['Bootstrap', 'PHP'],
      features: [
        'Book Catalog: Comprehensive cataloging system with search and filter functionalities.',
        'Lending Management: Automatically tracks lending and returns, with late fees calculated.',
        'User Authentication: Members and staff can log in to manage their accounts, lending history, and fines.'
      ],
    },
    {
      id: 5,
      image: 'https://devriazul.com/uploads/projects/project1711739879.png',
      title: 'Inventory Management System',
      description: 'A powerful inventory management system designed to help businesses track stock levels, sales, and purchases in real-time.',
      technologies: ['Bootstrap', 'CodeIgniter', 'PHP'],
      features: [
        'Real-Time Stock Updates: Tracks stock levels in real-time, providing instant updates on inventory.',
        'Supplier Management: Easily manage supplier data and purchase orders.',
        'Reporting: Generate detailed reports on inventory, sales, and restocking needs.'
      ],
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
    <div className="p-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside mb-6">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link href="/projects" className="text-blue-500 font-bold mt-6 inline-block hover:underline">
              Back to Projects
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
