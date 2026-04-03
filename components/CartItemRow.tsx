'use client'

import Image from 'next/image'
import { Trash2 } from 'lucide-react'

export default function CartItemRow() {
  return (
    <div className="flex gap-3 border-b py-3">
      <Image
        src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577117/site-images/ecommerce/10330116.jpg"
        alt="Cart item"
        width={120}
        height={120}
        className="h-20 w-20 rounded-md object-cover"
        unoptimized
      />
      <div className="flex-1">
        <p className="font-medium">AeroPulse Runner</p>
        <p className="text-sm text-muted-foreground">Size 9</p>
        <div className="mt-1 flex items-center gap-2">
          <select className="rounded-md border px-2 py-1 text-sm"><option>1</option><option>2</option></select>
          <button className="text-sm text-red-500"><Trash2 className="h-4 w-4" /></button>
        </div>
      </div>
      <p className="font-semibold">$129</p>
    </div>
  )
}
