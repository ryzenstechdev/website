'use client'

import { useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
  title: string
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full aspect-video bg-black relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
        </div>
      )}
      <iframe
        src={videoUrl}
        className="w-full h-full"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
      
      <div className="mt-4">
      </div>
    </div>
  )
} 
