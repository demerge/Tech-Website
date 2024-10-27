import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

interface ScheduleCardProps {
  time: string;
  title: string;
  speaker: string;
  location: string;
  category: 'keynote' | 'workshop' | 'panel';
}

export default function ScheduleCard({ time, title, speaker, location, category }: ScheduleCardProps) {
  const categoryColors = {
    keynote: 'bg-purple-500',
    workshop: 'bg-blue-500',
    panel: 'bg-green-500'
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer border border-white/10">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <span className={`${categoryColors[category]} text-xs px-2 py-1 rounded-full text-white`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
            <div className="flex items-center text-blue-300">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{time}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center text-gray-300 mb-2">
            <User className="w-4 h-4 mr-2" />
            <span>{speaker}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}