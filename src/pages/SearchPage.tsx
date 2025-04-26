
import React, { useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { Search } from 'lucide-react';

const categories = [
  { name: "Pop", color: "from-pink-500 to-red-500" },
  { name: "Rock", color: "from-red-500 to-orange-500" },
  { name: "Hip Hop", color: "from-yellow-500 to-green-500" },
  { name: "Electronic", color: "from-green-500 to-teal-500" },
  { name: "R&B", color: "from-teal-500 to-blue-500" },
  { name: "Indie", color: "from-blue-500 to-indigo-500" },
  { name: "Jazz", color: "from-indigo-500 to-purple-500" },
  { name: "Classical", color: "from-purple-500 to-pink-500" },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
        
        <section className="mb-8">
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
        
        {searchQuery && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Search results for "{searchQuery}"</h3>
            <div className="text-center py-12 text-muted-foreground">
              <p>Enter a song, artist, or album name to search</p>
              <p className="mt-2 text-sm">This is a demo app. Real search functionality would be integrated with the Spotify API.</p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
