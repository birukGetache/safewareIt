import React from 'react';

const PartnerCard = ({ partner }) => {
  return (
    <div className="max-w-xs mx-auto bg-white bg-opacity-10 rounded-full p-10  shadow-xl overflow-hidden mb-8  border-green-600 " style={{borderWidth:"3px"}}>
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
    </div>
  );
};

const PartnerPage = ({isVisible}) => {
  const partners = [
    {
      name: 'Partner 1',
      description:
        'Partner 1 is a leading provider of innovative solutions with a focus on technology-driven growth.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner1.com',
    },
    {
      name: 'Partner 1',
      description:
        'Partner 1 is a leading provider of innovative solutions with a focus on technology-driven growth.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner1.com',
    },
    {
      name: 'Partner 1',
      description:
        'Partner 1 is a leading provider of innovative solutions with a focus on technology-driven growth.',
      logoUrl: 'https://via.placeholder.com/150',
      link: 'https://www.partner1.com',
    },
  ];

  return (
    <section
    className={`container mx-auto px-4 py-12 service transition-opacity duration-500 ease-in-out ${
      isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
    }`}
    id="partner"
  >
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
    </section>
  );
};

export default PartnerPage;
