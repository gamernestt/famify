
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, BookOpen, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden md:flex md:w-64 flex-col bg-famify-gray-dark p-4">
      <div className="flex items-center gap-2 mb-8">
        <img 
          src="/lovable-uploads/bb2cbea4-2bea-4ec5-b1f9-ba05e02794b9.png" 
          alt="Famify Logo" 
          className="h-10 w-10" 
        />
        <h1 className="text-2xl font-bold famify-gradient-text">FAMIFY</h1>
      </div>

      <nav className="flex flex-col gap-2">
        <Link 
          to="/" 
          className={cn("sidebar-item", isActive("/") && "active-sidebar-item")}
        >
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link 
          to="/search" 
          className={cn("sidebar-item", isActive("/search") && "active-sidebar-item")}
        >
          <Search size={20} />
          <span>Search</span>
        </Link>
        <Link 
          to="/profile" 
          className={cn("sidebar-item", isActive("/profile") && "active-sidebar-item")}
        >
          <BookOpen size={20} />
          <span>Profile</span>
        </Link>
      </nav>

      <div className="mt-auto">
        <Link to="/logout" className="sidebar-item text-muted-foreground hover:text-white">
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
