import React from 'react'
import { Button } from '../elements/Button'
import banner from '../../assets/image/bannerhero.webp'

export const Hero = () => {
  return (
    <div className='px-4 pt-36 pb-28 text-[#fff] text-center h-svh flex flex-col justify-center items-center' style={{backgroundImage: `url(${banner})`,backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
        <h1 className='text-2xl mb-8'>Digitalisasi Bisnis Anda Mudah & Cepat</h1>
        <h2 className='text-4xl mb-8 max-w-[700px]'>Mitra Terbaik Dalam Pengembangan Website Untuk Keperluan Bisnis Anda</h2>
        <Button style={{backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255,255,255,0.3)'}} link='https://wa.me/6287708899020?text=Halo Fakanet, saya mau bikin website untuk usaha saya' font=''>Hubungi Kami</Button>
    </div>
  )
}
