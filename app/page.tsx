import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'
import EpisodeSelector from './components/EpisodeSelector'

const episodes = [
  {
    id: 1,
    title: 'Episodio 1: Il Giorno in cui sono diventato uno Shinigami',
    thumbnail: '/assets/thumbnails/ep1.jpg',
    description: 'Ichigo Kurosaki incontra Rukia Kuchiki e diventa uno Shinigami',
  },
  {
    id: 2,
    title: 'Episodio 2: Il Lavoro di uno Shinigami',
    thumbnail: '/assets/thumbnails/ep2.jpg',
    description: 'Ichigo inizia il suo lavoro come Shinigami sostituto',
  },
  {
    id: 3,
    title: 'Episodio 3: Il Fratello Maggiore',
    thumbnail: '/assets/thumbnails/ep3.jpg',
    description: 'Ichigo incontra il fratello maggiore di Rukia',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Content Section */}
      <section id="content" className="relative py-20">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          <Slideshow />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Episodi</h2>
          <EpisodeSelector episodes={episodes} season={1} />
        </div>
      </section>

      <Footer />
    </main>
  )
} 