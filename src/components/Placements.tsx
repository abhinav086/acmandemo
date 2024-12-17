import React from 'react';

export default function Placements() {
  const companies = [
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?fit=crop&w=200&h=100",
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?fit=crop&w=200&h=100",
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?fit=crop&w=200&h=100",
    },
    {
      name: "Deloitte",
      logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?fit=crop&w=200&h=100",
    },
    {
      name: "IBM",
      logo: "https://images.unsplash.com/photo-1569017388730-020b5f80a004?fit=crop&w=200&h=100",
    },
    {
      name: "Accenture",
      logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?fit=crop&w=200&h=100",
    }
  ];

  const stats = [
    { label: "Average Package", value: "₹8.5 LPA" },
    { label: "Highest Package", value: "₹24 LPA" },
    { label: "Placement Rate", value: "95%" },
    { label: "Recruiting Partners", value: "100+" }
  ];

  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Placement Partners</h2>
          <p className="text-xl text-gray-600">Our students are placed in top companies worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-sky-400">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}