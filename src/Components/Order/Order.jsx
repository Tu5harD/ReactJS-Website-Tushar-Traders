import React from 'react'
// import OrderNow from './OrderNow'
import Navbar from '../Navbar/Navbar'
import HeroCotact from '../ContactUs/Hero/HeroCotact'
import Footer from '../Footer/Footer'
import NewFile from './NewFile'
import GoToTop from '../BottomToTop/GoToTop'
const Order = () => {
  return (
    <div>
      <Navbar />
      <HeroCotact
        title={"Order"}
        subtitle={"Order"}
      />
      {/* <OrderNow /> */}
      <GoToTop/>
      <NewFile/>
      <Footer />
    </div>
  )
}

export default Order
