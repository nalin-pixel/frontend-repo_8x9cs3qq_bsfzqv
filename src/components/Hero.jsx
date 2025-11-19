import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient veil to enhance contrast; pointer-events-none so Spline stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-[#0b1020]/60 to-[#0b0920]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10, blur: 6 }}
          animate={{ opacity: 1, y: 0, blur: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.25)]">
          HeroForge Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl mx-auto">
          The AI-Assisted Hero Builder for Developers & Designers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#why"
            className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400" />
            <span className="relative">Get Started Free</span>
          </a>

          <a
            href="#studio"
            className="group inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-cyan-300 border border-cyan-300/40 bg-white/0 hover:bg-white/5 transition">
            <span className="relative">Launch Studio</span>
            <span className="ml-2 h-px w-0 bg-cyan-300 transition-all duration-500 group-hover:w-6" />
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-8 opacity-80">
          {['Vercel','Linear','Apple','Figma','Notion'].map((b) => (
            <span key={b} className="text-slate-300/70 text-sm tracking-wide">{b}</span>
          ))}
        </motion.div>

        {/* Scroll dot */}
        <div className="mt-14 flex justify-center">
          <span className="relative inline-flex h-8 w-8 items-center justify-center">
            <span className="absolute inline-flex h-8 w-8 rounded-full bg-cyan-400/10" />
            <span className="absolute inline-flex h-8 w-8 rounded-full animate-ping bg-cyan-400/30" />
            <span className="relative h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
          </span>
        </div>
      </div>
    </section>
  )
}
