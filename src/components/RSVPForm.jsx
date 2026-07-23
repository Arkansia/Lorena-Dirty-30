import React, { useState } from 'react';

const RSVPForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    plusOnes: '0',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify forms will handle submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        attending: 'yes',
        plusOnes: '0',
        message: '',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm shadow-2xl shadow-emerald-500/10 text-center">
          <div className="text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300 mb-2">
            RSVP Received!
          </h3>
          <p className="text-gray-300 text-sm">
            Thanks for confirming! See you on August 8th 🐢
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
        <h3 className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
          RSVP
        </h3>

        <form
          name="rsvp"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="rsvp" />

          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-purple-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:shadow-lg focus:shadow-purple-500/20 transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-purple-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:shadow-lg focus:shadow-purple-500/20 transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Attending */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-purple-300 mb-2">
              Attending *
            </label>
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/60 focus:shadow-lg focus:shadow-purple-500/20 transition-all"
            >
              <option value="yes">Yes, I'm coming!</option>
              <option value="maybe">Maybe</option>
              <option value="no">No, can't make it</option>
            </select>
          </div>

          {/* Plus Ones */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-purple-300 mb-2">
              Plus Ones
            </label>
            <select
              name="plusOnes"
              value={formData.plusOnes}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/60 focus:shadow-lg focus:shadow-purple-500/20 transition-all"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-purple-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:shadow-lg focus:shadow-purple-500/20 transition-all resize-none"
              placeholder="Any special requests? (optional)"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;