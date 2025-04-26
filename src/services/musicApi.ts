
// This file simulates an API that provides access to a large music library
// In a real application, this would connect to Spotify or another music service API

// Define types for our music data
export interface Song {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: string;
  genre: string;
  region?: string; // For regional classification (e.g., "India", "Pakistan")
}

export interface Album {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  songs: Song[];
}

export interface Playlist {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  songs: Song[];
}

// Mock song database with regional diversity
const mockSongs: Song[] = [
  // International Songs
  {
    id: 1,
    title: "Daydreamer",
    artist: "Luna Ray",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song1.mp3", // This would be a real URL in production
    duration: "3:45",
    genre: "Pop"
  },
  {
    id: 2,
    title: "Neon Lights",
    artist: "The Glow",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song2.mp3",
    duration: "4:12",
    genre: "Electronic"
  },
  {
    id: 3,
    title: "Midnight Drive",
    artist: "Electric Dreams",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song3.mp3",
    duration: "3:27",
    genre: "Indie"
  },
  
  // Indian Songs
  {
    id: 4,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    imageUrl: "https://images.unsplash.com/photo-1523554888454-84137e72c3ce?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song4.mp3",
    duration: "4:22",
    genre: "Bollywood",
    region: "India"
  },
  {
    id: 5,
    title: "Chaiyya Chaiyya",
    artist: "Sukhwinder Singh",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song5.mp3",
    duration: "6:15",
    genre: "Bollywood",
    region: "India"
  },
  
  // Pakistani Songs
  {
    id: 6,
    title: "Afreen Afreen",
    artist: "Rahat Fateh Ali Khan",
    imageUrl: "https://images.unsplash.com/photo-1547840579-17428f103627?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song6.mp3",
    duration: "7:50",
    genre: "Sufi",
    region: "Pakistan"
  },
  {
    id: 7,
    title: "Tajdar-e-Haram",
    artist: "Atif Aslam",
    imageUrl: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song7.mp3",
    duration: "8:20",
    genre: "Qawwali",
    region: "Pakistan"
  },
  
  // More International Songs
  {
    id: 8,
    title: "Starry Night",
    artist: "Cosmic Waves",
    imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song8.mp3",
    duration: "3:56",
    genre: "Ambient"
  },
  {
    id: 9,
    title: "Urban Dream",
    artist: "City Lights",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song9.mp3",
    duration: "4:05",
    genre: "Hip Hop"
  },
  {
    id: 10,
    title: "Sunset Boulevard",
    artist: "Ocean Memories",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&fit=crop",
    audioUrl: "https://example.com/song10.mp3",
    duration: "5:17",
    genre: "Chill"
  },
];

// Collection of featured playlists
const mockPlaylists: Playlist[] = [
  {
    id: 1,
    title: 'Chill Vibes',
    description: 'Relaxing beats to help you unwind and focus',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=300&fit=crop',
    songs: mockSongs.filter(song => ['Ambient', 'Chill', 'Indie'].includes(song.genre))
  },
  {
    id: 2,
    title: 'Workout Mix',
    description: 'High energy tracks to power your workout',
    imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=300&fit=crop',
    songs: mockSongs.filter(song => ['Electronic', 'Hip Hop'].includes(song.genre))
  },
  {
    id: 3,
    title: 'Bollywood Hits',
    description: 'Top songs from Indian cinema',
    imageUrl: 'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?q=80&w=300&fit=crop',
    songs: mockSongs.filter(song => song.region === 'India')
  },
  {
    id: 4,
    title: 'Pakistani Classics',
    description: 'Timeless melodies from Pakistan',
    imageUrl: 'https://images.unsplash.com/photo-1547840579-17428f103627?q=80&w=300&fit=crop',
    songs: mockSongs.filter(song => song.region === 'Pakistan')
  }
];

// API service to fetch music data
export const musicApi = {
  // Get trending songs
  getTrendingSongs: (): Promise<Song[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockSongs.slice(0, 5));
      }, 500); // Simulate network delay
    });
  },
  
  // Get featured playlists
  getFeaturedPlaylists: (): Promise<Playlist[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockPlaylists);
      }, 500);
    });
  },
  
  // Search functionality
  searchMusic: (query: string): Promise<{songs: Song[], playlists: Playlist[]}> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const filteredSongs = mockSongs.filter(
          song => song.title.toLowerCase().includes(query.toLowerCase()) || 
                 song.artist.toLowerCase().includes(query.toLowerCase())
        );
        
        const filteredPlaylists = mockPlaylists.filter(
          playlist => playlist.title.toLowerCase().includes(query.toLowerCase())
        );
        
        resolve({
          songs: filteredSongs,
          playlists: filteredPlaylists
        });
      }, 700);
    });
  },
  
  // Get songs by region
  getSongsByRegion: (region: string): Promise<Song[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const filteredSongs = mockSongs.filter(song => song.region === region);
        resolve(filteredSongs);
      }, 500);
    });
  },
  
  // Get song by ID
  getSongById: (id: number): Promise<Song | undefined> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const song = mockSongs.find(song => song.id === id);
        resolve(song);
      }, 300);
    });
  },
  
  // Get playlist by ID
  getPlaylistById: (id: number): Promise<Playlist | undefined> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const playlist = mockPlaylists.find(playlist => playlist.id === id);
        resolve(playlist);
      }, 300);
    });
  }
};
