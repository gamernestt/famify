
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import { Song } from '../services/musicApi';

interface AudioContextType {
  isPlaying: boolean;
  currentTrack: Song | null;
  volume: number;
  currentTime: number;
  duration: number;
  playbackProgress: number;
  queue: Song[];
  setIsPlaying: (playing: boolean) => void;
  setCurrentTrack: (track: Song | null) => void;
  setVolume: (volume: number) => void;
  seekTo: (time: number) => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  addToQueue: (track: Song) => void;
  removeFromQueue: (trackId: number) => void;
  clearQueue: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Song | null>(null);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [queue, setQueue] = useState<Song[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume / 100;
    
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setPlaybackProgress(
          audioRef.current.duration 
            ? Math.round((audioRef.current.currentTime / audioRef.current.duration) * 100) 
            : 0
        );
      }
    };
    
    const handleEnded = () => {
      playNextTrack();
    };
    
    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };
    
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Handle track changes
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
    }
  }, [currentTrack]);
  
  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);
  
  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };
  
  const playNextTrack = () => {
    if (queue.length > 0) {
      const nextTrack = queue[0];
      setCurrentTrack(nextTrack);
      setQueue(prevQueue => prevQueue.slice(1));
    } else {
      setIsPlaying(false);
    }
  };
  
  const playPreviousTrack = () => {
    // This would require maintaining a history of played tracks
    // For simplicity, we'll just restart the current track
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };
  
  const addToQueue = (track: Song) => {
    setQueue(prevQueue => [...prevQueue, track]);
  };
  
  const removeFromQueue = (trackId: number) => {
    setQueue(prevQueue => prevQueue.filter(track => track.id !== trackId));
  };
  
  const clearQueue = () => {
    setQueue([]);
  };
  
  return (
    <AudioContext.Provider 
      value={{ 
        isPlaying,
        currentTrack,
        volume,
        currentTime,
        duration,
        playbackProgress,
        queue,
        setIsPlaying,
        setCurrentTrack,
        setVolume,
        seekTo,
        playNextTrack,
        playPreviousTrack,
        addToQueue,
        removeFromQueue,
        clearQueue
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
