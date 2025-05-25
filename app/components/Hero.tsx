'use client'

import Image from 'next/image'
import { getAssetPath } from '@/app/utils/paths'

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getAssetPath('/assets/hero-bg.jpg')}
          alt="BLEACH Core Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            BLEACH Core
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            La tua fonte definitiva per tutto ciò che riguarda BLEACH
          </p>
          <a
            href="#content"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Esplora
          </a>
        </div>
      </div>
    </div>
  )
} 