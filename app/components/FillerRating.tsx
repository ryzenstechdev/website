'use client'

import { StarIcon } from '@heroicons/react/24/solid'

interface FillerRatingProps {
  rating: number // 0-5, where 0 is essential and 5 is completely skippable
  className?: string
}

export default function FillerRating({ rating, className = '' }: FillerRatingProps) {
  const getRatingText = (rating: number) => {
    switch (rating) {
      case 0:
        return "Episodio Essenziale"
      case 1:
        return "Maggiormente Canon"
      case 2:
        return "Parzialmente Canon"
      case 3:
        return "Maggiormente Filler"
      case 4:
        return "Filler"
      case 5:
        return "Completamente Filler"
      default:
        return "Sconosciuto"
    }
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${6 - star <= rating ? 'text-gray-400' : 'text-netflix-orange'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-netflix-gray">
        {getRatingText(rating)}
      </span>
    </div>
  )
} 