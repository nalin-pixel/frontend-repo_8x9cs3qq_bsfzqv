import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, ShieldCheck, Wand2, Cpu, Layers } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'Cinematic Quality', text: 'Every section enters with filmic finesse — fade, blur, and parallax in harmony.' },
  { icon: Zap, title: 'Lightning Workflow', text: 'Design, generate, and iterate at the speed of thought with AI-powered flows.' },
  { icon: ShieldCheck, title: 'Pro-Grade Output', text: 'Clean, accessible components tuned for modern stacks and best practices.' },
  { icon: Wand2, title: 'AI Hero Builder', text: 'Shape heroic layouts with prompts — styles, variants, and interactions.' },
  { icon: Cpu, title: 'Native Performance', text: 'GPU-accelerated effects and motion for silky smooth experiences.' },
  { icon: Layers, title: 'Glass UI System', text: 'A refined set of glass cards, gradients, and glows — premium by default.' },
]

export default function Why() {
  return (
    <section id="why" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_0%,rgba(34,211,238,0.12),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Why HeroForge
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-center text-slate-300 max-w-2xl mx-auto">
          A premium toolkit for crafting cinematic, high-end product experiences.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-300/30 transition will-change-transform">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-300/0 via-fuchsia-400/0 to-pink-400/0 group-hover:from-cyan-300/10 group-hover:via-fuchsia-400/10 group-hover:to-pink-400/10" />
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15 ring-1 ring-cyan-300/30 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.35)]">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
