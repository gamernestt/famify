
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Music } from 'lucide-react';

const LoginPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      // In a real app, you'd handle proper authentication here
      localStorage.setItem('famifyUser', JSON.stringify({ name }));
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-famify-black via-famify-gray-dark to-[#1e1450] p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=1974&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-famify-purple to-famify-purple-light flex items-center justify-center shadow-[0_0_25px_rgba(155,135,245,0.5)] glow-animation">
              <Music size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-2 famify-gradient-text">FAMIFY</h1>
          <p className="text-xl text-famify-purple/80 font-medium">Unleash the Premium Sound Experience</p>
          <p className="text-sm text-muted-foreground mt-2">Your family's music streaming platform</p>
        </div>

        <div className="glass-card rounded-2xl p-8 shadow-xl neon-border backdrop-blur-xl">
          <form onSubmit={handleLogin}>
            <h2 className="text-xl font-semibold mb-6 text-center">Start your music journey</h2>
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-famify-purple mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-famify-gray-dark/70 backdrop-blur-sm rounded-lg border border-famify-purple/30 focus:outline-none focus:ring-2 focus:ring-famify-purple focus:border-transparent"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full neon-button py-3 rounded-lg h-12 font-medium text-base"
            >
              Continue to Famify
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Listen Premium Music. Anytime. Anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
