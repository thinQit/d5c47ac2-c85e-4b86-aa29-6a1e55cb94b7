"use client";

import { ShieldCheck, Truck, RotateCcw, BadgeCheck } from 'lucide-react'

export default function TrustBadges() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
      <div className="rounded-xl border p-4"><ShieldCheck className="mb-2 h-5 w-5" />Secure Stripe Checkout</div>
      <div className="rounded-xl border p-4"><Truck className="mb-2 h-5 w-5" />2-Day Shipping</div>
      <div className="rounded-xl border p-4"><RotateCcw className="mb-2 h-5 w-5" />30-Day Returns</div>
      <div className="rounded-xl border p-4"><BadgeCheck className="mb-2 h-5 w-5" />Verified Reviews</div>
    </section>
  )
}
