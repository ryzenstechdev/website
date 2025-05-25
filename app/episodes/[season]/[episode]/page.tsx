import VideoPlayer from '@/app/components/VideoPlayer'
import { getEpisodeData, generateStaticParams } from '@/app/data/episodes'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FillerRating from '@/app/components/FillerRating'
import Link from 'next/link'

interface PageParams {
  season: string
  episode: string
}

export { generateStaticParams } from '@/app/data/episodes'

export default function EpisodePage({ params }: { params: PageParams }) {
  const episode = getEpisodeData(params.season, params.episode)

  if (!episode) {
    return (
      <div className="min-h-screen bg-netflix-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Episodio non trovato</h1>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-netflix-black text-white">
        {/* Video Player Section */}
        <div className="w-full aspect-video bg-black">
          <VideoPlayer
            videoUrl={episode.videoUrl}
            title={episode.title}
          />
        </div>

        {/* Episode Info Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="space-y-8">
            {/* Episode Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {episode.title}
                </h1>
                <FillerRating rating={episode.fillerRating} />
              </div>
              <p className="text-lg text-gray-300">
                {episode.description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {episode.prevEpisode && (
                <Link
                  href={`/episodes/s${episode.season}/${episode.prevEpisode}`}
                  className="netflix-button w-full sm:w-auto text-center"
                >
                  Episodio precedente
                </Link>
              )}
              
              {episode.nextEpisode && (
                <Link
                  href={`/episodes/s${episode.season}/${episode.nextEpisode}`}
                  className="netflix-button w-full sm:w-auto text-center"
                >
                  Prossimo episodio
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
} 