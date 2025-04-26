
import React, { createContext, useState, useContext } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  currentTrack: Track | null;
  volume: number;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTrack: (track: Track | null) => void;
  setVolume: (volume: number) => void;
}

interface Track {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  duration: string;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [volume, setVolume] = useState(80);

  return (
    <AudioContext.Provider 
      value={{ 
        isPlaying, 
        currentTrack, 
        volume, 
        setIsPlaying, 
        setCurrentTrack, 
        setVolume 
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
