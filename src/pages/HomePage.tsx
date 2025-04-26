
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '../components/layouts/MainLayout';
import PlaylistCard from '../components/cards/PlaylistCard';
import { Headphones, Disc } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';
import { musicApi, Song, Playlist } from '@/services/musicApi';

const HomePage = () => {
  const { setCurrentTrack, setIsPlaying, addToQueue } = useAudio();
  
  // Fetch trending songs
  const { data: trendingSongs = [], isLoading: loadingSongs } = useQuery({
    queryKey: ['trendingSongs'],
    queryFn: () => musicApi.getTrendingSongs(),
  });
  
  // Fetch featured playlists
  const { data: featuredPlaylists = [], isLoading: loadingPlaylists } = useQuery({
    queryKey: ['featuredPlaylists'],
    queryFn: () => musicApi.getFeaturedPlaylists(),
  });

  const handleSongClick = (song: Song) => {
    setCurrentTrack(song);
    setIsPlaying(true);
  };

  const handleAddToQueue = (e: React.MouseEvent, song: Song) => {
    e.stopPropagation();
    addToQueue(song);
  };

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
          {loadingPlaylists ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-48 bg-famify-gray-medium/50 rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : (
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
          )}
        </section>
        
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Headphones size={20} className="text-famify-purple" />
          </div>
          {loadingSongs ? (
            <div className="glass-card rounded-xl overflow-hidden neon-border">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center p-4 border-b border-famify-gray-medium last:border-0">
                  <div className="w-8 h-4 bg-famify-gray-medium/50 rounded animate-pulse mr-4"></div>
                  <div className="h-14 w-14 bg-famify-gray-medium/50 rounded animate-pulse mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-famify-gray-medium/50 rounded w-24 mb-2 animate-pulse"></div>
                    <div className="h-3 bg-famify-gray-medium/50 rounded w-16 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-xl overflow-hidden neon-border">
              {trendingSongs.map((song, index) => (
                <div 
                  key={song.id} 
                  className="flex items-center p-4 hover:bg-famify-purple/10 cursor-pointer transition-colors border-b border-famify-gray-medium last:border-0"
                  onClick={() => handleSongClick(song)}
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
                  <div 
                    className="p-2 rounded-full hover:bg-famify-purple/20 transition-colors"
                    onClick={(e) => handleAddToQueue(e, song)}
                  >
                    <Disc size={16} className="text-famify-purple" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Regional Highlights</h2>
            <span className="text-sm text-famify-purple hover:underline cursor-pointer">Explore</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-red-500/30 to-orange-500/30 p-5 rounded-xl neon-border hover:shadow-lg hover:shadow-red-500/20 transition-all cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Top Indian Tracks</h3>
              <p className="text-sm text-muted-foreground mb-4">Discover the latest and greatest from Bollywood and beyond</p>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors">
                Listen Now
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-500/30 to-teal-500/30 p-5 rounded-xl neon-border hover:shadow-lg hover:shadow-green-500/20 transition-all cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Pakistani Favorites</h3>
              <p className="text-sm text-muted-foreground mb-4">Explore the rich musical heritage of Pakistan</p>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors">
                Listen Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
