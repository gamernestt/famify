
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import PlaylistCard from '../components/cards/PlaylistCard';

const featuredPlaylists = [
  {
    id: 1,
    title: 'Chill Vibes',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=300&fit=crop',
    description: 'Relaxing beats to help you unwind and focus'
  },
  {
    id: 2,
    title: 'Workout Mix',
    imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=300&fit=crop',
    description: 'High energy tracks to power your workout'
  },
  {
    id: 3,
    title: 'Road Trip',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=300&fit=crop',
    description: 'Perfect playlist for your next adventure'
  },
  {
    id: 4,
    title: 'Study Focus',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=300&fit=crop',
    description: 'Concentration-boosting instrumental tracks'
  }
];

const trendingSongs = [
  {
    id: 1,
    title: 'Daydreamer',
    artist: 'Luna Ray',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=300&fit=crop',
    duration: '3:45'
  },
  {
    id: 2,
    title: 'Neon Lights',
    artist: 'The Glow',
    imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=300&fit=crop',
    duration: '4:12'
  },
  {
    id: 3,
    title: 'Midnight Drive',
    artist: 'Electric Dreams',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=300&fit=crop',
    duration: '3:27'
  }
];

const HomePage = () => {
  return (
    <MainLayout>
      <div className="animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 famify-gradient-text">Good afternoon</h1>
          <p className="text-muted-foreground">Discover new music for your day</p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                imageUrl={playlist.imageUrl}
                description={playlist.description}
              />
            ))}
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
          <div className="bg-famify-gray-dark rounded-md overflow-hidden">
            {trendingSongs.map((song, index) => (
              <div 
                key={song.id} 
                className="flex items-center p-3 hover:bg-famify-gray-medium cursor-pointer transition-colors"
              >
                <div className="w-8 text-center text-muted-foreground mr-4">{index + 1}</div>
                <img 
                  src={song.imageUrl} 
                  alt={song.title} 
                  className="h-12 w-12 rounded object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{song.title}</h3>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
                <div className="text-sm text-muted-foreground">{song.duration}</div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Made For You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredPlaylists.slice(0, 4).reverse().map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={'Daily Mix ' + playlist.id}
                imageUrl={playlist.imageUrl}
                description="Custom playlist based on your listening history"
              />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
