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
    const particleCount = 40;

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
    const starCount = 80;

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

      // Draw radial gradient for magenta glow (central focus)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 3;
      const radialGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height) * 0.8);
      radialGradient.addColorStop(0, 'rgba(255, 0, 110, 0.1)');
      radialGradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.05)');
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
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      {/* Canvas for animated particles and falling stars */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />

      {/* Decorative gradient overlay (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-gradient-to-t from-pink-900/20 via-transparent to-purple-900/10"></div>
    </div>
  );
};

export default Background;
