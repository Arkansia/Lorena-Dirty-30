import React from 'react';
import Background from './components/Background';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import EventCard from './components/EventCard';
import MusicPlayer from './components/MusicPlayer';
import RSVPForm from './components/RSVPForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Background />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <HeroSection />
        </section>

        {/* Countdown Timer */}
        <section className="py-20 px-4 flex justify-center">
          <div className="animate-fade-in">
            <CountdownTimer />
          </div>
        </section>

        {/* Event Card */}
        <section className="py-20 px-4 flex justify-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <EventCard />
          </div>
        </section>

        {/* Music Player */}
        <section className="py-20 px-4 flex justify-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <MusicPlayer />
          </div>
        </section>

        {/* RSVP Section */}
        <section className="py-20 px-4 flex justify-center">
          <div className="animate-fade-in max-w-md w-full" style={{ animationDelay: '0.6s' }}>
            <RSVPForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-4 text-center text-gray-500 text-sm">
          <p>See you on the dance floor 🐢</p>
        </footer>
      </div>
    </div>
  );
}

export default App;