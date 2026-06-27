import React from 'react'
import { Button } from '../elements/Button'
import banner from '../../assets/image/bannerhero.webp'

export const Hero = () => {
  return (
    <div className='relative px-4 pt-44 pb-28 text-center min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030014]'>
      {/* Hero Background Image with futuristic overlay */}
      <div 
        className='absolute inset-0 z-0 opacity-30 mix-blend-lighten bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${banner})` }}
      />
      
      {/* Dark & Cosmic Gradients Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/50 via-[#030014]/80 to-[#030014] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)] z-10" />
      
      {/* Animated Glowing Ambient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse z-10" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-10" style={{ animationDuration: '12s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-10" />

      {/* Content */}
      <div className='relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6 px-4'>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium tracking-wide uppercase mb-2 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
          ✨ Era Baru Digitalisasi Bisnis
        </div>
        
        <h1 className='text-sm sm:text-lg font-bold tracking-widest text-cyan-400 uppercase'>
          Kreatif • Inovatif • Terpercaya
        </h1>
        
        <h2 className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl tracking-tight'>
          Mitra Terbaik Dalam Pengembangan{" "}
          <span className="text-gradient-cyan-indigo font-black">Website Bisnis</span> Anda
        </h2>
        
        <p className='text-base sm:text-lg text-zinc-400 max-w-2xl mt-2 leading-relaxed'>
          Kami membangun platform digital modern, cepat, dan responsif untuk membantu usaha Anda tumbuh lebih jauh di era internet.
        </p>
        
        <div className="mt-6">
          <Button 
            link='https://wa.me/6287708899020?text=Halo Fakanet, saya mau bikin website untuk usaha saya' 
            className="px-8 py-6 text-base sm:text-lg rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:via-indigo-400 hover:to-purple-500 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] group"
          >
            <span>Hubungi Kami</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

