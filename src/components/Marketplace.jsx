import React from 'react'
import { motion } from 'framer-motion'

const templates = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  img: `https://images.unsplash.com/photo-15${40 + i}79926477-6e6553b9bb54?q=80&w=800&auto=format&fit=crop`,
}))

export default function Marketplace() {
  return (
    <section id="market" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Marketplace</h2>
          <p className="mt-3 text-slate-300 max-w-prose">Explore a growing library of cinematic hero templates crafted by top designers.</p>
          <a href="#" className="mt-6 inline-flex rounded-xl px-5 py-3 bg-white/10 hover:bg-white/15 border border-cyan-300/30 text-cyan-200 transition">Explore Marketplace →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {templates.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 bg-white/5 [transform-style:preserve-3d] will-change-transform"
            >
              <img src={t.img} alt="template" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_10%,rgba(168,85,247,0.08),transparent)]" />
    </section>
  )
}
