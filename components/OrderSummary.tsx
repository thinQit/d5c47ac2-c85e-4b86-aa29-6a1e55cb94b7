'use client'

import { Button } from '@/components/ui/button'

export default function OrderSummary() {
  return (
    <div className="rounded-xl border p-4">
      <p className="mb-3 font-semibold">Order Summary</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>$258</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>$9</span></div>
        <div className="flex justify-between"><span>Tax</span><span>$21</span></div>
      </div>
      <input className="mt-3 w-full rounded-md border px-3 py-2 text-sm" placeholder="Promo code" />
      <div className="mt-3 flex justify-between text-lg font-bold"><span>Total</span><span>$288</span></div>
      <Button className="mt-4 w-full bg-[#E63946] text-white hover:bg-[#cf2f3c]">Proceed to Payment</Button>
    </div>
  )
}
