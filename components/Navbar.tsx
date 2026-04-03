'use client'

import Link from 'next/link'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  categories?: { label: string; href: string }[]
  cartCount?: number
  onMenuClick?: () => void
}

export default function Navbar({
  logoText = 'SneakFlow',
  categories = [
    { label: 'New Arrivals', href: '/shop?category=new' },
    { label: 'Men', href: '/shop?category=men' },
    { label: 'Women', href: '/shop?category=women' },
    { label: 'Running', href: '/shop?category=running' },
    { label: 'Sale', href: '/shop?category=sale' },
  ],
  cartCount = 2,
  onMenuClick = () => {},
}: Partial<NavbarProps>) {
  return (
    <header className="sticky top-0 z-50 border-b bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="text-sm font-medium text-[var(--foreground)]/80 transition hover:text-[var(--foreground)]"
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 rounded-lg border bg-white px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search sneakers..."
            className="w-44 bg-transparent text-sm outline-none lg:w-64"
          />
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-5 w-5" />
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span
                className={cn(
                  'absolute -right-1 -top-1 rounded-full bg-[#E63946] px-1.5 text-[10px] font-bold text-white'
                )}
              >
                {cartCount}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
