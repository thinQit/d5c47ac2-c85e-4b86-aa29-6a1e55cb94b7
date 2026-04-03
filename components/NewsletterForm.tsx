'use client'

import { Button } from '@/components/ui/button'

export default function NewsletterForm() {
  return (
    <section className="mx-auto max-w-3xl rounded-xl border bg-white p-6">
      <p className="text-xl font-bold">Get 10% Off Your First Pair</p>
      <p className="mt-1 text-sm text-muted-foreground">Early drops, restock alerts, and sneaker care tips.</p>
      <div className="mt-4 flex gap-2">
        <input className="w-full rounded-md border px-3 py-2" placeholder="Enter email" />
        <Button className="bg-[#E63946] text-white hover:bg-[#cf2f3c]">Join</Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">By subscribing, you agree to marketing emails.</p>
    </section>
  )
}
