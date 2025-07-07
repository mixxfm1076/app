import React, { useState, useEffect } from 'react';

// Header Component
export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  
  const MIXX_FM_STREAM = "https://mixxfm.ice.infomaniak.ch/mixxfm-192.mp3";

  useEffect(() => {
    const audio = new Audio(MIXX_FM_STREAM);
    audio.preload = "none";
    audio.volume = 0.7;
    setAudioRef(audio);

    audio.addEventListener('loadstart', () => {
      setIsLoading(true);
      setAudioError(false);
    });

    audio.addEventListener('canplay', () => {
      setIsLoading(false);
      setAudioError(false);
    });

    audio.addEventListener('error', (e) => {
      setIsLoading(false);
      setAudioError(true);
      setIsPlaying(false);
      console.error('Audio error:', e);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      audio.pause();
      audio.removeEventListener('loadstart', () => {});
      audio.removeEventListener('canplay', () => {});
      audio.removeEventListener('error', () => {});
      audio.removeEventListener('ended', () => {});
    };
  }, []);

  const togglePlayPause = async () => {
    if (!audioRef) return;

    try {
      if (isPlaying) {
        audioRef.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setAudioError(true);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };
  
  return (
    <header className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white font-bold text-3xl">
              <span className="text-purple-500">MIXX</span>
              <span className="text-white ml-1">FM</span>
            </div>
            <div className="ml-3 text-sm text-gray-300">
              <div className="frequency-display">107.6 FM • DAB+ 11B</div>
              <div className="text-purple-400">Charleroi</div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">ACCUEIL</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">PROGRAMMATION</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">DJS</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">MIXES</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">ÉVÉNEMENTS</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">CONTACT</a>
          </nav>
          
          {/* Live Radio and Play Button */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  isPlaying ? 'bg-purple-500 animate-pulse' : 
                  audioError ? 'bg-red-500' : 'bg-gray-500'
                }`}></div>
                <span className="text-sm text-gray-300">
                  {isPlaying ? "🔴 LIVE" : "📻 MIXX FM"}
                </span>
              </div>
              <div className="text-xs text-purple-400">Culture Électro</div>
              {audioError && (
                <div className="text-xs text-red-400">Connexion échouée</div>
              )}
            </div>
            <button 
              onClick={togglePlayPause}
              disabled={isLoading}
              className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed glow-purple"
              title={isPlaying ? "Arrêter MIXX FM" : "Écouter MIXX FM en direct"}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isPlaying ? (
                <span className="text-lg">⏸️</span>
              ) : (
                <span className="text-lg">▶️</span>
              )}
            </button>
            {audioError && (
              <button 
                onClick={() => {
                  setAudioError(false);
                  if (audioRef) {
                    audioRef.load();
                  }
                }}
                className="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
              >
                Réessayer
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Station Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-20 bg-purple-500"></div>
              <div>
                <h1 className="text-6xl font-bold text-white">MIXX FM</h1>
                <h2 className="text-2xl font-light text-purple-300">CHARLEROI</h2>
                <p className="text-gray-300 text-lg">Culture Électro • 107.6 FM</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">ON AIR</span>
              <span className="text-purple-400 font-bold text-2xl">24/7</span>
            </div>
            
            <div className="space-y-3">
              <div className="text-white">
                <h3 className="font-bold text-xl">Now Playing</h3>
                <p className="text-purple-300">RAVE BROTHERS & DYLAN KERR</p>
                <p className="text-gray-400">YOU GOT TO GET DOWN</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors">
                🎧 Écouter Live
              </button>
              <button className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors">
                📻 DAB+ 11B
              </button>
            </div>
          </div>
          
          {/* Right Side - DJ Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/19175880/pexels-photo-19175880.jpeg" 
              alt="DJ Live"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black bg-opacity-75 text-white px-6 py-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-purple-300">MIXX FM CHARLEROI</span>
                    <div className="text-xs text-gray-400">Deep House • Tech-House • Techno</div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-6 bg-purple-500 rounded animate-pulse"></div>
                    <div className="w-1 h-8 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-4 bg-purple-500 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-7 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
              </div>
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
      title: "You Got To Get Down",
      artist: "Rave Brothers & Dylan Kerr",
      cover: "https://images.pexels.com/photos/6547593/pexels-photo-6547593.jpeg",
      isNow: true,
      genre: "Tech-House"
    },
    {
      title: "Midnight City",
      artist: "M83 (Kolsch Remix)",
      cover: "https://images.pexels.com/photos/19261519/pexels-photo-19261519.jpeg",
      isNow: false,
      genre: "Deep House"
    },
    {
      title: "Hyperreal",
      artist: "Flume",
      cover: "https://images.unsplash.com/photo-1616696695535-98369e260e7a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJzfGVufDB8fHxyZWR8MTc1MTkwNTQ1Nnww&ixlib=rb-4.1.0&q=85",
      isNow: false,
      genre: "Electronica"
    },
    {
      title: "Silence",
      artist: "Marshmello ft. Khalid",
      cover: "https://images.pexels.com/photos/5991464/pexels-photo-5991464.jpeg",
      isNow: false,
      genre: "Future Bass"
    }
  ];
  
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl border border-purple-800">
      <h3 className="text-purple-400 font-bold text-lg mb-4 flex items-center">
        🎵 PLAYLIST LIVE
        <div className="ml-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
      </h3>
      <div className="space-y-4">
        {playlist.map((track, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="relative">
              <img 
                src={track.cover} 
                alt={track.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              {track.isNow && (
                <div className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  NOW
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-white">{track.title}</h4>
              <p className="text-sm text-gray-400">{track.artist}</p>
              <div className="text-xs text-purple-400">{track.genre}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Show Card Component
export const ShowCard = ({ title, subtitle, image, time, dj }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <p className="text-purple-300 text-sm">{subtitle}</p>
          {dj && <p className="text-gray-400 text-xs mt-1">avec {dj}</p>}
          {time && <p className="text-purple-400 text-xs mt-1">{time}</p>}
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            MIXX FM
          </div>
        </div>
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
          <h2 className="text-purple-400 font-bold text-2xl">{title}</h2>
          <button className="text-gray-300 hover:text-purple-400 transition-colors">
            Voir plus →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show, index) => (
            <ShowCard key={index} {...show} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Content Section Component
export const ContentSection = ({ title, items, bgColor = "bg-gray-800" }) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-purple-400 font-bold text-2xl">{title}</h2>
          <button className="text-gray-300 hover:text-purple-400 transition-colors">
            Voir plus →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-700">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-purple-400">{item.date}</div>
                  {item.genre && <div className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">{item.genre}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// DJ Section Component
export const DJSection = () => {
  const djs = [
    {
      name: "RAVE BROTHERS",
      show: "TECH-HOUSE SESSIONS",
      image: "https://images.pexels.com/photos/14668688/pexels-photo-14668688.jpeg",
      time: "Lundi - Mercredi 20h-22h",
      specialty: "Tech-House"
    },
    {
      name: "DYLAN KERR",
      show: "DEEP VIBES",
      image: "https://images.pexels.com/photos/14470112/pexels-photo-14470112.jpeg",
      time: "Jeudi - Vendredi 18h-20h",
      specialty: "Deep House"
    },
    {
      name: "ELEKTRO MIKE",
      show: "TECHNO NIGHTS",
      image: "https://images.unsplash.com/photo-1557039834-2f2208c6973c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      time: "Samedi 22h-02h",
      specialty: "Techno"
    },
    {
      name: "SARAH BEATS",
      show: "ELECTRO FUSION",
      image: "https://images.unsplash.com/photo-1650765814764-aeae1a900dfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxESiUyMG1peGluZ3xlbnwwfHx8cmVkfDE3NTE5MDU0NDR8MA&ixlib=rb-4.1.0&q=85",
      time: "Dimanche 16h-18h",
      specialty: "Electro"
    }
  ];
  
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-purple-400 font-bold text-3xl mb-4">NOS DJS</h2>
          <p className="text-gray-400 text-lg">L'équipe qui fait vibrer MIXX FM 24/7</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {djs.map((dj, index) => (
            <div key={index} className="bg-black rounded-2xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 border border-purple-800">
              <div className="relative">
                <img 
                  src={dj.image} 
                  alt={dj.name}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl">{dj.name}</h3>
                  <p className="text-purple-300 text-sm">{dj.show}</p>
                  <p className="text-gray-400 text-xs mt-1">{dj.time}</p>
                  <div className="mt-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">{dj.specialty}</span>
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
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [audioError, setAudioError] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  
  const MIXX_FM_STREAM = "https://mixxfm.ice.infomaniak.ch/mixxfm-192.mp3";
  
  const [currentTrack, setCurrentTrack] = useState({
    title: "MIXX FM Live Stream",
    artist: "Culture Électro • Charleroi",
    cover: "https://images.pexels.com/photos/6547593/pexels-photo-6547593.jpeg"
  });

  useEffect(() => {
    const audio = new Audio(MIXX_FM_STREAM);
    audio.preload = "none";
    audio.volume = volume;
    setAudioRef(audio);

    audio.addEventListener('loadstart', () => {
      setIsLoading(true);
      setAudioError(false);
    });

    audio.addEventListener('canplay', () => {
      setIsLoading(false);
      setAudioError(false);
    });

    audio.addEventListener('error', (e) => {
      setIsLoading(false);
      setAudioError(true);
      setIsPlaying(false);
      console.error('Audio error:', e);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      audio.pause();
      audio.removeEventListener('loadstart', () => {});
      audio.removeEventListener('canplay', () => {});
      audio.removeEventListener('error', () => {});
      audio.removeEventListener('ended', () => {});
    };
  }, [volume]);

  const togglePlayPause = async () => {
    if (!audioRef) return;

    try {
      if (isPlaying) {
        audioRef.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setAudioError(true);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    if (audioRef) {
      audioRef.volume = newVolume;
    }
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 shadow-2xl border-t border-purple-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src={currentTrack.cover} 
            alt={currentTrack.title}
            className="w-14 h-14 object-cover rounded-lg"
          />
          <div>
            <h4 className="font-medium text-white">{currentTrack.title}</h4>
            <p className="text-sm text-gray-400">{currentTrack.artist}</p>
            <div className="text-xs text-purple-400">
              {audioError ? "❌ Connexion échouée" : 
               isLoading ? "🔄 Connexion..." : 
               isPlaying ? "🎵 En direct" : "📻 Prêt à diffuser"}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
              }}
            />
          </div>
          
          <button 
            onClick={togglePlayPause}
            disabled={isLoading}
            className="bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <span className="text-xl">⏸️</span>
            ) : (
              <span className="text-xl">▶️</span>
            )}
          </button>
          
          {audioError && (
            <button 
              onClick={() => {
                setAudioError(false);
                if (audioRef) {
                  audioRef.load();
                }
              }}
              className="text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors"
            >
              Réessayer
            </button>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                isPlaying ? 'bg-purple-500 animate-pulse' : 
                audioError ? 'bg-red-500' : 'bg-gray-500'
              }`}></div>
              <span className="text-sm text-gray-300">
                {isPlaying ? "🔴 LIVE" : "📻 MIXX FM"}
              </span>
            </div>
            <div className="text-xs text-purple-400">107.6 FM • DAB+ 11B</div>
            <div className="text-xs text-gray-500">MP3 • 192 kbps</div>
          </div>
          
          {isPlaying && (
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-purple-500 rounded animate-pulse"></div>
              <div className="w-1 h-8 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-4 bg-purple-500 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-7 bg-purple-400 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-1 h-5 bg-purple-500 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-purple-400 font-bold text-3xl">MIXX</span>
              <span className="text-white font-bold text-3xl ml-1">FM</span>
            </div>
            <p className="text-gray-400 mb-2">Culture Électro</p>
            <p className="text-gray-400">Charleroi, Belgique</p>
            <div className="mt-4 space-y-1">
              <div className="text-purple-400 font-medium">📻 107.6 FM</div>
              <div className="text-purple-400 font-medium">📡 DAB+ 11B</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-400">Programmation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tech-House Sessions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deep Vibes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Techno Nights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electro Fusion</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-400">Genres</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Deep House</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tech-House</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Techno</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electro</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-400">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 mixxradiocharleroi@gmail.com</p>
              <p>📍 Rue Gustave Derard 4</p>
              <p>6060 Gilly, Belgique</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MIXX FM Charleroi. Tous droits réservés.</p>
          <p className="text-sm mt-2">MIXX radio ASBL - Culture Électro sur le 107.6 FM</p>
        </div>
      </div>
    </footer>
  );
};