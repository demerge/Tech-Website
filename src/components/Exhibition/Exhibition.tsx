import React, { useState } from 'react';
import ExhibitionBooth from './ExhibitionBooth';

const exhibitors = [
  {
    company: 'CloudScale Systems',
    logo: 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&w=800&q=80',
    description: 'Leading provider of cloud infrastructure and scaling solutions.',
    category: 'Cloud Computing',
    website: 'https://example.com'
  },
  {
    company: 'AI Dynamics',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Enterprise AI solutions and machine learning platforms.',
    category: 'Artificial Intelligence',
    website: 'https://example.com'
  },
  {
    company: 'SecureBlock',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    description: 'Blockchain security and smart contract development.',
    category: 'Blockchain',
    website: 'https://example.com'
  },
  {
    company: 'IoT Solutions',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'Connected device platforms and IoT infrastructure.',
    category: 'IoT',
    website: 'https://example.com'
  },
  {
    company: 'DataViz Pro',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Data visualization and analytics solutions.',
    category: 'Data Analytics',
    website: 'https://example.com'
  },
  {
    company: 'DevOps Tools',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive DevOps and CI/CD solutions.',
    category: 'DevOps',
    website: 'https://example.com'
  }
];

const categories = ['All', 'Cloud Computing', 'Artificial Intelligence', 'Blockchain', 'IoT', 'Data Analytics', 'DevOps'];

export default function Exhibition() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredExhibitors = activeCategory === 'All'
    ? exhibitors
    : exhibitors.filter(exhibitor => exhibitor.category === activeCategory);

  return (
    <section className="py-20 bg-black" id="exhibition">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Virtual Exhibition Hall</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Explore cutting-edge technologies and connect with leading companies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibitors.map((exhibitor) => (
            <ExhibitionBooth key={exhibitor.company} {...exhibitor} />
          ))}
        </div>
      </div>
    </section>
  );
}