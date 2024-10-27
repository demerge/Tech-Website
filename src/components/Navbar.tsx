import React, { useState } from 'react';
import { Globe2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Globe2 className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">TechCon 2024</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</a>
              <a href="#speakers" className="text-gray-300 hover:text-white transition-colors">Speakers</a>
              <a href="#exhibition" className="text-gray-300 hover:text-white transition-colors">Exhibition</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Register Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#schedule"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Schedule
              </a>
              <a
                href="#speakers"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Speakers
              </a>
              <a
                href="#exhibition"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Exhibition
              </a>
              <button className="w-full text-left bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}