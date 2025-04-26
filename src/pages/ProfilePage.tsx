
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
    description: "Music you've been listening to lately"
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
        <div className="bg-gradient-to-r from-famify-purple/20 to-transparent py-6 -mx-8 px-8 mb-8 rounded-b-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 neon-text">Your Profile</h1>
          <p className="text-muted-foreground">Manage your personal settings</p>
        </div>
        
        <div className="mb-10 glass-card p-8 rounded-xl neon-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-famify-gray-medium to-famify-gray-dark flex items-center justify-center border-2 border-famify-purple glow-animation">
              {user.profilePicture ? (
                <img 
                  src={user.profilePicture}
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User size={64} className="text-famify-purple/80" />
              )}
            </div>
            
            <div className="flex-1">
              <label className="block text-sm text-famify-purple mb-2 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full bg-famify-gray-dark/70 backdrop-blur-sm p-3 rounded-lg border border-famify-purple/30 mb-5 focus:outline-none focus:ring-2 focus:ring-famify-purple"
                value={user.name}
                onChange={handleNameChange}
              />
              
              <div className="flex flex-wrap gap-4">
                <Button className="neon-button">
                  Update Profile
                </Button>
                <Button variant="outline" className="border-famify-purple text-famify-purple hover:bg-famify-purple/10 hover:text-white">
                  Upload Picture
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Playlists</h2>
            <Button className="bg-famify-purple/20 hover:bg-famify-purple/30 text-famify-purple text-sm rounded-full px-4">
              Create New
            </Button>
          </div>
          
          {userPlaylists.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
            <div className="text-center py-16 glass-card rounded-xl neon-border">
              <p className="text-muted-foreground mb-3">You don't have any playlists yet.</p>
              <Button className="neon-button">
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
