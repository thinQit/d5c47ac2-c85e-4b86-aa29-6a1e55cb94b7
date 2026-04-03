'use client'

export default function FilterSidebar() {
  return (
    <aside className="space-y-4 rounded-xl border p-4">
      <p className="font-semibold">Filters</p>
      <div>
        <p className="mb-2 text-sm font-medium">Size</p>
        <div className="flex flex-wrap gap-2">{['7', '8', '9', '10'].map((s) => <button key={s} className="rounded-md border px-2 py-1 text-sm">{s}</button>)}</div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Availability</p>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> In stock</label>
      </div>
    </aside>
  )
}
