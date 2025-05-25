'use client'

interface FillerRatingProps {
  rating: number
  className?: string
}

export default function FillerRating({ rating, className = '' }: FillerRatingProps) {
  const getRatingColor = (rating: number) => {
    if (rating <= 2) return 'text-green-500'
    if (rating <= 4) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getRatingText = (rating: number) => {
    if (rating <= 2) return 'Canon'
    if (rating <= 4) return 'Mixed'
    return 'Filler'
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`text-sm font-semibold ${getRatingColor(rating)}`}>
        {getRatingText(rating)}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < rating ? getRatingColor(rating) : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 