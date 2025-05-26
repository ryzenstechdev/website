import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-netflix-black pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Sponsorship</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <p className="leading-relaxed">
                - <a className="font-semibold text-netflix-orange hover:text-netflix-orange-hover transition-colors" href="https://discord.gg/w3jGFXC5xf">Aserix's HOME (Discord Server)</a>
              </p>
              <p>Se ti piacciono gli anime, i videogiochi e passare ore in vocale con una community attiva, sei nel posto giusto.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 
