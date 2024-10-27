import React from 'react';
import SpeakerCard from './SpeakerCard';

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Director',
    company: 'TechVision Labs',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Leading researcher in artificial intelligence and machine learning, focusing on enterprise AI applications.',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      website: 'https://example.com'
    }
  },
  {
    name: 'James Wilson',
    role: 'Chief Architect',
    company: 'CloudScale Systems',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in building scalable cloud architectures and distributed systems.',
    social: {
      linkedin: 'https://linkedin.com',
      website: 'https://example.com'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Engineering',
    company: 'Future Stack',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    bio: 'Pioneer in cloud-native technologies and modern application development.',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Dr. Alex Kumar',
    role: 'Quantum Computing Lead',
    company: 'Quantum Innovations',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Leading research in quantum computing applications and quantum-safe cryptography.',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      website: 'https://example.com'
    }
  }
];

export default function Speakers() {
  return (
    <section className="py-20 bg-gradient-radial from-indigo-950 to-black" id="speakers">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Speakers</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Learn from industry leaders and innovators shaping the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}