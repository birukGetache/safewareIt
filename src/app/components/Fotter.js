import React from 'react';

const Footer = () => {
  const footerLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
  ];

  return (
    <footer className=" text-white py-12 border-gray-700" style={{borderTopWidth:"3px"}}>
      <div className="container mx-auto px-4">
        {/* Section 1: Logo and Description */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="w-24 h-24 rounded-full" />
            <p className="text-lg text-gray-300">
              Your trusted partner for innovative solutions. We deliver excellence in every project.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Gion. All rights reserved.
            </p>
          </div>
        </div>

        {/* Section 2: Links (Mapping through items) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">{link.name}</h3>
              <ul className="space-y-2">
                <li>
                  <a href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Section 3: Form */}
        <div className="bg-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center text-gray-300 mb-6">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-4 w-full max-w-xs rounded-lg text-gray-800"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
