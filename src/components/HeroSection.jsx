import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center space-y-6">
      {/* Main Title with Neon Glow */}
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest neon-glow animate-fade-in">
          Lorena
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 uppercase tracking-wider">
          Turns 30
        </h2>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto"></div>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-200 font-light max-w-lg mx-auto leading-relaxed">
        A night of bass, friends, and celebration.
      </p>

      {/* Accent Line */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500"></div>
        <span className="text-sm uppercase tracking-widest text-purple-300">August 8th, 2026</span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
    </div>
  );
};

export default HeroSection;