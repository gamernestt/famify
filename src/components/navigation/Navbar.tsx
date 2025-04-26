
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
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-famify-black to-famify-gray-dark border-t border-famify-purple/30 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-around">
        <Link to="/" className={cn(
          "nav-link", 
          isActive("/") ? "text-famify-purple" : "text-muted-foreground"
        )}>
          <div className="flex flex-col items-center">
            <div className={cn(
              "p-2 rounded-full", 
              isActive("/") ? "bg-famify-purple/20" : ""
            )}>
              <Home size={20} />
            </div>
            <span className="text-xs mt-1">Home</span>
          </div>
        </Link>
        <Link to="/search" className={cn(
          "nav-link", 
          isActive("/search") ? "text-famify-purple" : "text-muted-foreground"
        )}>
          <div className="flex flex-col items-center">
            <div className={cn(
              "p-2 rounded-full", 
              isActive("/search") ? "bg-famify-purple/20" : ""
            )}>
              <Search size={20} />
            </div>
            <span className="text-xs mt-1">Search</span>
          </div>
        </Link>
        <Link to="/profile" className={cn(
          "nav-link", 
          isActive("/profile") ? "text-famify-purple" : "text-muted-foreground"
        )}>
          <div className="flex flex-col items-center">
            <div className={cn(
              "p-2 rounded-full", 
              isActive("/profile") ? "bg-famify-purple/20" : ""
            )}>
              <User size={20} />
            </div>
            <span className="text-xs mt-1">Profile</span>
          </div>
        </Link>
        <Link to="/logout" className={cn(
          "nav-link", 
          isActive("/logout") ? "text-famify-purple" : "text-muted-foreground"
        )}>
          <div className="flex flex-col items-center">
            <div className={cn(
              "p-2 rounded-full", 
              isActive("/logout") ? "bg-famify-purple/20" : ""
            )}>
              <LogOut size={20} />
            </div>
            <span className="text-xs mt-1">Logout</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
