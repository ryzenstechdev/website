import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-netflix-black pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Chi Siamo</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-netflix-orange mb-4">La Nostra Missione</h2>
              <p className="leading-relaxed">
                BLEACH Core nasce dalla passione per l'anime BLEACH e dalla volontà di offrire ai fan un'esperienza di visione ottimizzata. 
                Il nostro obiettivo è permettere agli spettatori di godere della storia principale di BLEACH senza dover affrontare 
                episodi filler non essenziali.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-netflix-orange mb-4">Cosa Offriamo</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Episodi selezionati della serie principale</li>
                <li>Indicatore di rilevanza per ogni episodio</li>
                <li>Interfaccia moderna e responsive</li>
                <li>Streaming di alta qualità</li>
                <li>Possibilità di download degli episodi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-netflix-orange mb-4">Perché BLEACH Core?</h2>
              <p className="leading-relaxed">
                BLEACH è una serie con molti episodi filler che, sebbene interessanti, possono distrarre dalla trama principale. 
                BLEACH Core è stato creato per offrire un'esperienza di visione più concentrata e coinvolgente, permettendo agli 
                spettatori di seguire la storia principale senza interruzioni.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-netflix-orange mb-4">Disclaimer</h2>
              <p className="leading-relaxed">
                BLEACH Core è un progetto fan-made creato per scopi educativi e di intrattenimento. 
                Non siamo affiliati con Tite Kubo, Shueisha, o qualsiasi altra entità legata alla produzione di BLEACH. 
                Tutti i diritti di BLEACH appartengono ai rispettivi proprietari.
              </p>
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