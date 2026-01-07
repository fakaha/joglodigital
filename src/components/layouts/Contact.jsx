import React from 'react'
import telephone from '../../assets/image/telephone.png'
import mail from '../../assets/image/mail.png'
import { ContactInfo } from '../elements/ContactInfo'

export const Contact = () => {
  return (
    <div id='contact' className='py-20 px-10'>
        <h2 className='text-2xl mb-4 font-bold text-gray-600'>Lokasi :</h2>
        <div className='mb-4'>
          <span className='text-gray-600'>Madugondo, Sitimulyo, Kec. Piyungan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55792</span>
        </div>
        <h2 className='text-2xl mb-4 font-bold text-gray-600'>Kontak :</h2>
        {/* <p className='text-lg mb-4'>Wujudkan Usaha Digital Anda Bersama Kami</p> */}
        <div className='flex flex-col gap-2'>
            <span className='text-gray-600'>fakahaworks@gmail.com</span>
            <span className='text-gray-600' onClick={() => window.open('https://wa.me/6287708899020', 'blank')}>087708899020 (WA only)</span>
        </div>
    </div>
  )
}
