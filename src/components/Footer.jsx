import React from 'react'
import { Github, Twitter, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-28">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mt-8 max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_14px_rgba(168,85,247,0.45)]" />
              <span className="font-semibold text-white">HeroForge</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-300">
              <a href="#" className="hover:text-white transition">Docs</a>
              <a href="#" className="hover:text-white transition">Changelog</a>
              <a href="#" className="hover:text-white transition">Community</a>
              <a href="#" className="hover:text-white transition">Support</a>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <a href="#" className="hover:text-white transition" aria-label="Website"><Globe size={18} /></a>
              <a href="#" className="hover:text-white transition" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" className="hover:text-white transition" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
        <div className="py-8 text-center text-xs text-slate-400">© {new Date().getFullYear()} HeroForge Studio</div>
      </div>
    </footer>
  )
}
