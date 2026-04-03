'use client'

import Link from 'next/link'
import { X, User, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MobileNavDrawerProps {
  open?: boolean
  onClose?: () => void
  categories?: { label: string; href: string }[]
  collections?: { label: string; href: string }[]
}

export default function MobileNavDrawer({
  open = false,
  onClose = () => {},
  categories = [
    { label: 'Men', href: '/shop?category=men' },
    { label: 'Women', href: '/shop?category=women' },
    { label: 'Lifestyle', href: '/shop?category=lifestyle' },
  ],
  collections = [
    { label: 'Spring Drop', href: '/shop?collection=spring' },
    { label: 'Best Sellers', href: '/shop?collection=best-sellers' },
  ],
}: Partial<MobileNavDrawerProps>) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside className="absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white p-5 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg font-bold">Browse</p>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Categories</p>
        <div className="mb-6 space-y-2">
          {categories.map((item) => (
            <Link key={item.label} href={item.href} className="block rounded-md px-2 py-2 hover:bg-muted">
              {item.label}
            </Link>
          ))}
        </div>

        <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Collections</p>
        <div className="mb-6 space-y-2">
          {collections.map((item) => (
            <Link key={item.label} href={item.href} className="block rounded-md px-2 py-2 hover:bg-muted">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto space-y-2">
          <Link href="/account" className="flex items-center gap-2 rounded-md border px-3 py-2">
            <User className="h-4 w-4" /> My Account
          </Link>
          <Link href="/cart" className="flex items-center gap-2 rounded-md border px-3 py-2">
            <ShoppingBag className="h-4 w-4" /> Cart
          </Link>
        </div>
      </aside>
    </div>
  )
}
