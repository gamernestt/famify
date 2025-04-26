
import React from 'react';
import Navbar from '../navigation/Navbar';
import Sidebar from '../navigation/Sidebar';
import MusicPlayer from '../player/MusicPlayer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen flex-col bg-famify-black text-white overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pt-2 pb-24 md:pb-0">
          <div className="px-4 md:px-8">
            {children}
          </div>
        </main>
      </div>
      <MusicPlayer />
      <div className="block md:hidden">
        <Navbar />
      </div>
    </div>
  );
};

export default MainLayout;
