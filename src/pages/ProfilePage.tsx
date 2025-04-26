
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlaylistCard from '../components/cards/PlaylistCard';

const userPlaylists = [
  {
    id: 1,
    title: 'My Favorites',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=300&fit=crop',
    description: 'Your personal collection of favorite tracks'
  },
  {
    id: 2,
    title: 'Recently Played',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=300&fit=crop',
    description: 'Music you've been listening to lately'
  }
];

const ProfilePage = () => {
  const [user, setUser] = React.useState({
    name: 'Guest User',
    profilePicture: null,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  return (
    <MainLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 famify-gradient-text">Profile</h1>
        
        <div className="mb-10 bg-famify-gray-dark p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-famify-gray-medium flex items-center justify-center border-2 border-famify-purple">
              {user.profilePicture ? (
                <img 
                  src={user.profilePicture}
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User size={48} className="text-muted-foreground" />
              )}
            </div>
            
            <div className="flex-1">
              <label className="block text-sm text-muted-foreground mb-1">Your Name</label>
              <input
                type="text"
                className="w-full bg-famify-gray-medium p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-famify-purple"
                value={user.name}
                onChange={handleNameChange}
              />
              
              <div className="flex gap-4">
                <Button className="bg-famify-purple hover:bg-famify-purple-dark text-white">
                  Update Profile
                </Button>
                <Button variant="outline" className="border-famify-purple text-famify-purple hover:bg-famify-purple hover:bg-opacity-10">
                  Upload Picture
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Playlists</h2>
          {userPlaylists.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {userPlaylists.map((playlist) => (
                <PlaylistCard
                  key={playlist.id}
                  title={playlist.title}
                  imageUrl={playlist.imageUrl}
                  description={playlist.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-famify-gray-dark rounded-lg">
              <p className="text-muted-foreground">You don't have any playlists yet.</p>
              <Button className="mt-4 bg-famify-purple hover:bg-famify-purple-dark">
                Create Playlist
              </Button>
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
