import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductList from './ProductList'
import Footer from '../Footer/Footer'
import HeroContact from '../ContactUs/Hero/HeroCotact'
import GoToTop from '../BottomToTop/GoToTop'
export default function MainProduct() {
  return (
    <div>
      <Navbar/>
      <HeroContact 
      title = {"Product"}
      subtitle = {"Cattle Feed Products"}
      />
      <GoToTop/>
      <ProductList/>
      <Footer/>
    </div>
  )
}
