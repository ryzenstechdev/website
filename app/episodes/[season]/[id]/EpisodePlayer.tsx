'use client'

import { ArrowLeftIcon, ArrowDownTrayIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import FillerRating from '@/app/components/FillerRating'
import { useState } from 'react'
import { seasons } from '@/app/data/episodes'
import type { Episode } from '@/app/data/episodes'
import { useRouter } from 'next/navigation'

// Dynamically import the video player component to avoid SSR issues
const VideoPlayer = dynamic(() => import('@/app/components/VideoPlayer'), {
  ssr: false,
})

interface EpisodePlayerProps {
  episode: Episode
}

export default function EpisodePlayer({ episode }: EpisodePlayerProps) {
  const [currentSeason, setCurrentSeason] = useState(episode.season)
  const router = useRouter()

  // Handle season change
  const handleSeasonChange = (newSeason: number) => {
    setCurrentSeason(newSeason)
    // Navigate to the first episode of the selected season if it exists
    const selectedSeason = seasons.find(s => s.id === newSeason)
    if (selectedSeason && selectedSeason.episodeCount > 0) {
      router.push(`/episodes/s${newSeason}/1`)
    }
  }

  // Get next episode or season link
  const getNextLink = () => {
    const currentSeasonData = seasons.find(s => s.id === episode.season)
    const totalEpisodesInSeason = currentSeasonData?.episodeCount || 0

    // If there's a next episode in the current season
    if (episode.id < totalEpisodesInSeason) {
      return `/episodes/s${episode.season}/${episode.id + 1}`
    }

    // If we're at the last episode of the current season, check for next season
    const nextSeason = seasons.find(s => s.id === episode.season + 1)
    if (nextSeason && nextSeason.episodeCount > 0) {
      return `/episodes/s${nextSeason.id}/1`
    }

    return null
  }

  // Get previous episode or season link
  const getPrevLink = () => {
    // If there's a previous episode in the current season
    if (episode.id > 1) {
      return `/episodes/s${episode.season}/${episode.id - 1}`
    }

    // If we're at the first episode of the current season, check for previous season
    const prevSeason = seasons.find(s => s.id === episode.season - 1)
    if (prevSeason && prevSeason.episodeCount > 0) {
      return `/episodes/s${prevSeason.id}/${prevSeason.episodeCount}`
    }

    return null
  }

  const nextLink = getNextLink()
  const prevLink = getPrevLink()

  return (
    <main className="min-h-screen bg-netflix-black">
      {/* Video Player Section */}
      <div className="pt-16 bg-netflix-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
              <ArrowLeftIcon className="h-6 w-6 mr-2" />
              Torna agli Episodi
            </Link>
            <select
              value={currentSeason}
              onChange={(e) => handleSeasonChange(Number(e.target.value))}
              className="season-selector"
            >
              {seasons.map((season) => (
                <option key={season.id} value={season.id} disabled={season.episodeCount === 0}>
                  {season.name} - {season.nickname}
                </option>
              ))}
            </select>
          </div>
          <div className="aspect-video w-full">
            <VideoPlayer videoUrl={episode.videoUrl} />
          </div>
        </div>

        {/* Episode Info */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4 text-white">{episode.title}</h1>
              <p className="text-gray-300 mb-4">{episode.description}</p>
              <FillerRating rating={episode.fillerRating} className="mb-4" />
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={episode.videoUrl}
                download
                className="netflix-button flex items-center justify-center whitespace-nowrap"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Scarica Episodio
              </a>
            </div>
          </div>

          {/* Episode Navigation */}
          <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-800">
            <div className="flex gap-4">
              {prevLink && (
                <Link
                  href={prevLink}
                  className="netflix-button flex items-center"
                >
                  <ChevronLeftIcon className="h-5 w-5 mr-2" />
                  {episode.id > 1 ? 'Episodio Precedente' : 'Stagione Precedente'}
                </Link>
              )}
            </div>
            <div className="flex gap-4">
              {nextLink && (
                <Link
                  href={nextLink}
                  className="netflix-button flex items-center"
                >
                  {episode.id < (seasons.find(s => s.id === episode.season)?.episodeCount || 0) 
                    ? 'Episodio Successivo' 
                    : 'Stagione Successiva'}
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 