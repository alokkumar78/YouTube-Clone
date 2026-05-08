import React from 'react';
import Link from 'next/link';

const RECOMMENDED = [
  {
    id: 1,
    title: "Next.js 15 Full Course 2026",
    author: "Code Master",
    views: "500K views",
    timestamp: "1 day ago",
    image: "/photo.png",
    thumbImage: "/thumb.jpg"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS with Glassmorphism",
    author: "Design Guru",
    views: "2.1M views",
    timestamp: "1 week ago",
    image: "/2pic.png",
    thumbImage: "/thumb.jpg"
  },
  {
    id: 3,
    title: "Why React is still king in 2026",
    author: "Frontend Daily",
    views: "89K views",
    timestamp: "3 hours ago",
    image: "/photo.png",
    thumbImage: "/thumb.jpg"
  },
  {
    id: 4,
    title: "Building Futuristic UIs",
    author: "John Doe",
    views: "1.5M views",
    timestamp: "2 months ago",
    image: "/2pic.png",
    thumbImage: "/thumb.jpg"
  }
];

export function RecommendedVideos() {
  return (
    <div className="flex flex-col gap-3 pt-4 lg:pt-0">
      <h3 className="text-lg font-semibold text-gray-100 mb-2">Up next</h3>
      {RECOMMENDED.map((video) => (
        <Link href="/watch" key={video.id} className="flex gap-2 group cursor-pointer no-underline">
          <div className="relative w-40 aspect-video rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">
            <img 
              src={video.image} 
              alt={video.title} 
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <div className="flex flex-col flex-1 py-1">
            <div className="font-semibold text-sm text-gray-100 line-clamp-2 leading-tight">
              {video.title}
            </div>
            <div className="text-xs text-gray-400 mt-1">{video.author}</div>
            <div className="text-xs text-gray-400">{video.views} • {video.timestamp}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
