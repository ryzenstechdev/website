'use client'

import Image from 'next/image'
import { getAssetPath } from '@/app/utils/paths'

interface CharacterCardProps {
  name: string
  image: string
  role: string
}

export default function CharacterCard({ name, image, role }: CharacterCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={getAssetPath(image)}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
    </div>
  )
} 