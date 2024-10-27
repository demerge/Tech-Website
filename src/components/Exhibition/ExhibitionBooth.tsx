import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface ExhibitionBoothProps {
  company: string;
  logo: string;
  description: string;
  category: string;
  website: string;
}

export default function ExhibitionBooth({ company, logo, description, category, website }: ExhibitionBoothProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
      <div className="flex items-center justify-between mb-4">
        <img src={logo} alt={company} className="h-12 w-auto" />
        <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{company}</h3>
      <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
      <div className="flex space-x-4">
        <a
          href={website}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Website
        </a>
        <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat Now
        </button>
      </div>
    </div>
  );
}