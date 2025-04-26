
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-famify-gray-dark to-famify-gray-medium border-t border-famify-gray-medium p-2 md:p-4 z-10 hidden md:block">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 w-1/4">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=150&fit=crop" 
            alt="Album cover" 
            className="h-12 w-12 rounded-md object-cover"
          />
          <div>
            <h4 className="font-medium text-sm">Currently Playing</h4>
            <p className="text-xs text-muted-foreground">Artist Name</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4 mb-2">
            <button className="text-muted-foreground hover:text-white">
              <SkipBack size={20} />
            </button>
            <button 
              className="player-control" 
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
            <button className="text-muted-foreground hover:text-white">
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground">0:00</span>
            <Slider defaultValue={[33]} className="w-full" />
            <span className="text-xs text-muted-foreground">3:45</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 w-1/4 justify-end">
          <Volume2 size={18} className="text-muted-foreground" />
          <Slider defaultValue={[80]} className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
