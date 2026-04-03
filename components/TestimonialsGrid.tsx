"use client";

import { Card } from '@/components/ui/card'
import RatingStars from '@/components/RatingStars'

export default function TestimonialsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {['NeoStride V2', 'UrbanFlex', 'CloudDash'].map((product) => (
          <Card key={product} className="p-4">
            <RatingStars rating={5} count={1} />
            <p className="mt-2 text-sm">“These are my go-to sneakers every day.”</p>
            <p className="mt-2 text-xs text-muted-foreground">Referenced product: {product}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
