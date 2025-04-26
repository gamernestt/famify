
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-famify-gray-dark border-t border-famify-gray-medium py-2">
      <div className="flex items-center justify-around">
        <Link to="/" className={cn("nav-link", isActive("/") && "text-famify-purple")}>
          <div className="flex flex-col items-center">
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </div>
        </Link>
        <Link to="/search" className={cn("nav-link", isActive("/search") && "text-famify-purple")}>
          <div className="flex flex-col items-center">
            <Search size={20} />
            <span className="text-xs mt-1">Search</span>
          </div>
        </Link>
        <Link to="/profile" className={cn("nav-link", isActive("/profile") && "text-famify-purple")}>
          <div className="flex flex-col items-center">
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </div>
        </Link>
        <Link to="/logout" className={cn("nav-link", isActive("/logout") && "text-famify-purple")}>
          <div className="flex flex-col items-center">
            <LogOut size={20} />
            <span className="text-xs mt-1">Logout</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
