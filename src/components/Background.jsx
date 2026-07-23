import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: ['#a78bfa', '#c084fc', '#7c3aed', '#60a5fa'][Math.floor(Math.random() * 4)],
      });
    }

    const animate = () => {
      // Dark background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 0, 40, 0)');
      gradient.addColorStop(0.5, 'rgba(25, 0, 60, 0.05)');
      gradient.addColorStop(1, 'rgba(15, 0, 40, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity += (Math.random() - 0.5) * 0.02;
        particle.opacity = Math.max(0.1, Math.min(0.7, particle.opacity));

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowColor = 'transparent';
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Canvas for animated particles */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />

      {/* Speaker stacks - Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <div className="w-24 h-96 bg-gradient-to-b from-purple-900 via-black to-purple-900 rounded-lg shadow-2xl shadow-purple-600/50 speaker-pulse">
          <div className="w-full h-full flex flex-col gap-2 p-2">
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-purple-500/30"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-purple-500/30"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-purple-500/30"></div>
          </div>
        </div>
      </div>

      {/* Speaker stacks - Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <div className="w-24 h-96 bg-gradient-to-b from-purple-900 via-black to-purple-900 rounded-lg shadow-2xl shadow-purple-600/50 speaker-pulse" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full flex flex-col gap-2 p-2">
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-purple-500/30"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-purple-500/30"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-purple-500/30"></div>
          </div>
        </div>
      </div>

      {/* Glowing mushrooms scattered */}
      <div className="absolute bottom-20 left-1/4 opacity-15 pointer-events-none">
        <div className="w-16 h-20 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full shadow-lg shadow-pink-500/50 glow-mushroom">
          <div className="w-full h-1/3 bg-pink-300 rounded-t-full opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-16 right-1/4 opacity-15 pointer-events-none">
        <div className="w-12 h-16 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full shadow-lg shadow-cyan-400/50 glow-mushroom" style={{ animationDelay: '1s' }}>
          <div className="w-full h-1/3 bg-cyan-200 rounded-t-full opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 opacity-15 pointer-events-none">
        <div className="w-14 h-18 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-full shadow-lg shadow-purple-500/50 glow-mushroom" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-1/3 bg-purple-200 rounded-t-full opacity-40"></div>
        </div>
      </div>

      {/* Hidden turtle easter eggs */}
      <div className="absolute top-1/4 left-5 opacity-5 pointer-events-none text-2xl">🐢</div>
      <div className="absolute top-3/4 right-10 opacity-5 pointer-events-none text-xl">🐢</div>
      <div className="absolute bottom-1/4 left-1/3 opacity-5 pointer-events-none text-xl">🐢</div>
    </div>
  );
};

export default Background;