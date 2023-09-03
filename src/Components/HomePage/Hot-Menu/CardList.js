import React , {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Hot-Menu/CardList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import indranil from '../Images/Indraneel.webp'
import atta from '../Images/atta.webp'
import sarki from '../Images/sarki.webp'
import bussa from '../Images/bussa.webp'
import Rating from "@mui/material/Rating";

const CardList = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const list = [
    
    {
            img: indranil,
            weight: "50 KG",
            name: "Indranil Goli",
        },
        {
            img: atta,
            weight: "45 KG",
            name: "Kesri Atta",
        },
        {
            img: bussa,
            weight: "45 KG",
            name: "Ghokul Bussa",
        },
        {
            img: sarki,
            weight: "45 KG",
            name: "Diamond Sarki",
        },
        {
            img: sarki,
            weight: "45 KG",
            name: "Kohinur Sarki",
        },
     
        {
            img: sarki,
            weight: "45 KG",
            name: "Shahapur Sarki",
        },
  ];

  return (
    <>


      <section class="our_product pt-4 pd-5">
        <div class="container pt-md-4 pb-md-4">
          <div class="row">
            <div class="col-sm-12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <h2 class="heading text-center">OUR PRODUCTS</h2>
                <span>
                  <img
                    style={{
                      width: "70px",
                      verticalAlign: "middle",
                      marginTop: "-40px",
                    }}
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/milk-cow-9057289-7407083.png?f=webp"
                    alt=""
                    className="hotMenu-img"
                  />
                </span>
              </div>
            </div>

            <div class="col-sm-12 position-relative">
              <div class="swiper-container pb-3 swiper-container-horizontal">
                <div class=" p-4">
                  <Slider className="" {...settings}>
                    {list.map((value) => {
                      return (
                        <div className="bag-container">
                          <div className="bag-img-back">
                            <img
                              src={value.img}
                              alt="Bag 1"
                              className="bag-image"
                            />
                          </div>
                          <div className="home-subpart">
                            <div class="product-desc">
                              <span class="flex justify-content-center pt-2" style={{fontSize:"16px"}}>
                                {value.name}
                                <span class="animated infinite flash badge " style={{fontSize:"15px"}}>
                                  Order
                                </span>
                              </span>

                              <span class=" flex justify-content-center" style={{fontSize:"14px"}}>
                                WEIGHT - {value.weight}
                              </span>

                              <div className=" flex justify-content-center">
                                <Rating name="read-only" value={4} readOnly />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>

                {/* <!-- If we need navigation buttons --> */}

                {/* <div class="swiper-button-prev">
                  <i class="fas fa-angle-left"></i>
                </div>

                <div class="swiper-button-next">
                  <i class="fas fa-angle-right"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardList;
