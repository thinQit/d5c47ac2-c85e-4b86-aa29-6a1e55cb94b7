'use client'

import { Button } from '@/components/ui/button'
import CartItemRow from '@/components/CartItemRow'

export default function CartDrawer() {
  return (
    <aside className="w-full max-w-md space-y-3 border-l bg-white p-4">
      <p className="text-lg font-bold">Your Cart</p>
      <CartItemRow />
      <CartItemRow />
      <div className="flex justify-between pt-2 font-semibold">
        <span>Subtotal</span>
        <span>$258</span>
      </div>
      <Button className="w-full bg-[#E63946] text-white hover:bg-[#cf2f3c]">Checkout</Button>
    </aside>
  )
}
