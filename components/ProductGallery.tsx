'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images?: string[]
}

export default function ProductGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/35765454.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577154/site-images/ecommerce/10330119.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg',
  ],
}: Partial<ProductGalleryProps>) {
  const [active, setActive] = useState(0)
  return (
    <div className="space-y-3">
      <Image src={images[active]} alt="Product" width={1200} height={800} className="h-[420px] w-full rounded-xl object-cover" unoptimized />
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button key={img} onClick={() => setActive(i)}>
            <Image src={img} alt="Thumb" width={300} height={200} className="h-24 w-full rounded-md object-cover" unoptimized />
          </button>
        ))}
      </div>
    </div>
  )
}
