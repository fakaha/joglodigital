import React from 'react'
import { ContactInfo } from '../elements/ContactInfo'

export const Contact = () => {
  const mapIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );

  const mailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );

  const phoneIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-2.833A8.9 8.9 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );

  return (
    <section id='contact' className='relative py-28 px-6 sm:px-10 max-w-6xl mx-auto w-full overflow-hidden bg-[#030014]'>
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="flex flex-col gap-4 mb-16 text-center sm:text-left">
        <div className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Kontak & Lokasi</div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Hubungi Kami Untuk <span className="text-gradient-cyan-indigo">Kolaborasi</span>
        </h3>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
          Wujudkan website impian Anda bersama Joglo Digital. Konsultasikan kebutuhan proyek Anda sekarang secara gratis!
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
        {/* Left Column: Location Card */}
        <div className='glass-panel p-8 rounded-2xl flex flex-col justify-between gap-6'>
          <div>
            <h4 className='text-lg font-bold text-white mb-3 flex items-center gap-2'>
              <span className="text-cyan-400">{mapIcon}</span> Kantor Kami
            </h4>
            <p className='text-zinc-400 text-sm sm:text-base leading-relaxed'>
              Madugondo, Sitimulyo, Kec. Piyungan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55792
            </p>
          </div>
          
          {/* Futuristic decorative map container */}
          <div className="w-full h-44 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="absolute w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(6,182,212,1)]" />
            <span className="relative z-10 text-xs font-semibold tracking-wider text-zinc-400 uppercase bg-[#030014]/85 px-3 py-1.5 rounded-lg border border-white/10 mt-16 shadow-lg">
              Bantul, Yogyakarta
            </span>
          </div>
        </div>

        {/* Right Column: Contact Channels */}
        <div className='flex flex-col gap-4 justify-between h-full'>
          <div className="glass-panel p-8 rounded-2xl flex-1 flex flex-col gap-6">
            <h4 className='text-lg font-bold text-white mb-2 flex items-center gap-2'>
              Hubungi Secara Langsung
            </h4>
            <div className='flex flex-col gap-4'>
              <ContactInfo 
                icon={mailIcon} 
                contact="fakahaworks@gmail.com" 
                link="mailto:fakahaworks@gmail.com" 
              />
              <ContactInfo 
                icon={phoneIcon} 
                contact="087708899020 (WhatsApp)" 
                link="https://wa.me/6287708899020" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
