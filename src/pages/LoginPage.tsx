
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-famify-black to-famify-gray-dark p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/bb2cbea4-2bea-4ec5-b1f9-ba05e02794b9.png" 
              alt="Famify Logo" 
              className="h-16 w-16" 
            />
          </div>
          <h1 className="text-4xl font-bold mb-2 famify-gradient-text">FAMIFY</h1>
          <p className="text-muted-foreground">Your family's music streaming platform</p>
        </div>

        <div className="bg-famify-gray-dark rounded-lg p-6 shadow-lg border border-famify-gray-medium">
          <form onSubmit={handleLogin}>
            <h2 className="text-xl font-semibold mb-6 text-center">Login to your account</h2>
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-famify-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-famify-purple"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-famify-purple to-famify-purple-light hover:opacity-90 font-medium py-3"
            >
              Continue to Famify
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              This is a demo app. In a real application, this would connect to MongoDB for user authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
