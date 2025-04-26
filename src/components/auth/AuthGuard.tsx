
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('famifyUser');
    
    if (user) {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-famify-black">
        <div className="animate-pulse text-famify-purple">Loading...</div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
