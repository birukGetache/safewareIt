import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle as faSolidUserCircle } from '@fortawesome/free-solid-svg-icons';

const teamMembers = [
  {
    id: 1,
    name: 'Abrish',
    role: 'CEO',
    image: '/logo.jpg',
    linkedin: 'https://linkedin.com/in/abrish',
    twitter: 'https://twitter.com/abrish',
    profile: 'https://example.com/abrish',
  },
  {
    id: 2,
    name: 'Abiy',
    role: 'Product Manager',
    image: '/logo.jpg',
    linkedin: 'https://linkedin.com/in/abiy',
    twitter: 'https://twitter.com/abiy',
    profile: 'https://example.com/abiy',
  },
  {
    id: 3,
    name: 'Fric',
    role: 'Backend',
    image: '/logo.jpg',
    linkedin: 'https://linkedin.com/in/fric',
    twitter: 'https://twitter.com/fric',
    profile: 'https://example.com/fric',
  },
  {
    id: 4,
    name: 'Birukf',
    role: 'Frontend',
    image: '/logo.jpg',
    linkedin: 'https://linkedin.com/in/birukf',
    twitter: 'https://twitter.com/birukf',
    profile: 'https://example.com/birukf',
  },
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 p-10 border-green-600"
            style={{borderWidth:"5px"}}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[150px] h-[150px] m-auto object-cover rounded-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-600">{member.name}</h3>
              <p className="text-gray-500 mt-2">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                {/* Twitter Link */}
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                {/* Profile Link */}
                <a
                  href={member.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-600"
                >
                  <FontAwesomeIcon icon={faSolidUserCircle} color="white" size="lg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
