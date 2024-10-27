import React from 'react';
import { ArrowRight, Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/5 rounded-full px-3 py-1 mb-6 backdrop-blur-sm border border-white/10">
            <Calendar className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-200">June 15-17, 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of Tech
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Starts Here
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders and innovators for three days of cutting-edge technology, 
            inspiring talks, and unparalleled networking opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all flex items-center justify-center group">
              Register Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://source.unsplash.com/random/100x100?face&sig=${i}`}
                    alt="Attendee"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                ))}
              </div>
              <div className="ml-4 flex items-center text-gray-300">
                <Users className="w-4 h-4 mr-2" />
                <span>2,000+ Attending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}