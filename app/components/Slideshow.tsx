'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/app/utils/paths'

interface Slide {
  id: number
  image: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/assets/1.jpg',
    title: 'BLEACH: Thousand-Year Blood War',
    description: 'La guerra finale tra Shinigami e Quincy',
  },
  {
    id: 2,
    image: '/assets/2.jpg',
    title: 'BLEACH: The Lost Agent',
    description: 'La saga del Fullbring e il ritorno dei poteri',
  },
  {
    id: 3,
    image: '/assets/3.jpg',
    title: 'BLEACH: Arrancar',
    description: 'La battaglia contro gli Arrancar e Aizen',
  },
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={getAssetPath(slide.image)}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 