import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particles for the main floating effect
    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: ['#ff006e', '#c2185b', '#e91e63', '#a855f7'][Math.floor(Math.random() * 4)],
      });
    }

    // Falling stars (like code rainfall)
    const fallingStars = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      fallingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
        sway: Math.random() * 0.5,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      // Dark background with strong purple tone
      ctx.fillStyle = 'rgba(0, 0, 5, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw radial gradient for magenta glow
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radialGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height));
      radialGradient.addColorStop(0, 'rgba(255, 0, 110, 0.08)');
      radialGradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.04)');
      radialGradient.addColorStop(1, 'rgba(25, 0, 60, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update floating particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity += (Math.random() - 0.5) * 0.02;
        particle.opacity = Math.max(0.1, Math.min(0.7, particle.opacity));

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw falling stars (code rainfall)
      fallingStars.forEach((star) => {
        star.y += star.speed;
        star.x += Math.sin(star.swayOffset + star.y * 0.005) * star.sway * 0.1;
        star.swayOffset += 0.01;

        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }

        ctx.shadowColor = '#ff006e';
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(255, 0, 110, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add small cross pattern for code-like look
        ctx.strokeStyle = `rgba(255, 0, 110, ${star.opacity * 0.6})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(star.x - star.size, star.y);
        ctx.lineTo(star.x + star.size, star.y);
        ctx.moveTo(star.x, star.y - star.size);
        ctx.lineTo(star.x, star.y + star.size);
        ctx.stroke();
      });

      // Occasional lightning flashes
      if (Math.random() < 0.005) {
        ctx.fillStyle = `rgba(255, 0, 110, ${Math.random() * 0.15 + 0.05})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

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
    <div className="fixed inset-0 z-0 bg-black">
      {/* Canvas for animated particles and falling stars */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />

      {/* Speaker stacks - Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
        <div className="w-24 h-96 bg-gradient-to-b from-pink-900 via-black to-pink-900 rounded-lg shadow-2xl shadow-pink-600/60 speaker-pulse">
          <div className="w-full h-full flex flex-col gap-2 p-2">
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-pink-500/40"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-pink-500/40"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-pink-500/40"></div>
          </div>
        </div>
      </div>

      {/* Speaker stacks - Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
        <div className="w-24 h-96 bg-gradient-to-b from-pink-900 via-black to-pink-900 rounded-lg shadow-2xl shadow-pink-600/60 speaker-pulse" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full flex flex-col gap-2 p-2">
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-pink-500/40"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-pink-500/40"></div>
            <div className="flex-1 bg-gray-900 rounded shadow-lg shadow-pink-500/40"></div>
          </div>
        </div>
      </div>

      {/* Glowing mushrooms - now more magenta/pink */}
      <div className="absolute bottom-20 left-1/4 opacity-20 pointer-events-none">
        <div className="w-16 h-20 bg-gradient-to-b from-pink-500 to-pink-700 rounded-full shadow-lg shadow-pink-500/70 glow-mushroom">
          <div className="w-full h-1/3 bg-pink-300 rounded-t-full opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-16 right-1/4 opacity-20 pointer-events-none">
        <div className="w-12 h-16 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full shadow-lg shadow-pink-500/70 glow-mushroom" style={{ animationDelay: '1s' }}>
          <div className="w-full h-1/3 bg-pink-200 rounded-t-full opacity-40"></div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 opacity-20 pointer-events-none">
        <div className="w-14 h-18 bg-gradient-to-b from-pink-500 to-purple-700 rounded-full shadow-lg shadow-pink-500/70 glow-mushroom" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-1/3 bg-pink-200 rounded-t-full opacity-40"></div>
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
