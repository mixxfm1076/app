import React, { useState, useEffect } from 'react';

// Header Component
export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-red-600 font-bold text-3xl">
              FG.
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">FG TV</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">MR RADIOFG</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">FG MIX</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">NEWS</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">PODCASTS</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">FG CHIC</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">FG DANCE</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">MAXIMUM</a>
          </nav>
          
          {/* Live Radio and Play Button */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Live • RADIO FG</span>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - DJ Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-16 bg-red-600"></div>
              <div>
                <h1 className="text-5xl font-bold text-gray-900">FGMIX</h1>
                <h2 className="text-3xl font-light text-gray-700">DAVID GUETTA</h2>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">SAMEDI SOIR</span>
              <span className="text-red-600 font-bold text-2xl">23H</span>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                ▶️
              </button>
              <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                ⏭️
              </button>
            </div>
          </div>
          
          {/* Right Side - DJ Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/19175880/pexels-photo-19175880.jpeg" 
              alt="David Guetta"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded">
              <span className="text-sm font-medium">FG RADIO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Live Playlist Component
export const LivePlaylist = () => {
  const playlist = [
    {
      title: "What Me Too",
      artist: "Artist Name",
      cover: "https://images.pexels.com/photos/6547593/pexels-photo-6547593.jpeg",
      isNow: true
    },
    {
      title: "In The Air Tonight",
      artist: "Phil Collins",
      cover: "https://images.pexels.com/photos/19261519/pexels-photo-19261519.jpeg",
      isNow: false
    },
    {
      title: "Sacrifice",
      artist: "The Weeknd",
      cover: "https://images.unsplash.com/photo-1616696695535-98369e260e7a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJzfGVufDB8fHxyZWR8MTc1MTkwNTQ1Nnww&ixlib=rb-4.1.0&q=85",
      isNow: false
    },
    {
      title: "Wait So Long",
      artist: "TrackTribe",
      cover: "https://images.pexels.com/photos/5991464/pexels-photo-5991464.jpeg",
      isNow: false
    }
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-red-600 font-bold text-lg mb-4">PLAYLIST LIVE</h3>
      <div className="space-y-3">
        {playlist.map((track, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={track.cover} 
                alt={track.title}
                className="w-16 h-16 object-cover rounded"
              />
              {track.isNow && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded-bl">
                  NOW
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{track.title}</h4>
              <p className="text-sm text-gray-600">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Show Card Component
export const ShowCard = ({ title, subtitle, image, logo }) => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
        {logo && (
          <div className="absolute top-4 right-4">
            <img src={logo} alt="FG Logo" className="w-8 h-8" />
          </div>
        )}
      </div>
    </div>
  );
};

// Shows Grid Component
export const ShowsGrid = ({ title, shows }) => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-red-600 font-bold text-2xl">{title}</h2>
          <button className="text-white hover:text-red-600 transition-colors">
            Voir plus →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {shows.map((show, index) => (
            <ShowCard key={index} {...show} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Content Section Component
export const ContentSection = ({ title, items, bgColor = "bg-white" }) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-red-600 font-bold text-2xl">{title}</h2>
          <button className="text-gray-600 hover:text-red-600 transition-colors">
            Voir plus →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="mt-2 text-xs text-gray-500">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FG Mix Section Component
export const FGMixSection = () => {
  const mixShows = [
    {
      title: "NATALY K",
      subtitle: "VENDREDI SOIR",
      image: "https://images.pexels.com/photos/14668688/pexels-photo-14668688.jpeg",
      time: "FG MIX - NATALY K"
    },
    {
      title: "FRANKY WAH",
      subtitle: "VENDREDI SOIR",
      image: "https://images.pexels.com/photos/14470112/pexels-photo-14470112.jpeg",
      time: "FG MIX - FRANKY WAH"
    },
    {
      title: "DEFECTED",
      subtitle: "VENDREDI SOIR",
      image: "https://images.unsplash.com/photo-1557039834-2f2208c6973c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      time: "FG MIX - DEFECTED"
    },
    {
      title: "CLAPTONE",
      subtitle: "VENDREDI SOIR",
      image: "https://images.unsplash.com/photo-1650765814764-aeae1a900dfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxESiUyMG1peGluZ3xlbnwwfHx8cmVkfDE3NTE5MDU0NDR8MA&ixlib=rb-4.1.0&q=85",
      time: "FG MIX - CLAPTONE"
    },
    {
      title: "SEAMUS HAJI",
      subtitle: "VENDREDI DE JUILLET",
      image: "https://images.unsplash.com/photo-1659083726032-32d67d08ba64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxyYWRpbyUyMHN0dWRpb3xlbnwwfHx8cmVkfDE3NTE5MDU0NTF8MA&ixlib=rb-4.1.0&q=85",
      time: "FG MIX - SEAMUS HAJI"
    },
    {
      title: "SEA YOU 2025",
      subtitle: "JEUDI 25 JUILLET",
      image: "https://images.unsplash.com/photo-1562935256-b3a90e747071?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMHN0dWRpb3xlbnwwfHx8cmVkfDE3NTE5MDU0NTF8MA&ixlib=rb-4.1.0&q=85",
      time: "FG MIX SPECIAL SEA YOU FESTIVAL BELGIUM"
    }
  ];
  
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-red-600 font-bold text-2xl">FG MIX</h2>
          <button className="text-gray-600 hover:text-red-600 transition-colors">
            Voir plus →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mixShows.map((show, index) => (
            <div key={index} className="bg-black text-white rounded-lg overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src={show.image} 
                  alt={show.title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl">{show.title}</h3>
                  <p className="text-gray-300 text-sm">{show.subtitle}</p>
                  <p className="text-gray-400 text-xs mt-1">{show.time}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    FG
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Audio Player Component
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: "What Me Too",
    artist: "Artist Name",
    cover: "https://images.pexels.com/photos/6547593/pexels-photo-6547593.jpeg"
  });
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src={currentTrack.cover} 
            alt={currentTrack.title}
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <h4 className="font-medium">{currentTrack.title}</h4>
            <p className="text-sm text-gray-400">{currentTrack.artist}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-red-600 transition-colors">
            ⏮️
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button className="text-white hover:text-red-600 transition-colors">
            ⏭️
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Live • Radio FG</span>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-red-600 font-bold text-3xl mb-4">FG.</div>
            <p className="text-gray-400">
              La radio de tous les DJs
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Radio</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FG Radio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FG Chic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FG Dance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maximum</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Shows</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FG Mix</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Podcasts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Happy Hour</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DJ News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Radio FG. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};