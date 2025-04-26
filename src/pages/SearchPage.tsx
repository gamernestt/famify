
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '../components/layouts/MainLayout';
import { Search, Play, Disc } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';
import { musicApi, Song } from '@/services/musicApi';
import PlaylistCard from '../components/cards/PlaylistCard';

const categories = [
  { name: "Pop", color: "from-pink-500 to-red-500" },
  { name: "Rock", color: "from-red-500 to-orange-500" },
  { name: "Hip Hop", color: "from-yellow-500 to-green-500" },
  { name: "Electronic", color: "from-green-500 to-teal-500" },
  { name: "R&B", color: "from-teal-500 to-blue-500" },
  { name: "Indie", color: "from-blue-500 to-indigo-500" },
  { name: "Jazz", color: "from-indigo-500 to-purple-500" },
  { name: "Classical", color: "from-purple-500 to-pink-500" },
  { name: "Bollywood", color: "from-red-600 to-yellow-500" },
  { name: "Pakistani", color: "from-green-600 to-emerald-400" },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { setCurrentTrack, setIsPlaying, addToQueue } = useAudio();
  
  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);
  
  // Search query
  const { data: searchResults, isLoading } = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => musicApi.searchMusic(debouncedQuery),
    enabled: debouncedQuery.length > 0,
  });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 famify-gradient-text">Search</h1>
        
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="h-12 w-full bg-famify-gray-medium rounded-full pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-famify-purple focus:ring-opacity-50 transition-all"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        
        {!searchQuery && (
          <section className="mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div 
                  key={category.name}
                  className={`bg-gradient-to-br ${category.color} h-28 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden relative transform transition-all hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <h3 className="text-xl font-bold z-10">{category.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {searchQuery && (
          <div className="mb-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Search results for "{searchQuery}"</h3>
            
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-famify-purple border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4 text-muted-foreground">Searching millions of songs...</p>
              </div>
            ) : (
              <>
                {searchResults && searchResults.songs.length > 0 ? (
                  <>
                    <div className="mb-8">
                      <h4 className="text-lg font-medium mb-3">Songs</h4>
                      <div className="glass-card rounded-xl overflow-hidden neon-border">
                        {searchResults.songs.map((song, index) => (
                          <div 
                            key={song.id} 
                            className="flex items-center p-4 hover:bg-famify-purple/10 cursor-pointer transition-colors border-b border-famify-gray-medium last:border-0"
                            onClick={() => handleSongClick(song)}
                          >
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
                    </div>
                    
                    {searchResults.playlists.length > 0 && (
                      <div>
                        <h4 className="text-lg font-medium mb-3">Playlists</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                          {searchResults.playlists.map((playlist) => (
                            <PlaylistCard
                              key={playlist.id}
                              title={playlist.title}
                              imageUrl={playlist.imageUrl}
                              description={playlist.description}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No results found for "{searchQuery}"</p>
                    <p className="mt-2 text-sm">Try searching for a different song, artist, or album</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
