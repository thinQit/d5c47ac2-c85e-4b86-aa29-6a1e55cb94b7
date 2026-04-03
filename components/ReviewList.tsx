'use client'

export default function ReviewList() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Customer Reviews</p>
        <select className="rounded-md border px-3 py-2 text-sm">
          <option>Newest</option>
          <option>Top Rated</option>
        </select>
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" /> With photos
      </label>
      <div className="space-y-3 rounded-xl border p-4">
        <p className="font-medium">“Perfect fit and crazy comfort.”</p>
        <p className="text-sm text-muted-foreground">Verified buyer · 2 days ago</p>
      </div>
    </section>
  )
}
