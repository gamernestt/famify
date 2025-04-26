
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, User, LogOut, Music } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden md:flex md:w-64 flex-col bg-famify-black p-5 border-r border-famify-gray-medium">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-10 w-10 bg-gradient-to-br from-famify-purple to-famify-purple-light rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(155,135,245,0.4)]">
          <Music size={20} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold famify-gradient-text">FAMIFY</h1>
      </div>

      <div className="mb-8">
        <h3 className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-4 px-4">Menu</h3>
        <nav className="flex flex-col gap-1">
          <Link 
            to="/" 
            className={cn(
              "sidebar-item rounded-lg", 
              isActive("/") 
                ? "bg-famify-purple/20 text-white font-medium" 
                : "text-muted-foreground"
            )}
          >
            <Home size={20} className={isActive("/") ? "text-famify-purple" : ""} />
            <span>Home</span>
          </Link>
          <Link 
            to="/search" 
            className={cn(
              "sidebar-item rounded-lg", 
              isActive("/search") 
                ? "bg-famify-purple/20 text-white font-medium" 
                : "text-muted-foreground"
            )}
          >
            <Search size={20} className={isActive("/search") ? "text-famify-purple" : ""} />
            <span>Search</span>
          </Link>
          <Link 
            to="/profile" 
            className={cn(
              "sidebar-item rounded-lg", 
              isActive("/profile") 
                ? "bg-famify-purple/20 text-white font-medium" 
                : "text-muted-foreground"
            )}
          >
            <User size={20} className={isActive("/profile") ? "text-famify-purple" : ""} />
            <span>Profile</span>
          </Link>
        </nav>
      </div>
      
      <div className="mt-auto">
        <div className="p-4 rounded-xl bg-famify-gray-dark/50 mb-6 backdrop-blur-sm border border-famify-gray-medium">
          <h3 className="font-medium mb-2">Unleash Premium Sound</h3>
          <p className="text-xs text-muted-foreground mb-3">Listen to high quality music without limitations</p>
          <button className="w-full bg-white text-famify-black py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
            Try Premium
          </button>
        </div>
        
        <Link to="/logout" className="sidebar-item text-muted-foreground hover:text-white">
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
