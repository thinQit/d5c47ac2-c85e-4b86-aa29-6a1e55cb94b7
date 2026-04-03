'use client'

import Link from 'next/link'

export default function AccountMenu() {
  return (
    <div className="w-56 rounded-xl border bg-white p-2 shadow-lg">
      <Link href="/account/orders" className="block rounded-md px-3 py-2 hover:bg-muted">Orders</Link>
      <Link href="/account/profile" className="block rounded-md px-3 py-2 hover:bg-muted">Profile</Link>
      <Link href="/account/addresses" className="block rounded-md px-3 py-2 hover:bg-muted">Addresses</Link>
      <button className="w-full rounded-md px-3 py-2 text-left text-red-500 hover:bg-muted">Sign out</button>
    </div>
  )
}
