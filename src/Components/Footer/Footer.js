import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import loogo from "../HomePage/Images/loogo.webp";
import { Link } from "react-router-dom";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  const navlink = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/product",
      title: "Product",
    },
    {
      link: "/about",
      title: "About",
    },

    {
      link: "/order",
      title: "Order Now",
    },
    {
      link: "/contact",
      title: "Contact",
    },
    {
      link: "/gallery",
      title: "Gallery",
    },
  ];
  return (
    <>
      <footer id="footer">
        <div id="footer-widgets" class="container style-1">
          <div class="row">
            <div class="col-md-4">
              <div id="text-1" class="widget footer-widget widget_text">
                <div className=" flex justify-content-center">
                  <img src={loogo} alt="" className="footer-logo" />
                </div>
                {/* <h2 class="widget-title"><span>ABOUT Us</span></h2> */}
                <div class="textwidget">
                  <p className="p-2" style={{fontSize:"14px"}}>
                    Namrata & Tushar cattle feed Traders was established in
                    2005. Namrata & Tushar Traders, a trusted name in the field
                    of cattle feed, believes in quality delivery at the right
                    time and place.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div
                id="custom_html-2"
                class="widget_text widget footer-widget widget_custom_html"
              >
                <h2 class="widget-title">
                  <span>LINKS</span>
                </h2>
                <div class="textwidget custom-html-widget">
                  <ul class="wprt-links clearfix col2">
                    {navlink.map((value) => {
                      return (
                        <li className="style-2">
                          <Link className="" onClick={scrollToTop} to={value.link}>{value.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div id="text-3" class="widget footer-widget widget_text">
                <h2 class="widget-title">
                  <span>CONTACT INFO</span>
                </h2>
                <div class="textwidget">
                  <ul class="style-2">
                    <li class="address clearfix">
                      <span class="hl fs-6">Corporate Office Address:</span>
                      <span class="text" style={{fontSize:"14px"}}>
                        Near ZP School, Ingrul. Tal-Shirala, Dist-Sangli,
                        PIN-415408 Maharashtra
                      </span>
                    </li>
                    <li class="phone clearfix">
                      <span class="hl fs-6" >Phone:</span>
                      <span class="text" style={{fontSize:"14px"}}>+91 8999363590, +91 9923959839</span>
                    </li>
                    <li class="email clearfix ">
                      <span class="hl fs-6">E-mail:</span>
                      <span class="text" style={{fontSize:"14px"}}>namrata&tushartraders@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-line" />
          <p className="copyright" style={{fontSize:"14px"}}>
            © copyright 2023 Namrata & Tushar Cattle Feed Traders. All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
}
