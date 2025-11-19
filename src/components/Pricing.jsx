import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 'Free', perks: ['Basic heroes', 'Community templates', 'Email support'] },
  { name: 'Studio', price: '$29/mo', perks: ['Pro heroes', 'Motion presets', 'Priority support'], featured: true },
  { name: 'Enterprise', price: 'Custom', perks: ['SLA & SSO', 'Design systems', 'Dedicated success'] },
]

export default function Pricing() {
  return (
    <section className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Pricing
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-3xl p-6 backdrop-blur-xl border ${t.featured ? 'border-cyan-300/40 bg-white/10 shadow-[0_0_40px_rgba(34,211,238,0.15)]' : 'border-white/10 bg-white/5'}`}
            >
              <div className={`absolute -inset-px rounded-3xl ${t.featured ? 'bg-gradient-to-b from-cyan-400/10 via-fuchsia-400/10 to-pink-400/10' : ''}`} />
              <div className="relative">
                <div className="text-sm uppercase tracking-wider text-slate-300/80">{t.name}</div>
                <div className="mt-4 text-3xl font-bold text-white">{t.price}</div>
                <ul className="mt-5 space-y-2 text-slate-200/90">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium transition ${t.featured ? 'bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400 text-black' : 'border border-white/15 text-slate-100 hover:bg-white/10'}`}>Choose</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_90%,rgba(56,189,248,0.08),transparent)]" />
    </section>
  )
}
