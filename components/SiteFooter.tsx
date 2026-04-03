"use client";

import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="border-t bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-xl font-bold">SneakFlow</p>
          <p className="mt-3 text-sm text-muted-foreground">
            1048 Market Street, Brooklyn, NY
            <br />
            Mon–Sat: 10:00 AM – 8:00 PM
          </p>
        </div>
        <div>
          <p className="mb-3 font-semibold">Shop</p>
          <div className="space-y-2 text-sm">
            <Link href="/shop">All Sneakers</Link>
            <br />
            <Link href="/shop?category=running">Running</Link>
            <br />
            <Link href="/shop?category=lifestyle">Lifestyle</Link>
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">Support</p>
          <div className="space-y-2 text-sm">
            <Link href="/contact">Contact</Link>
            <br />
            <Link href="/shipping">Shipping</Link>
            <br />
            <Link href="/returns">Returns</Link>
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold">Company</p>
          <div className="space-y-2 text-sm">
            <Link href="/about">About</Link>
            <br />
            <Link href="/privacy">Privacy</Link>
            <br />
            <Link href="/terms">Terms</Link>
          </div>
          <div className="mt-4 flex gap-3">
            <Instagram className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  )
}
