
import React from 'react';
import { cn } from '@/lib/utils';

interface PlaylistCardProps {
  title: string;
  imageUrl: string;
  description: string;
  className?: string;
}

const PlaylistCard = ({ 
  title, 
  imageUrl, 
  description, 
  className 
}: PlaylistCardProps) => {
  return (
    <div className={cn(
      "group flex flex-col bg-famify-gray-medium rounded-md overflow-hidden hover:bg-famify-gray-light transition-all cursor-pointer p-4",
      className
    )}>
      <div className="relative mb-4 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full aspect-square object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="h-12 w-12 bg-famify-purple rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
    </div>
  );
};

export default PlaylistCard;
