import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'What is HeroForge Studio?', a: 'A premium AI-assisted builder for cinematic hero sections and product visuals.' },
  { q: 'Can I export code?', a: 'Yes. Export clean, production-ready React/Tailwind components.' },
  { q: 'Do you support teams?', a: 'Team workspaces and libraries are in progress.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="font-medium text-white">{q}</span>
        <ChevronDown className={`size-5 text-slate-300 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]' }`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-slate-300/90">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="relative py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">FAQ</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => <Item key={f.q} {...f} />)}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_80%,rgba(34,211,238,0.08),transparent)]" />
    </section>
  )
}
