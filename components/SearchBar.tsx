'use client'

import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 300)
    return () => clearTimeout(t)
  }, [query])

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search sneakers..." className="w-full outline-none" />
      </div>
      {debounced && <div className="absolute mt-2 w-full rounded-lg border bg-white p-2 text-sm">Suggestions for "{debounced}"</div>}
    </div>
  )
}
