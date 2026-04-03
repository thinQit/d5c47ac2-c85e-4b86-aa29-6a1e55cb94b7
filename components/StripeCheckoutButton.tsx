'use client'

import { Button } from '@/components/ui/button'

interface StripeCheckoutButtonProps {
  label?: string
  checkoutUrl?: string
}

export default function StripeCheckoutButton({
  label = 'Pay with Stripe',
  checkoutUrl = '/api/stripe/checkout',
}: Partial<StripeCheckoutButtonProps>) {
  const handleCheckout = async () => {
    const res = await fetch(checkoutUrl, { method: 'POST' })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return <Button onClick={handleCheckout} className="bg-[#E63946] text-white hover:bg-[#cf2f3c]">{label}</Button>
}
