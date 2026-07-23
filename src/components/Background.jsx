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
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 0.5,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: ['#ff006e', '#c2185b', '#e91e63', '#a855f7', '#d946ef'][Math.floor(Math.random() * 5)],
        pulse: Math.random() * Math.PI * 2,
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
        speed: Math.random() * 0.5 + 0.2,
        sway: Math.random() * 0.8,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    // Floating orbs (psychedelic elements)
    const orbs = [];
    const orbCount = 8;

    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 40 + 20,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: ['#ff006e', '#a855f7', '#d946ef', '#c084fc'][Math.floor(Math.random() * 4)],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId;
    let time = 0;

    const animate = () => {
      time += 1;

      // Dark background with trailing effect
      ctx.fillStyle = 'rgba(0, 0, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Base dark gradient
      const linearGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      linearGradient.addColorStop(0, 'rgba(0, 0, 20, 0.05)');
      linearGradient.addColorStop(0.5, 'rgba(25, 0, 60, 0.02)');
      linearGradient.addColorStop(1, 'rgba(0, 0, 30, 0.05)');
      ctx.fillStyle = linearGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw radial glow center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 3;
      const radialGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.max(canvas.width, canvas.height) * 1.2
      );
      radialGradient.addColorStop(0, `rgba(255, 0, 110, ${0.08 + Math.sin(time * 0.005) * 0.02})`);
      radialGradient.addColorStop(0.3, `rgba(168, 85, 247, ${0.04 + Math.sin(time * 0.003) * 0.01})`);
      radialGradient.addColorStop(1, 'rgba(25, 0, 60, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width) orb.vx *= -1;
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > canvas.height) orb.vy *= -1;

        orb.x = Math.max(orb.radius, Math.min(canvas.width - orb.radius, orb.x));
        orb.y = Math.max(orb.radius, Math.min(canvas.height - orb.radius, orb.y));

        const pulseFactor = Math.sin(time * 0.01 + orb.pulse) * 0.3 + 0.7;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius * pulseFactor * 1.5);
        glowGradient.addColorStop(0, `${orb.color}40`);
        glowGradient.addColorStop(0.6, `${orb.color}20`);
        glowGradient.addColorStop(1, `${orb.color}00`);
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * pulseFactor * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Core orb
        const coreGradient = ctx.createRadialGradient(
          orb.x - orb.radius * 0.2,
          orb.y - orb.radius * 0.2,
          0,
          orb.x,
          orb.y,
          orb.radius * pulseFactor
        );
        coreGradient.addColorStop(0, `${orb.color}80`);
        coreGradient.addColorStop(1, `${orb.color}20`);
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * pulseFactor, 0, Math.PI * 2);
        ctx.fill();

        // Shadow effect
        ctx.shadowColor = orb.color;
        ctx.shadowBlur = 30 * pulseFactor;
        ctx.strokeStyle = `${orb.color}30`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * pulseFactor, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw and update floating particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const pulseFactor = Math.sin(time * 0.02 + particle.pulse) * 0.3 + 0.7;
        const finalOpacity = particle.opacity * pulseFactor;

        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * pulseFactor, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw falling stars
      fallingStars.forEach((star) => {
        star.y += star.speed;
        star.x += Math.sin(star.swayOffset + star.y * 0.005) * star.sway * 0.05;
        star.swayOffset += 0.02;

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

        // Add cross pattern
        ctx.strokeStyle = `rgba(255, 0, 110, ${star.opacity * 0.4})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(star.x - star.size, star.y);
        ctx.lineTo(star.x + star.size, star.y);
        ctx.moveTo(star.x, star.y - star.size);
        ctx.lineTo(star.x, star.y + star.size);
        ctx.stroke();
      });

      // Occasional lightning flashes
      if (Math.random() < 0.003) {
        ctx.fillStyle = `rgba(255, 0, 110, ${Math.random() * 0.1 + 0.03})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.shadowColor = 'transparent';
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default Background;
