import Image from 'next/image'
import Link from 'next/link'
import FillerRating from './components/FillerRating'
import Slideshow from './components/Slideshow'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { seasons } from './data/episodes'
import { getEpisodeData } from './data/episodes'
import { getAssetPath } from './utils/paths'

// Slideshow images
const slideshowImages = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-netflix-black">
        {/* Hero Section with Slideshow */}
        <div className="relative h-[90vh] w-full">
          {/* Slideshow Background */}
          <div className="absolute inset-0">
            <Slideshow images={slideshowImages} interval={6000} />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black to-transparent" />

          {/* Content */}
          <div className="relative h-full flex items-center px-4 md:px-16 z-20">
            <div className="max-w-2xl space-y-6">
              <div className="relative w-[300px] h-[100px]">
                <Image
                  src={getAssetPath('/assets/logo.png')}
                  alt="BLEACH Core"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <p className="text-lg md:text-xl text-gray-300">
                Sperimenta i capitoli più importanti di BLEACH, selezionati per l'esperienza di visione più completa.
              </p>
              <Link 
                href="/episodes/s1/1"
                className="netflix-button inline-block"
              >
                Guarda Ora
              </Link>
            </div>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="px-4 md:px-16 py-12 bg-netflix-black">
          {seasons.map((season) => (
            <div key={season.id} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{season.name}</h2>
              <h3 className="text-xl text-orange-600 mb-8">{season.nickname}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {Array.from({ length: season.episodeCount }, (_, i) => i + 1).map((episodeId) => {
                  const episode = getEpisodeData(`s${season.id}`, episodeId.toString())
                  return (
                    <div key={episode.id} className="episode-card group">
                      <div className="episode-thumbnail">
                        <Image
                          src={getAssetPath(episode.thumbnail)}
                          alt={episode.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="episode-overlay group-hover:bg-opacity-50">
                          <Link
                            href={`/episodes/s${episode.season}/${episode.id}`}
                            className="netflix-button opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Guarda Ora
                          </Link>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{episode.title}</h3>
                        <p className="text-netflix-gray text-sm mb-3">{episode.description}</p>
                        <FillerRating rating={episode.fillerRating} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
} 