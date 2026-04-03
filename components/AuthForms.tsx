'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function AuthForms() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')

  return (
    <div className="mx-auto max-w-md rounded-xl border p-5">
      <div className="mb-4 flex gap-2">
        <Button variant={mode === 'signin' ? 'default' : 'outline'} onClick={() => setMode('signin')}>Sign In</Button>
        <Button variant={mode === 'signup' ? 'default' : 'outline'} onClick={() => setMode('signup')}>Sign Up</Button>
      </div>
      <input className="mb-2 w-full rounded-md border px-3 py-2" placeholder="Email" />
      {mode === 'signup' && <input className="mb-2 w-full rounded-md border px-3 py-2" placeholder="Full name" />}
      <Button className="w-full bg-[#E63946] text-white hover:bg-[#cf2f3c]">{mode === 'signin' ? 'Send Magic Link' : 'Create Account'}</Button>
      <Button variant="outline" className="mt-2 w-full">Continue with Google</Button>
    </div>
  )
}
