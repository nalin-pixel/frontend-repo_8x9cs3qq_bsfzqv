import React from 'react'
import { motion } from 'framer-motion'

const blocks = [
  {
    title: 'Design like a film director',
    copy: 'Compose scenes with light, motion, and depth — not just boxes and buttons.',
    bullets: ['Parallax layers', 'Light sweeps', 'Cinematic timing', 'Adaptive variants'],
    mock: 'https://images.unsplash.com/photo-1542759564-169e05b2b8b6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI-assisted hero sections',
    copy: 'Describe your vibe. Get gorgeous, production-ready hero blocks instantly.',
    bullets: ['Prompt → Hero', 'Multiple styles', 'Live preview', 'Export to code'],
    mock: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Premium glass UI system',
    copy: 'A cohesive library of glass panels, neon accents, and elegant typography.',
    bullets: ['1px glow borders', 'Tone-on-tone glass', 'Shimmer accents', 'Dark-first design'],
    mock: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function FeaturePanels() {
  return (
    <section className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className={`relative grid items-center gap-10 lg:gap-14 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''} py-8`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-fuchsia-400/0 to-pink-400/0 group-hover:from-cyan-400/10 group-hover:via-fuchsia-400/10 group-hover:to-pink-400/10 transition" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <img src={b.mock} alt="feature" className="w-full h-[320px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-cyan-300/90 ring-1 ring-cyan-300/30 bg-cyan-400/10">Feature</div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">{b.title}</h3>
              <p className="mt-3 text-slate-300 max-w-prose">{b.copy}</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-200/90">
                {b.bullets.map((bp) => (
                  <li key={bp} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                    {bp}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_90%,rgba(236,72,153,0.08),transparent)]" />
    </section>
  )
}
