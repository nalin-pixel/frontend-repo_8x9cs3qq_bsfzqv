import React from 'react'
import { motion } from 'framer-motion'

const phases = [
  { label: 'v1 Launch', state: 'complete' },
  { label: 'Studio Presets', state: 'progress' },
  { label: 'Marketplace', state: 'soon' },
  { label: 'Team Collaboration', state: 'soon' },
]

const colorByState = {
  complete: 'from-emerald-400/80 to-emerald-300/80',
  progress: 'from-sky-400/80 to-sky-300/80',
  soon: 'from-amber-400/80 to-amber-300/80',
}

export default function Roadmap() {
  return (
    <section className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Roadmap</h2>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
          <div className="space-y-14">
            {phases.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="lg:justify-self-end">
                  <div className={`inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r ${colorByState[p.state]} shadow-[0_0_18px_rgba(255,255,255,0.12)]" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{p.label}</h3>
                </div>
                <div className="text-slate-300">Details about {p.label} and what it unlocks for creators.</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_50%,rgba(56,189,248,0.06),transparent)]" />
    </section>
  )
}
