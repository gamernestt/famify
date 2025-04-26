
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens
    localStorage.removeItem('famifyUser');
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-famify-black to-famify-gray-dark p-4">
      <div className="w-full max-w-md bg-famify-gray-dark rounded-lg p-8 shadow-lg border border-famify-gray-medium text-center">
        <img 
          src="/lovable-uploads/bb2cbea4-2bea-4ec5-b1f9-ba05e02794b9.png" 
          alt="Famify Logo" 
          className="h-16 w-16 mx-auto mb-4" 
        />
        
        <h1 className="text-2xl font-bold mb-4">Ready to leave?</h1>
        <p className="text-muted-foreground mb-8">Are you sure you want to log out of Famify?</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleLogout} 
            className="bg-famify-purple hover:bg-famify-purple-dark"
          >
            Yes, Log me out
          </Button>
          <Button 
            variant="outline" 
            onClick={handleCancel}
            className="border-famify-purple text-famify-purple hover:bg-famify-purple hover:bg-opacity-10"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
