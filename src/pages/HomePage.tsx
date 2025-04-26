
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import PlaylistCard from '../components/cards/PlaylistCard';
import { Headphones, Disc } from 'lucide-react';

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
        <div className="bg-gradient-to-b from-famify-purple/30 to-transparent p-8 -mx-8 rounded-b-3xl mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 neon-text">Good afternoon</h1>
          <p className="text-muted-foreground text-lg">Discover the sounds that move you</p>
          
          <div className="mt-6 flex items-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-famify-purple to-famify-purple-light rounded-full"></div>
            <p className="text-sm font-medium text-famify-purple">PREMIUM MUSIC</p>
          </div>
        </div>
        
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Playlists</h2>
            <span className="text-sm text-famify-purple hover:underline cursor-pointer">See all</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
        
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Headphones size={20} className="text-famify-purple" />
          </div>
          <div className="glass-card rounded-xl overflow-hidden neon-border">
            {trendingSongs.map((song, index) => (
              <div 
                key={song.id} 
                className="flex items-center p-4 hover:bg-famify-purple/10 cursor-pointer transition-colors border-b border-famify-gray-medium last:border-0"
              >
                <div className="w-8 text-center text-muted-foreground mr-4">{index + 1}</div>
                <img 
                  src={song.imageUrl} 
                  alt={song.title} 
                  className="h-14 w-14 rounded object-cover mr-4 shadow-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{song.title}</h3>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
                <div className="text-sm text-muted-foreground mr-2">{song.duration}</div>
                <div className="p-2 rounded-full hover:bg-famify-purple/20 transition-colors">
                  <Disc size={16} className="text-famify-purple" />
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Made For You</h2>
            <span className="text-sm text-famify-purple hover:underline cursor-pointer">Refresh</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
