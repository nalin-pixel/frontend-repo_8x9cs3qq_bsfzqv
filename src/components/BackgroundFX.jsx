import React from 'react'

// Subtle animated noise + floating particles overlay
export default function BackgroundFX() {
  return (
    <>
      <style>{`
        @keyframes driftNoise { 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(-10%, -10%, 0)} }
        @keyframes floatUp { 0%{ transform: translateY(10%); opacity: 0 } 20%{opacity:.25} 100%{ transform: translateY(-120%); opacity: 0 } }
      `}</style>
      {/* Animated grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[.08] mix-blend-soft-light" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)',
          backgroundSize: '300px 300px',
          animation: 'driftNoise 30s linear infinite',
          filter: 'contrast(120%)',
        }} />
      </div>

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(800px_400px_at_10%_80%,rgba(56,189,248,0.12),transparent),radial-gradient(900px_500px_at_90%_70%,rgba(236,72,153,0.12),transparent)]" aria-hidden />

      {/* Floating particle dust */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => {
          const left = Math.random() * 100
          const size = 1 + Math.random() * 2
          const delay = Math.random() * 8
          const duration = 12 + Math.random() * 16
          const hue = 200 + Math.random() * 160
          return (
            <span
              key={i}
              className="absolute rounded-full blur-[1.5px]"
              style={{
                left: `${left}%`,
                bottom: '-10%',
                width: size,
                height: size,
                background: `hsla(${hue},90%,70%,0.35)`,
                boxShadow: `0 0 6px hsla(${hue},90%,70%,0.6)`,
                animation: `floatUp ${duration}s linear ${delay}s infinite`,
              }}
            />
          )
        })}
      </div>
    </>
  )
}
