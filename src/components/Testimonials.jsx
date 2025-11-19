import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: 'Alex R.', title: 'Design Lead', quote: 'This feels like designing with a film crew. Absolute magic.' },
  { name: 'Priya N.', title: 'Frontend Engineer', quote: 'The quality of motion and polish is unreal. Saves days of work.' },
  { name: 'Sam T.', title: 'Product Designer', quote: 'Finally, a tool that gets the cinematic vibe right — elegantly.' },
]

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Loved by Pros</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-fuchsia-400/30 shadow-[0_0_40px_rgba(99,102,241,0.08)]"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-sky-400/0 via-fuchsia-400/0 to-pink-400/0" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-300/80">{t.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-slate-200">“{t.quote}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_30%,rgba(236,72,153,0.08),transparent)]" />
    </section>
  )
}
