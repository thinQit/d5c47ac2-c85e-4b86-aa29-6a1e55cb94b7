'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CategoryNavProps {
  categories?: { name: string; description: string; href: string }[]
}

export default function CategoryNav({
  categories = [
    { name: 'Daily Wear', description: 'Comfort-first picks', href: '/shop?category=daily' },
    { name: 'Performance', description: 'Built for speed', href: '/shop?category=performance' },
    { name: 'Street', description: 'Gen Z style', href: '/shop?category=street' },
    { name: 'Limited', description: 'Rare drops', href: '/shop?category=limited' },
  ],
}: Partial<CategoryNavProps>) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:px-6">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className={cn('min-w-[220px] rounded-xl border bg-white p-4 transition hover:shadow-md')}
          >
            <p className="font-semibold">{cat.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
