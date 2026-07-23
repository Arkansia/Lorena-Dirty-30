🐢 # Lorena Turns 30

A modern, psychedelic birthday invitation website for Lorena's 30th birthday celebration.

## Features

✨ **Dark Psychedelic Aesthetic**
- Premium festival flyer feel
- Neon glow text effects
- Glowing mushrooms and animated particles
- Speaker stack decorations
- Subtle turtle easter eggs throughout

🎵 **Event Details**
- Live countdown timer to August 8th, 2026 at 6:00 PM
- Event information card with Google Maps integration
- Music player for the featured track "Boss Fight by HOL!"
- Interactive RSVP form with Netlify Forms integration

📱 **Responsive Design**
- Mobile-first design
- Works seamlessly on phones and desktops
- Smooth animations and transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Canvas API** - Animated particle background
- **Netlify Forms** - Form handling

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Arkansia/Lorena-Dirty-30.git
cd Lorena-Dirty-30
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## Building for Production

```bash
npm run build
npm run preview
```

The built files will be in the `dist` directory.

## Deployment

This site is optimized for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build command
3. Deploy! Your form submissions will be handled automatically

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
├── index.css              # Global styles and animations
├── components/
│   ├── Background.jsx     # Animated background with particles
│   ├── HeroSection.jsx    # Main title with neon glow
│   ├── CountdownTimer.jsx # Live countdown
│   ├── EventCard.jsx      # Event details and map button
│   ├── MusicPlayer.jsx    # Music player for Boss Fight
│   └── RSVPForm.jsx       # RSVP form with Netlify integration
├── tailwind.config.js     # Tailwind configuration
└── postcss.config.js      # PostCSS configuration
```

## Features Breakdown

### Hero Section
- Large animated "Lorena Turns 30" title
- Neon glow effect with flickering animation
- Gradient subtitle text

### Countdown Timer
- Real-time countdown to event date/time
- Days, hours, minutes, seconds display
- Gradient styled boxes

### Background
- Canvas-based animated particles
- Speaker stack decorations with pulse effect
- Glowing mushrooms scattered throughout
- Subtle turtle emoji easter eggs
- No cartoonish or gaming aesthetics

### Event Card
- Date, time, location, and music details
- "Open in Maps" button for directions
- Gradient borders and backgrounds

### Music Player
- Play/pause button for Boss Fight track
- Stylish controls with cyan/blue theme

### RSVP Form
- Name, email, attendance status fields
- Plus ones dropdown (0-4)
- Optional message field
- Success message after submission
- Netlify Forms integration ready

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Music File

Place your `boss-fight-hol.mp3` file in the `public/` directory for the music player to work.

## License

MIT

---

**See you on the dance floor! 🐢🎵**