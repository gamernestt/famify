
import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, List } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useAudio } from '@/contexts/AudioContext';

const MusicPlayer = () => {
  const { isPlaying, currentTrack, volume, setIsPlaying, setVolume } = useAudio();
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#111111] to-famify-gray-dark border-t border-famify-purple/20 p-3 md:p-4 z-10 hidden md:block neon-border border-l-0 border-r-0 border-b-0 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 w-1/4">
          <img 
            src={currentTrack.imageUrl}
            alt="Album cover" 
            className="h-14 w-14 rounded-md object-cover shadow-lg"
          />
          <div className="overflow-hidden">
            <h4 className="font-medium text-sm truncate">{currentTrack.title}</h4>
            <p className="text-xs text-muted-foreground truncate">{currentTrack.artist}</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4 mb-2">
            <button className="text-muted-foreground hover:text-white transition-colors">
              <SkipBack size={20} />
            </button>
            <button 
              className="bg-famify-purple hover:bg-famify-purple-light text-white rounded-full h-10 w-10 flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_10px_rgba(155,135,245,0.4)]" 
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
            <button className="text-muted-foreground hover:text-white transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground">0:00</span>
            <div className="relative w-full h-1 group">
              <Slider 
                defaultValue={[33]} 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10" 
              />
              <div className="h-1 bg-famify-gray-medium rounded-full w-full">
                <div className="h-1 bg-famify-purple rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{currentTrack.duration}</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 w-1/4 justify-end">
          <List size={18} className="text-muted-foreground cursor-pointer hover:text-famify-purple transition-colors" />
          <div className="flex items-center gap-2">
            <Volume2 size={18} className="text-muted-foreground" />
            <div className="relative w-28 h-1 group">
              <Slider 
                defaultValue={[volume]} 
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10" 
              />
              <div className="h-1 bg-famify-gray-medium rounded-full w-full">
                <div className="h-1 bg-famify-purple rounded-full" style={{ width: `${volume}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
