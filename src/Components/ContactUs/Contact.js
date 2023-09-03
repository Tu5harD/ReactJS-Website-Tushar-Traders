import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroContact from './Hero/HeroCotact'
import MapContact from './Map/MapContact'
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <HeroContact
    title = {"Contact"}
    subtitle = {"Contact Information"}
    />
    <MapContact/>
    <Footer/>
    </>
  )
}

export default Contact
