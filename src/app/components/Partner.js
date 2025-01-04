import React from 'react';

const PartnerCard = ({ partner }) => {
  return (
    <div className="max-w-xs mx-auto bg-white bg-opacity-10 rounded-lg shadow-xl overflow-hidden mb-8">
      {/* Partner Logo */}
      <img
        src={partner.logoUrl}
        alt={partner.name}
        className="w-full h-32 object-contain mx-auto p-4"
      />

      <div className="px-6 py-4">
        {/* Partner Name */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{partner.name}</h2>

        {/* Partner Description */}
        <p className="text-lg text-gray-700 mb-4">{partner.description}</p>

        {/* Partner Link */}
        <a
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          Visit Website
        </a>
      </div>

      <div className="px-6 py-4 bg-gray-100">
        <p className="text-gray-500 text-sm">
          Our valued partner, committed to collaboration and innovation.
        </p>
      </div>
    </div>
  );
};

const PartnerPage = () => {
  const partners = [
    {
      name: 'Partner 1',
      description:
        'Partner 1 is a leading provider of innovative solutions with a focus on technology-driven growth.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner1.com',
    },
    {
      name: 'Partner 2',
      description:
        'Partner 2 excels in offering high-quality services in the field of finance and consulting.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner2.com',
    },
    {
      name: 'Partner 3',
      description:
        'Partner 3 specializes in creating cutting-edge designs and bringing creative visions to life.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner3.com',
    },
    {
      name: 'Partner 4',
      description:
        'Partner 4 focuses on advancing sustainable solutions for industries in need of eco-friendly practices.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner4.com',
    },
    {
      name: 'Partner 5',
      description:
        'Partner 5 is a technology firm dedicated to offering software solutions that enhance operational efficiency.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner5.com',
    },
  ];

  return (
    <div className="min-h-screen  py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Trusted Partners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
