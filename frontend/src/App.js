import React from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  LivePlaylist, 
  ShowsGrid, 
  ContentSection, 
  FGMixSection, 
  AudioPlayer, 
  Footer 
} from './components';

function App() {
  // Mock data for different sections
  const featuredShows = [
    {
      title: "HAPPYHOUR",
      subtitle: "HAPPY HOUR",
      image: "https://images.unsplash.com/photo-1584228363795-3a8b2c2c1d78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsfGVufDB8fHxyZWR8MTc1MTkwNTQ2N3ww&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "STARTUP FG",
      subtitle: "STARTUP FG",
      image: "https://images.unsplash.com/photo-1551558493-23ad82b16536?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "FGMIX",
      subtitle: "FG MIX",
      image: "https://images.unsplash.com/photo-1649144006652-cc80c2e8aab8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "FGARCHIVES",
      subtitle: "FG LA NUIT",
      image: "https://images.pexels.com/photos/32001123/pexels-photo-32001123.jpeg"
    },
    {
      title: "LE SON FG",
      subtitle: "LE SON FG",
      image: "https://images.pexels.com/photos/5991464/pexels-photo-5991464.jpeg"
    }
  ];

  const happyHourContent = [
    {
      title: "Interview avec Antoine Baduel",
      description: "Rencontre avec le DJ français qui fait vibrer les clubs",
      image: "https://images.pexels.com/photos/14668688/pexels-photo-14668688.jpeg",
      date: "JUIN 2025"
    },
    {
      title: "Les tendances électro de l'été",
      description: "Découvrez les sons qui vont marquer cette saison",
      image: "https://images.pexels.com/photos/14470112/pexels-photo-14470112.jpeg",
      date: "JUIN 2025"
    },
    {
      title: "Festival Electronic Beats",
      description: "Retour sur les meilleurs moments du festival",
      image: "https://images.unsplash.com/photo-1584228363795-3a8b2c2c1d78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsfGVufDB8fHxyZWR8MTc1MTkwNTQ2N3ww&ixlib=rb-4.1.0&q=85",
      date: "JUIN 2025"
    },
    {
      title: "Nouvelle scène electro française",
      description: "Portrait des artistes qui montent",
      image: "https://images.unsplash.com/photo-1557039834-2f2208c6973c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      date: "JUIN 2025"
    }
  ];

  const djNews = [
    {
      title: "David Guetta annonce sa tournée mondiale",
      description: "Le DJ français révèle les dates de sa prochaine tournée",
      image: "https://images.pexels.com/photos/19175880/pexels-photo-19175880.jpeg",
      date: "25 JUIN 2025"
    },
    {
      title: "Avicii: l'hommage de Tomorrowland",
      description: "Le festival rend hommage au DJ suédois disparu",
      image: "https://images.unsplash.com/photo-1551558493-23ad82b16536?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      date: "24 JUIN 2025"
    },
    {
      title: "Electronic Music Awards 2025",
      description: "Les nominations sont dévoilées",
      image: "https://images.unsplash.com/photo-1649144006652-cc80c2e8aab8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBESnxlbnwwfHx8cmVkfDE3NTE5MDU0NjJ8MA&ixlib=rb-4.1.0&q=85",
      date: "23 JUIN 2025"
    },
    {
      title: "Nouvelle collaboration surprise",
      description: "Deux géants de l'électro s'associent",
      image: "https://images.pexels.com/photos/32001123/pexels-photo-32001123.jpeg",
      date: "22 JUIN 2025"
    }
  ];

  const latestPodcasts = [
    {
      title: "Electronic Story - Episodes exclusifs",
      description: "L'histoire de l'électro racontée par ses pionniers",
      image: "https://images.unsplash.com/photo-1659083726032-32d67d08ba64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxyYWRpbyUyMHN0dWRpb3xlbnwwfHx8cmVkfDE3NTE5MDU0NTF8MA&ixlib=rb-4.1.0&q=85",
      date: "Episode 12"
    },
    {
      title: "FG Mix Sessions",
      description: "Les meilleurs sets des DJs residents",
      image: "https://images.unsplash.com/photo-1562935256-b3a90e747071?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMHN0dWRpb3xlbnwwfHx8cmVkfDE3NTE5MDU0NTF8MA&ixlib=rb-4.1.0&q=85",
      date: "Episode 8"
    },
    {
      title: "Behind the Decks",
      description: "Interviews exclusives avec les plus grands DJs",
      image: "https://images.unsplash.com/photo-1650765814764-aeae1a900dfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxESiUyMG1peGluZ3xlbnwwfHx8cmVkfDE3NTE5MDU0NDR8MA&ixlib=rb-4.1.0&q=85",
      date: "Episode 15"
    },
    {
      title: "Festival Reports",
      description: "Reportages depuis les plus grands festivals",
      image: "https://images.pexels.com/photos/6547593/pexels-photo-6547593.jpeg",
      date: "Episode 6"
    }
  ];

  return (
    <div className="App">
      <Header />
      
      <main className="relative pb-20">
        {/* Hero Section with Live Playlist */}
        <section className="bg-gray-100 py-16">
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

        {/* Featured Shows */}
        <ShowsGrid title="À L'ÉCOUTE FG" shows={featuredShows} />

        {/* This Week on FG */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-red-600 font-bold text-2xl mb-8">CETTE SEMAINE SUR FG</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">VOS ENVIES DE LA SEMAINE EN CLIPS</h3>
                    <p className="text-gray-600 text-sm">Découvrez les clips les plus demandés cette semaine</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">HAPPYHOUR</h3>
                    <p className="text-gray-600 text-sm">LES INVITÉS DE LA SEMAINE DE L'HAPPY HOUR FG</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">STARTUP FG</h3>
                    <p className="text-gray-600 text-sm">Les nouveaux talents à suivre absolument</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-red-600 font-bold text-2xl mb-8">HAPPY HOUR</h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img 
                    src="https://images.pexels.com/photos/14668688/pexels-photo-14668688.jpeg"
                    alt="Happy Hour"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2">Interviews & Mix exclusifs</h3>
                  <p className="text-gray-600 text-sm mb-4">Rencontrez les artistes qui font vibrer la scène électro</p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Écouter maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FG Mix Section */}
        <FGMixSection />

        {/* Happy Hour Content */}
        <ContentSection title="HAPPY HOUR" items={happyHourContent} />

        {/* DJ News */}
        <ContentSection title="DJ NEWS" items={djNews} bgColor="bg-gray-50" />

        {/* Latest Podcasts */}
        <ContentSection title="DERNIERS PODCASTS" items={latestPodcasts} />

        {/* Win and Earn Section */}
        <section className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-red-600 font-bold text-2xl mb-8">JOUE ET GAGNE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">🎁</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Concours Exclusif</h3>
                  <p className="text-gray-400 text-sm">Tentez votre chance pour gagner des places VIP</p>
                </div>
              ))}
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