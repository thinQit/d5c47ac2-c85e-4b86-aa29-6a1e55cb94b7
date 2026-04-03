'use client'

import { Button } from '@/components/ui/button'

export default function ReviewForm() {
  return (
    <form className="space-y-3 rounded-xl border p-4">
      <p className="font-semibold">Write a review</p>
      <input className="w-full rounded-md border px-3 py-2" placeholder="Review title" />
      <textarea className="w-full rounded-md border px-3 py-2" rows={4} placeholder="Share your thoughts..." />
      <input type="file" multiple className="text-sm" />
      <Button className="bg-[#E63946] text-white hover:bg-[#cf2f3c]">Submit Review</Button>
    </form>
  )
}
