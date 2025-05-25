'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/app/utils/paths'

interface Episode {
  id: number
  title: string
  thumbnail: string
  description: string
}

interface EpisodeSelectorProps {
  episodes: Episode[]
  season: number
}

export default function EpisodeSelector({ episodes, season }: EpisodeSelectorProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          onMouseEnter={() => setSelectedEpisode(episode)}
          onMouseLeave={() => setSelectedEpisode(null)}
        >
          <Link href={`/episodes/${season}/${episode.id}`}>
            <div className="relative h-48">
              <Image
                src={getAssetPath(episode.thumbnail)}
                alt={episode.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                  {selectedEpisode?.id === episode.id && (
                    <p className="text-sm">{episode.description}</p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
} 