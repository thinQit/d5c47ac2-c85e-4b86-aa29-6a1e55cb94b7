'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import RatingStars from '@/components/RatingStars'

interface ProductCardProps {
  name?: string
  imageSrc?: string
  price?: string
  compareAt?: string
  badge?: string
  rating?: number
}

export default function ProductCard({
  name = 'AeroPulse Runner',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577136/site-images/ecommerce/16675632.jpg',
  price = '$129',
  compareAt = '$159',
  badge = 'Best Seller',
  rating = 4.8,
}: Partial<ProductCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border bg-white">
      <div className="relative">
        <Image src={imageSrc} alt={name} width={800} height={560} className="h-52 w-full object-cover" unoptimized />
        <span className="absolute left-3 top-3 rounded-full bg-[#E63946] px-2 py-1 text-xs font-semibold text-white">{badge}</span>
        <button className="absolute right-3 top-3 rounded-full bg-white p-2">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-2 p-4">
        <p className="font-semibold">{name}</p>
        <RatingStars rating={rating} count={88} />
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold">{price}</p>
          <p className="text-sm text-muted-foreground line-through">{compareAt}</p>
        </div>
        <div className="flex gap-2">
          {['7', '8', '9'].map((size) => (
            <button key={size} className="rounded-md border px-2 py-1 text-xs">
              {size}
            </button>
          ))}
        </div>
        <Button className="w-full bg-[#E63946] text-white hover:bg-[#cf2f3c]">Quick Add</Button>
      </div>
    </Card>
  )
}
