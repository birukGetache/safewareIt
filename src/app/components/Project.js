import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-xs mx-auto bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden mb-8">
      {/* Project Image */}
      <img src={project.imageUrl} alt={project.name} className="w-full h-64 object-cover" />

      <div className="px-6 py-4">
        {/* Project Name */}
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">{project.name}</h2>

        {/* Project Description */}
        <p className="text-lg text-gray-700 mb-4">{project.description}</p>

        {/* Project Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          Learn More
        </a>
      </div>

      <div className="px-6 py-4 bg-gray-900">
        <p className="text-gray-500 text-sm">
          Project created with care and dedication, aiming to deliver value and innovation.
        </p>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const projects = [
    {
      name: 'Innovative Tech Solution 1',
      description:
        'This project is a cutting-edge technology solution aimed at transforming industries through innovation and sustainability.',
      imageUrl: 'https://via.placeholder.com/800x400',
      link: 'https://www.example1.com',
    },
    {
      name: 'Innovative Tech Solution 2',
      description:
        'A sustainable approach to modern technology that reduces waste and increases efficiency in various sectors.',
      imageUrl: 'https://via.placeholder.com/800x400',
      link: 'https://www.example2.com',
    },
    {
      name: 'Innovative Tech Solution 3',
      description:
        'A revolutionary platform designed to connect people globally and empower communities through technology.',
      imageUrl: 'https://via.placeholder.com/800x400',
      link: 'https://www.example3.com',
    },
    {
      name: 'Innovative Tech Solution 4',
      description:
        'A technology-driven solution for improving healthcare services, ensuring accessibility and better patient outcomes.',
      imageUrl: 'https://via.placeholder.com/800x400',
      link: 'https://www.example4.com',
    },
    {
      name: 'Innovative Tech Solution 5',
      description:
        'A project focused on enhancing education through technology, providing accessible learning resources to all.',
      imageUrl: 'https://via.placeholder.com/800x400',
      link: 'https://www.example5.com',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Amazing Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
