import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-08-08T18:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-lg flex items-center justify-center mb-2 shadow-lg shadow-purple-500/20">
        <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest text-gray-400">{label}</span>
    </div>
  );

  return (
    <div className="w-full max-w-2xl">
      <h3 className="text-center text-sm uppercase tracking-widest text-purple-300 mb-8">Countdown</h3>
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;