import React from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  LivePlaylist, 
  ShowsGrid, 
  ContentSection, 
  DJSection, 
  AudioPlayer, 
  Footer 
} from './components';

function App() {
  // Mock data for MIXX FM Charleroi
  const featuredShows = [
    {
      title: "TECH-HOUSE SESSIONS",
      subtitle: "Rave Brothers",
      image: "https://images.unsplash.com/photo-1584228363795-3a8b2c2c1d78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsfGVufDB8fHxyZWR8MTc1MTkwNTQ2N3ww&ixlib=rb-4.1.0&q=85",
      time: "Lun-Mer 20h-22h",
      dj: "Rave Brothers"
    },
    {
      title: "DEEP VIBES",
      subtitle: "Dylan Kerr",
      image: "https://images.unsplash.com/photo-1551558493-23ad82b16536?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      time: "Jeu-Ven 18h-20h",
      dj: "Dylan Kerr"
    },
    {
      title: "TECHNO NIGHTS",
      subtitle: "Elektro Mike",
      image: "https://images.unsplash.com/photo-1649144006652-cc80c2e8aab8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      time: "Sam 22h-02h",
      dj: "Elektro Mike"
    },
    {
      title: "ELECTRO FUSION",
      subtitle: "Sarah Beats",
      image: "https://images.pexels.com/photos/32001123/pexels-photo-32001123.jpeg",
      time: "Dim 16h-18h",
      dj: "Sarah Beats"
    }
  ];

  const weeklyHighlights = [
    {
      title: "Mix Contest 2025",
      description: "Participez au concours de mixage de MIXX FM",
      image: "https://images.pexels.com/photos/14668688/pexels-photo-14668688.jpeg",
      date: "JUILLET 2025",
      genre: "Concours"
    },
    {
      title: "Festival Electronic Belgium",
      description: "Retrouvez MIXX FM au plus grand festival électro de Belgique",
      image: "https://images.pexels.com/photos/14470112/pexels-photo-14470112.jpeg",
      date: "AOÛT 2025",
      genre: "Festival"
    },
    {
      title: "Interview Carl Cox",
      description: "Rencontre exclusive avec la légende de la techno",
      image: "https://images.unsplash.com/photo-1584228363795-3a8b2c2c1d78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsfGVufDB8fHxyZWR8MTc1MTkwNTQ2N3ww&ixlib=rb-4.1.0&q=85",
      date: "JUIN 2025",
      genre: "Interview"
    },
    {
      title: "Sound of Charleroi",
      description: "Découvrez la scène électro locale de Charleroi",
      image: "https://images.unsplash.com/photo-1557039834-2f2208c6973c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      date: "JUIN 2025",
      genre: "Local"
    }
  ];

  const events = [
    {
      title: "Tomorrowland Preview Party",
      description: "Échauffez-vous pour Tomorrowland avec nos DJs residents",
      image: "https://images.pexels.com/photos/19175880/pexels-photo-19175880.jpeg",
      date: "15 JUILLET 2025",
      genre: "Event"
    },
    {
      title: "Warehouse Sessions",
      description: "Soirée underground dans les anciens entrepôts de Charleroi",
      image: "https://images.unsplash.com/photo-1551558493-23ad82b16536?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      date: "28 JUILLET 2025",
      genre: "Underground"
    },
    {
      title: "Deep House Cruise",
      description: "Croisière musicale sur la Sambre avec deep house",
      image: "https://images.unsplash.com/photo-1649144006652-cc80c2e8aab8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      date: "10 AOÛT 2025",
      genre: "Cruise"
    },
    {
      title: "Techno Marathon",
      description: "12 heures de techno non-stop avec les meilleurs DJs",
      image: "https://images.pexels.com/photos/32001123/pexels-photo-32001123.jpeg",
      date: "25 AOÛT 2025",
      genre: "Marathon"
    }
  ];

  const latestMixes = [
    {
      title: "Summer Vibes 2025",
      description: "Le meilleur de la deep house estivale",
      image: "https://images.unsplash.com/photo-1659083726032-32d67d08ba64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxyYWRpbyUyMHN0dWRpb3xlbnwwfHx8cmVkfDE3NTE5MDU0NTF8MA&ixlib=rb-4.1.0&q=85",
      date: "Mix #127",
      genre: "Deep House"
    },
    {
      title: "Warehouse Anthems",
      description: "Les classiques de la techno industrielle",
      image: "https://images.unsplash.com/photo-1562935256-b3a90e747071?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMHN0dWRpb3xlbnwwfHx8cmVkfDE3NTE5MDU0NTF8MA&ixlib=rb-4.1.0&q=85",
      date: "Mix #126",
      genre: "Techno"
    },
    {
      title: "Electronic Fusion",
      description: "Mélange explosif de styles électroniques",
      image: "https://images.unsplash.com/photo-1650765814764-aeae1a900dfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxESiUyMG1peGluZ3xlbnwwfHx8cmVkfDE3NTE5MDU0NDR8MA&ixlib=rb-4.1.0&q=85",
      date: "Mix #125",
      genre: "Electro"
    },
    {
      title: "Belgian Underground",
      description: "Focus sur la scène underground belge",
      image: "https://images.pexels.com/photos/6547593/pexels-photo-6547593.jpeg",
      date: "Mix #124",
      genre: "Underground"
    }
  ];

  return (
    <div className="App bg-black min-h-screen">
      <Header />
      
      <main className="relative pb-24">
        {/* Hero Section with Live Playlist */}
        <section className="bg-gradient-to-br from-purple-900 via-black to-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <HeroSection />
              </div>
              <div>
                <LivePlaylist />
              </div>
            </div>
          </div>
        </section>

        {/* Programming Schedule */}
        <ShowsGrid title="PROGRAMMATION MIXX FM" shows={featuredShows} />

        {/* This Week on MIXX FM */}
        <section className="bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-purple-400 font-bold text-3xl mb-4">CETTE SEMAINE SUR MIXX FM</h2>
              <p className="text-gray-400 text-lg">Culture électro 24/7 sur le 107.6 FM</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 rounded-2xl p-6 border border-purple-800">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-2xl">🎧</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">DEEP HOUSE SESSIONS</h3>
                    <p className="text-gray-400 text-sm">Plongez dans l'univers de la deep house avec nos sélections</p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-6 border border-purple-800">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-2xl">⚡</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">TECHNO NIGHTS</h3>
                    <p className="text-gray-400 text-sm">Les nuits les plus intenses de la techno européenne</p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-6 border border-purple-800">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-2xl">🎵</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">ELECTRO FUSION</h3>
                    <p className="text-gray-400 text-sm">Mélange unique de styles électroniques contemporains</p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-6 border border-purple-800">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-2xl">🔥</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">TECH-HOUSE SESSIONS</h3>
                    <p className="text-gray-400 text-sm">L'énergie du tech-house pour vos soirées</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 border border-purple-800">
                  <h3 className="text-purple-400 font-bold text-xl mb-4">🎤 LIVE MAINTENANT</h3>
                  <img 
                    src="https://images.pexels.com/photos/14668688/pexels-photo-14668688.jpeg"
                    alt="Live DJ"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-bold text-lg mb-2 text-white">RAVE BROTHERS & DYLAN KERR</h4>
                  <p className="text-gray-400 text-sm mb-4">En direct avec "YOU GOT TO GET DOWN"</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-purple-400">EN DIRECT</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    🎧 Écouter maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DJ Section */}
        <DJSection />

        {/* Weekly Highlights */}
        <ContentSection title="ACTUALITÉS MIXX FM" items={weeklyHighlights} bgColor="bg-gray-900" />

        {/* Events */}
        <ContentSection title="ÉVÉNEMENTS À VENIR" items={events} bgColor="bg-gray-800" />

        {/* Latest Mixes */}
        <ContentSection title="DERNIERS MIXES" items={latestMixes} bgColor="bg-gray-900" />

        {/* Frequency Info Section */}
        <section className="bg-gradient-to-r from-purple-900 to-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white font-bold text-3xl mb-8">ÉCOUTEZ MIXX FM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black bg-opacity-50 rounded-2xl p-8 border border-purple-800">
                <div className="text-4xl mb-4">📻</div>
                <h3 className="text-purple-400 font-bold text-xl mb-2">FM RADIO</h3>
                <p className="text-white text-2xl font-bold">107.6 FM</p>
                <p className="text-gray-400">Charleroi et environs</p>
              </div>
              <div className="bg-black bg-opacity-50 rounded-2xl p-8 border border-purple-800">
                <div className="text-4xl mb-4">📡</div>
                <h3 className="text-purple-400 font-bold text-xl mb-2">DAB+ DIGITAL</h3>
                <p className="text-white text-2xl font-bold">11B</p>
                <p className="text-gray-400">Qualité numérique</p>
              </div>
              <div className="bg-black bg-opacity-50 rounded-2xl p-8 border border-purple-800">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-purple-400 font-bold text-xl mb-2">STREAMING</h3>
                <p className="text-white text-2xl font-bold">24/7</p>
                <p className="text-gray-400">Partout dans le monde</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AudioPlayer />
      <Footer />
    </div>
  );
}

export default App;