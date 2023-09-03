import React, {useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useTheme } from '@mui/material/styles';
import './MapContact.css'
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AOS from "aos";
import "aos/dist/aos.css";
import GoToTop from '../../BottomToTop/GoToTop';

export default function MapContact() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      });
    const theme = useTheme();

    return (

        <>
        <GoToTop/>
        <section style={{backgroundColor:"#f1f6fb"}} class="contact" id="contact">
            <div class="container">
               
                <div className="wpb_wrapper pb-5">
                    <div className="wpb_map_wraper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4970.1387061136975!2d74.15260557234775!3d16.95503684238145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a1c458d98fe5%3A0x506c64a6cf10436e!2sTUSHAR%20TRADERS!5e0!3m2!1smr!2sin!4v1691668975755!5m2!1smr!2sin" width="100%" height="450" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="row p-3">
                    <div class="col-md-5">
                        <div class="heading " data-aos="fade-right">
                            <h2>Contact
                                <span> Us </span>
                            </h2>
                            <p style={{ fontSize: "16px", fontWeight: "700" }} className=' pt-2'>Namrata & Tushar Cattle Feed Traders
                            </p>
                        </div>
                        <div class="content pb-4">
                            {/* <!-- Info-1 --> */}
                            <div class="info flex flex-row " data-aos="fade-right">
                                <img className='contact_img1_small' src="https://cdn3d.iconscout.com/3d/premium/thumb/phone-holding-4158689-3449619.png?f=webp" alt="" />                                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "black" }} class="d-inline-block">PHONE :
                                    <br />
                                    <span style={{ fontSize: "16px", fontWeight: "400", color: "black" }}>+91 9923959838 , +91 8999363590</span>
                                </h4>
                            </div>
                            {/* <!-- Info-2 --> */}
                            <div class="info flex flex-row gap-2" data-aos="fade-right">
                                <img className='contact_img2_small'  src="https://cdn3d.iconscout.com/3d/premium/thumb/email-6546370-5376633.png?f=webp" alt="" />
                                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "black" }} class="d-inline-block">EMAIL :
                                    <br />
                                    <span style={{ fontSize: "16px", fontWeight: "400", color: "black" }}>tushardukane9@gmail.com</span>
                                </h4>
                            </div>
                            {/* <!-- Info-3 --> */}
                            <div class="info flex flex-row gap-0" data-aos="fade-right">
                                <img className='contact_img3_small' src="https://cdn3d.iconscout.com/3d/premium/thumb/home-location-8894725-7262867.png?f=webp" alt="" />
                                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "black" }} class="d-inline-block">ADDRESS :<br />
                                    <span style={{ fontSize: "16px", fontWeight: "400", color: "black" }}>Near ZP School , Ingrul <br /> Shirala Tal- Shirala Dist- Sangli <br /> Pin- 415408, Maharashtra.</span>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7">

                        <form data-aos="fade-right">
                            <div class="row">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder="Name" />
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder="Email" />
                                </div>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div>
                            </div>
                            <div class="form-group pb-2">
                                <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                            </div>
                            <Button
                                style={{backgroundColor:"black"}}
                                variant="contained"
                                endIcon={<SendIcon />}
                            >
                                Send
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    );
}
