import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroContact from '../ContactUs/Hero/HeroCotact'
import GalleryPage from './GalleryPage'
import Footer from '../Footer/Footer'
import GoToTop from '../BottomToTop/GoToTop'
export default function Gallery() {
  return (
    <div>
      <Navbar/>
      <HeroContact 
      title = {"Gallery"}
      subtitle = {"Gallery"} />
      <GoToTop/>
      <GalleryPage/>
      <Footer/>
    </div>
  )
}
