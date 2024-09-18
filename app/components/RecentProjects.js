import Link from 'next/link';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      image: 'https://devriazul.com/uploads/projects/project1711739930.png',
      title: 'Pharmacy Management System',
      description: 'A pharmacy management system built using PHP and Laravel, with multiple payment gateways.',
      technologies: ['PHP', 'Laravel', 'Bootstrap'],
    },
    {
      id: 2,
      image: 'https://devriazul.com/uploads/projects/project1711739520.png',
      title: 'E-Commerce Platform',
      description: 'An online shopping platform built with React and Laravel, supporting multiple payment gateways.',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 3,
      image: 'https://devriazul.com/uploads/projects/project1711739742.png',
      title: 'Institute Management System',
      description: 'An institute management system built using PHP and Bootstrap, with multiple payment gateways.',
      technologies: ['Bootstrap', 'PHP'],
    },
    {
      id: 4,
      image: 'https://devriazul.com/uploads/projects/project1711740022.png',
      title: 'Library Management System',
      description: 'A library management system built using PHP and Bootstrap, with multiple payment gateways.',
      technologies: ['Bootstrap', 'PHP'],
    },
    // If you want to show exactly 4 projects, you can limit the array here
  ];

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
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-200 pt-3">{project.title}</h2>
            <p className="text-gray-400 mt-3">{project.description}</p>
            <div className="mt-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
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
