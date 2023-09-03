import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import Navbar from '../Navbar/Navbar'
import HeroContact from '../ContactUs/Hero/HeroCotact'
import Footer from '../Footer/Footer'
import loogo from '../HomePage/Images/loogo.webp'

import AOS from "aos";
import "aos/dist/aos.css";
import GoToTop from '../BottomToTop/GoToTop';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <Navbar />
      <HeroContact
        title={"About"}
        subtitle={"About Us"}
      />
      <GoToTop/>
      <div className="trsut-block">
        <div className="trust-container">
          <div className="trust-upper">
            <img src={loogo} alt="Image" />
          </div>
          <div className="trust-down">
            <h2>Tested & Trusted by Farmers</h2>
            <p>
              Welcome to Namrata & Tushar Traders – Your Premier Dairy Cattle Feed Wholesalers! Discover top-quality feed solutions tailored to enhance dairy herd health and productivity. Benefit from our extensive range, competitive wholesale prices, and expert guidance. Choose natural ingredients for optimal results. Trust us for your cattle's well-being and farm success.                    </p>
          </div>
        </div>
      </div>
      <section class="container  my-lg-3 my-xl-4 my-xxl-5">

        <div class="row g-4 mb-3 mb-xl-0 pb-sm-2 pb-md-4 pb-xl-5">
          <div class="col-md-5 col-lg-4 order-md-1" data-aos="fade-up">
            <div class="card border-0 h-100 bg-size-cover bg-position-top-center" style={{ borderRadius: '20px', backgroundSize: 'cover', minHeight: "380px", backgroundImage: 'url("	https://cattleguru.in/assets/img/about/01.jpg")' }}></div>
          </div>
          <div class="col-md-7 col-lg-8 order-md-2" data-aos="fade-up">
            <div class="card border-0 pbg-secondary h-100 px-xl-4 pb-sm-2 pb-xl-4" style={{ borderRadius: '20px' }} >
              <div class="card-body" >
                <h3>Mission</h3>
                <p class="card-text pt-3" >At Namrata and Tushar Traders, our mission is to deliver nutrient-rich and balanced cattle feed that promotes the health and productivity of your animals. We understand the pivotal role that proper nutrition plays in maintaining strong and thriving livestock. Our commitment extends beyond business – it's a commitment to the vitality of your farm and the well-being of your animals.</p>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-lg-4 order-md-4" data-aos="fade-up">
            <div class="card border-0 h-100 bg-size-cover bg-position-center" style={{ borderRadius: '20px', backgroundSize: 'cover', minHeight: "380px", backgroundImage: 'url("https://cattleguru.in/assets/img/about/02.webp")' }}></div>
          </div>
          <div class="col-md-7 col-lg-8 order-md-3" data-aos="fade-up">
            <div class="card border-0 pbg-secondary h-100 px-xl-4 pb-sm-2 pb-xl-4" style={{ borderRadius: '20px' }}>
              <div class="">
                <div class="">
                  <div class="card-body">
                    <h3>Vision</h3>
                    <p class="card-text pt-3">
                      Our vision at Namrata and Tushar Traders is to create a future where every farm is empowered with the knowledge and resources to provide optimal nutrition to their livestock. We envision a world where healthy and well-fed animals contribute to thriving farms, prosperous communities, and sustainable agriculture. Our unwavering commitment to this vision drives us to continuously improve our products and services and to collaborate with farmers to achieve shared success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
