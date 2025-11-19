import React from 'react'
import BackgroundFX from './components/BackgroundFX'
import Hero from './components/Hero'
import Why from './components/Why'
import FeaturePanels from './components/FeaturePanels'
import Pricing from './components/Pricing'
import Marketplace from './components/Marketplace'
import Roadmap from './components/Roadmap'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0b1020] to-[#0a0815] text-slate-100">
      <BackgroundFX />
      <Hero />
      <Why />
      <FeaturePanels />
      <Pricing />
      <Marketplace />
      <Roadmap />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
