import React from 'react';

const EventCard = () => {
  const openMaps = () => {
    const address = '11140 African Sunset St, Henderson, NV 89052';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
  };

  const EventDetail = ({ icon, label, value }) => (
    <div className="flex items-start gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest text-purple-300 mb-1">{label}</p>
        <p className="text-sm md:text-base text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
        <h3 className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-8">
          Event Details
        </h3>

        <div className="space-y-6">
          <EventDetail
            icon="📅"
            label="Date"
            value="Friday, August 8th, 2026"
          />

          <EventDetail
            icon="🕐"
            label="Time"
            value="6:00 PM+"
          />

          <EventDetail
            icon="📍"
            label="Location"
            value="11140 African Sunset St, Henderson, NV 89052"
          />

          <EventDetail
            icon="🎵"
            label="Music By"
            value="Cristian & Oscar"
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-6"></div>

        {/* Map Button */}
        <button
          onClick={openMaps}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60"
        >
          Open in Maps
        </button>
      </div>
    </div>
  );
};

export default EventCard;