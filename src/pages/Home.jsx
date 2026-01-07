import React from 'react'
import { Navbar } from '../components/layouts/Navbar'
import { Hero } from '../components/layouts/Hero'
import { Services } from '../components/layouts/Services'
import { Contact } from '../components/layouts/Contact'
import { Footer } from '../components/layouts/Footer'

export const Home = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <Hero/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}
