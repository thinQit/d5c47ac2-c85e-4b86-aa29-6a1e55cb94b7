"use client";

import { Button } from '@/components/ui/button'

interface CTASectionProps {
  headline?: string
  subheadline?: string
  primaryText?: string
  secondaryText?: string
}

export default function CTASection({
  headline = 'Step Into Your Next Favorite Pair',
  subheadline = 'Discover fresh sneaker drops designed for comfort and street-ready style.',
  primaryText = 'Shop Now',
  secondaryText = 'View New Arrivals',
}: Partial<CTASectionProps>) {
  return (
    <section className="rounded-xl bg-[#1A1A2E] px-6 py-12 text-white">
      <p className="text-3xl font-bold">{headline}</p>
      <p className="mt-2 text-white/80">{subheadline}</p>
      <div className="mt-5 flex gap-3">
        <Button className="bg-[#E63946] text-white hover:bg-[#cf2f3c]">{primaryText}</Button>
        <Button variant="outline" className="border-white text-white">{secondaryText}</Button>
      </div>
    </section>
  )
}
