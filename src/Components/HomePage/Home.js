import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Images_Slider from './Image-Slider/Images_Slider'
import Aboutus from './Aboutus'
import Leader from './Leader/Leader'
import CardList from './Hot-Menu/CardList'
import InfoSilder from './InfoSlider'
import Counter from './Count/Counter'
import GoToTop from '../BottomToTop/GoToTop'
// import Translater from '../Translater/Translater'

const MainHome = () => {
  return (
    <>
    {/* <Translater/> */}
    <Navbar/>
    <GoToTop/>
    <Images_Slider/>
    <Leader/>
    <InfoSilder/>
    <Counter/>
    <CardList/>
    <Aboutus/>
    <Footer/>
    </>
  )
}

export default MainHome
