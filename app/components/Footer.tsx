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
              Sperimenta i capitoli più importanti di BLEACH, selezionati per l'esperienza di visione più completa.
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
                <Link href="/episodes" className="text-gray-400 hover:text-white">
                  Episodi
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
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
                  href="https://github.com/bleachcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/bleachcore"
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