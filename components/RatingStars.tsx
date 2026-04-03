"use client";

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingStarsProps {
  rating?: number
  count?: number
  className?: string
}

export default function RatingStars({
  rating = 4.8,
  count = 124,
  className = '',
}: Partial<RatingStarsProps>) {
  return (
    <div className={cn('flex items-center gap-1', className)} aria-label={'Rated ' + rating + ' out of 5 from ' + count + ' reviews'}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={cn('h-4 w-4', rating >= s ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300')}
        />
      ))}
      <span className="ml-1 text-xs text-muted-foreground">({count})</span>
    </div>
  )
}
