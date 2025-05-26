'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-netflix-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="relative w-32 h-10 mb-4">
              <Image
                src="/assets/logo.png"
                alt="BLEACH Core"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Sperimenta i capitoli più importanti di BLEACH, selezionati per l'esperienza di visione più completa. Progetto senza scopo di lucro, non riceviamo alcun guadagno dalle pubblicità nè in altri modi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/episodes/s1/1" className="text-gray-400 hover:text-white">
                  Guarda Ora
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/drive/folders/18_oN9bjSCgogoKax9Wr_BVHXeqRU0zpa?usp=sharing" className="text-gray-400 hover:text-white">
                  Assets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <EnvelopeIcon className="w-5 h-5" />
                <a href="mailto:exystech@gmail.com" className="hover:text-white">
                  exystech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPinIcon className="w-5 h-5" />
                <span>Soul Society</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/ryzenstechdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://dsc.gg/teamshinigamicore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BLEACH Core. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
} 
