import React, { useRef, useState, useEffect } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasAudio, setHasAudio] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);
    const handleCanPlay = () => setHasAudio(true);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio playback failed - ensure audio file is loaded');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audioRef.current.currentTime = percentage * duration;
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
        <h3 className="text-center text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-2">
          Featured Track
        </h3>
        <p className="text-center text-sm text-gray-300 mb-8">
          Boss Fight by HOL! 🎵
        </p>

        {/* Play Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-400/70 hover:scale-105 active:scale-95"
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>

        {/* Progress Bar */}
        {hasAudio && duration > 0 && (
          <div className="mb-4">
            <div
              onClick={handleProgressClick}
              className="h-2 bg-cyan-900/50 rounded-full cursor-pointer overflow-hidden hover:h-3 transition-all"
            >
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        )}

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          crossOrigin="anonymous"
          onError={(e) => {
            console.log('Audio load error:', e);
            setHasAudio(false);
          }}
        >
          {/* Try multiple sources for compatibility */}
          <source src="/boss-fight-hol.mp3" type="audio/mpeg" />
          <source src="/boss-fight-hol.m4a" type="audio/mp4" />
          <source src="/boss-fight-hol.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>

        <p className="text-center text-xs text-gray-500 mb-4">
          {isPlaying ? (
            <span className="text-cyan-400">Now Playing 🔊</span>
          ) : hasAudio ? (
            'Click to play'
          ) : (
            <span className="text-gray-600">Audio not loaded - place boss-fight-hol.mp3 in public/ folder</span>
          )}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-4"></div>

        <p className="text-center text-xs text-gray-400 italic">
          Get ready for an unforgettable night 🎶
        </p>
      </div>
    </div>
  );
};

export default MusicPlayer;
