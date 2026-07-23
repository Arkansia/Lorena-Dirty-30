import React, { useRef, useState } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
        <h3 className="text-center text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-2">
          Featured Track
        </h3>
        <p className="text-center text-sm text-gray-300 mb-8">
          Boss Fight by HOL!
        </p>

        {/* Play Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300"
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>

        <audio
          ref={audioRef}
          src="/boss-fight-hol.mp3"
          onEnded={() => setIsPlaying(false)}
        />

        <p className="text-center text-xs text-gray-500">
          {isPlaying ? 'Now Playing' : 'Click to play'}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-6"></div>

        <p className="text-center text-xs text-gray-400 italic">
          Get ready for an unforgettable night 🎵
        </p>
      </div>
    </div>
  );
};

export default MusicPlayer;