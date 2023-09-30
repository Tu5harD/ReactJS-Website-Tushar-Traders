import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";


class SSlider extends Component {
  constructor(props) {
    super(props);
    this.slider1 = React.createRef();
    this.slider2 = React.createRef();
  }

  next = () => {
    this.slider1.current.slickNext();
    this.slider2.current.slickNext();
  };

  previous = () => {
    this.slider1.current.slickPrev();
    this.slider2.current.slickPrev();
  };
  render() {
    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      arrows: false,
    };

    return (
      <div div className=" container "> 
       <section
        className=" min-vh-50 container pt-2 p-4 mt-lg-3 mt-xl-4 mt-xxl-5 pb-0"
        style={{ height: "100%", paddingBottom: "-20px" }}
      >
        <h2
          className="text-center pt-2 fw-medium fs-1 fw-medium"
          style={{ color: "#006EAB", fontFamily: "'Staatliches', cursive" }}
        >
          Why Choose Namrata & Tushar Traders{" "}
        </h2>
        <p className="text-center pb-2 mb-2 mb-lg-3">
          Dairy farmers want good quality cattle feed delivered at their
          doorstep at a fair price
        </p>
        <div className="row align-items-center py-1 mt-md-3 mt-lg-0">
          <div
            className="col-md-6 col-xl-5 offset-xl-1"
            style={{
              borderRadius: "15px",
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
            }}
          >
            <div className="ps-md-4 ps-xl-0">
              {/* React Slick slider */}
              <Slider ref={this.slider1} {...sliderSettings}>
                <div className="mb-lg-4 p-2" key={1}>
                  <img
                    style={{ width: "100%" }}
                    className="d-block position-relative zindex-2 px-4 "
                    src="https://img.freepik.com/premium-vector/flat-illustration-premium-quality-concept-websites_108061-636.jpg?size=626&ext=jpg"
                    alt="App screen"
                  />
                </div>
                {/* Item */}
                <div className="mb-lg-4 p-2" key={2}>
                  <img
                    style={{ width: "100%" }}
                    className="d-block position-relative zindex-2 px-4 "
                    src="https://img.freepik.com/free-vector/guideline-regulation-corporate-law-policy-company-specification-instruction-directive-rulebook-office-management-design-element_335657-2629.jpg?size=626&ext=jpg"
                    alt="App screen"
                  />
                </div>
                {/* Item */}
                <div className="mb-lg-4 p-2" key={3}>
                  <img
                    style={{ width: "100%" }}
                    className="d-block position-relative zindex-2 px-4 "
                    src="https://img.freepik.com/free-vector/flat-design-frugality-illustration_23-2150204790.jpg?size=626&ext=jpg"
                    alt="App screen"
                  />
                </div>

                <div className="mb-lg-4 p-2" key={4}>
                  <img
                    style={{ width: "100%" }}
                    className="d-block position-relative zindex-2 px-4 "
                    src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-contact-us_516790-1751.jpg?size=626&ext=jpg"
                    alt="App screen"
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="ps-md-4 ps-xl-0 pt-4" style={{height:"300px"}}>
              {/* React Slick slider */}
              <Slider ref={this.slider2} {...sliderSettings}>
                <div className="p-2" key={1} style={{height:"260px"}}>
                  <h2 className="fs-2 fw-medium text-uppercase mb-lg-4 flex justify-content-center">
                    Premium Quality Nutrition
                  </h2>
                  <p
                    className="mb-0 text-justify fw-medium fs-6"
                    style={{ fontFamily: "'Roboto', sans-serif;" }}
                  >
                    We offer high-quality cattle feed products to promote
                    growth, health, and productivity, ensuring your animals
                    receive optimal nutrition for peak performance.
                  </p>
                </div>
                <div className=" p-2" key={2} style={{height:"260px"}}>
                  <h2 className="fs-2 mb-lg-4 text-uppercase flex justify-content-center">
                    Expert Guidance
                  </h2>
                  <p className="mb-0 text-justify fw-medium fs-6">
                  Our experienced team can help you make informed decisions about your cattle's diet based on their unique nutritional requirements, ensuring they thrive with optimal health and productivity.
                  </p>
                </div>
                <div className=" p-2" key={3} style={{height:"260px"}}>
                  <h2 className="fs-2 mb-lg-4 text-uppercase flex justify-content-center">
                    Diverse Product Range
                  </h2>
                  <p className="mb-0 text-justify fw-medium fs-6">
                    Our diverse range of cattle feed options meets the needs of
                    various breeds, ages, and purposes, ensuring the well-being
                    and success of your dairy cows, beef cattle, or other
                    livestock.
                  </p>
                </div>
                <div className=" p-2" key={4} style={{height:"260px"}}>
                  <h2 className=" fs-2 mb-lg-4 text-uppercase flex justify-content-center">
                    Customer Relationship
                  </h2>
                  <p className="mb-0 text-justify fw-medium fs-6">
                    We're dedicated to customer satisfaction, providing personalized service for inquiries, orders, and recommendations. Our commitment to exceptional support fosters lasting trust with valued customers.
                  </p>
                </div>
              </Slider>

              </div>

              <div className="" style={{ textAlign: "center",marginTop:"-3rem" }}>
                <button
                  class="btn btn-icon border-0  m-2"
                  type="button"
                  style={{ width: "5.5rem" }}
                  onClick={this.previous}
                >
                  <i class="fa-solid fa-arrow-left flex justify-content-center icon-position-left icon-style-left"></i>
                </button>
                <button
                  class="btn btn-icon border-0  m-2"
                  type="button"
                  style={{ width: "5.5rem" }}
                  onClick={this.next}
                >
                  <i class="fa-solid fa-arrow-right flex justify-content-center icon-position-left icon-style-left"></i>
                </button>
            </div>
          </div>
        </div>
      </section>
      </div>
     
    );
  }
}
export default SSlider;
