import React from 'react'
import { Button } from '../elements/Button'
import banner from '../../assets/image/bannerhero.webp'

export const Hero = () => {
  return (
    <div className='relative px-6 pt-52 pb-32 text-center min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#f4f5f8]'>
      {/* Hero Background Image - highly subtle and blended */}
      <div 
        className='absolute inset-0 z-0 opacity-[0.05] mix-blend-multiply bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${banner})` }}
      />
      
      {/* Cool Gray-Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f8]/10 via-[#f4f5f8]/65 to-[#f4f5f8] z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-10" />

      {/* Content */}
      <div className='relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6 px-4'>
        <span className='text-xs font-bold tracking-widest text-slate-500 uppercase bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm'>
          Kreatif • Inovatif • Terpercaya
        </span>
        
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] max-w-3xl tracking-tight'>
          Mitra Terbaik Dalam Pengembangan{" "}
          <span className="text-gradient-blue font-black">Website Bisnis</span> Anda
        </h2>
        
        <p className='text-base sm:text-lg text-slate-600 max-w-2xl mt-2 leading-relaxed'>
          Kami membangun platform digital modern, cepat, dan responsif untuk membantu usaha Anda tumbuh lebih jauh di era internet.
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button 
            link='https://wa.me/6287708899020?text=Halo Fakanet, saya mau bikin website untuk usaha saya' 
            className="w-full sm:w-auto px-6 py-5"
          >
            <span>Hubungi Kami</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Button>
          <Button 
            link='#kenapakami'
            variant="outline"
            className="w-full sm:w-auto px-6 py-5"
          >
            <span>Lihat Layanan</span>
          </Button>
        </div>

        {/* Tech Stack / Trust Section */}
        <div className="mt-20 border-t border-slate-200 pt-10 w-full max-w-2xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Teknologi & Standar Industri</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-bold tracking-tight text-slate-600 uppercase">React.js</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold tracking-tight text-slate-600 uppercase">Next.js</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold tracking-tight text-slate-600 uppercase">Tailwind CSS</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold tracking-tight text-slate-600 uppercase">Node.js</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold tracking-tight text-slate-600 uppercase">REST APIs</span>
          </div>
        </div>
      </div>

      {/* Elegant 1px divider at the bottom of the section */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/80 to-transparent z-20" />
    </div>
  )
}



