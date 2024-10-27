import React from 'react';
import { Twitter, Linkedin, ExternalLink } from 'lucide-react';

interface SpeakerCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export default function SpeakerCard({ name, role, company, image, bio, social }: SpeakerCardProps) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-400 mb-2">{role}</p>
        <p className="text-gray-400 text-sm mb-4">{company}</p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{bio}</p>
        <div className="flex space-x-4">
          {social.twitter && (
            <a href={social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {social.website && (
            <a href={social.website} className="text-gray-400 hover:text-blue-400 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}