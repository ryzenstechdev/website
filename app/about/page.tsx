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
              <h2 className="text-2xl font-semibold text-netflix-orange mb-4">I Nostri Sponsor:</h2>
              <p className="leading-relaxed">
                - <a className="font-semibold text-netflix-orange hover:text-netflix-orange-hover transition-colors" href="https://discord.gg/w3jGFXC5xf">Aserix's HOME (Discord Server)</a>
              </p>
              <p>Se ti piacciono gli anime, i videogiochi e passare ore in vocale con una community attiva, sei nel posto giusto.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-netflix-orange mb-4">Intro Custom, Logo e Branding</h2>
              <p className="leading-relaxed">Potete trovare tutti i nostri Banner, Loghi, Intro in formato .mp4 da poter integrare nel vostro Media server come Jellyfin, Plex o altro sul seguente link:</p>
              <br></br>
              <a className="font-semibold text-netflix-orange hover:text-netflix-orange-hover transition-colors" href="https://drive.google.com/drive/folders/18_oN9bjSCgogoKax9Wr_BVHXeqRU0zpa?usp=sharing">Google Drive</a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 
