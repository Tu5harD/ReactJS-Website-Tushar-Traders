import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutContent from './AboutContent';
import './Aboutus.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      });
    return (
        <>
            <div className="aboutus-container" >
                <div className="about-container" data-aos="fade-up" >
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0  ">
                            <div className="row align-items-center img-abou">
                                <div className="col-lg-6 col-md-6 col-6">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/06/cattle-feed-business1--1-.jpg" className="img-fluid" alt="Image" />
                                                <div className="img-overlay bg-dark"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                <img src="https://media.istockphoto.com/id/1297011540/photo/farmer-pouring-raw-milk-into-metal-milkcans.jpg?s=612x612&w=0&k=20&c=5KawheDZpY9__0Z0wEzRP840JDRjgVjXVG2Th9APidM=" className="img-fluid" alt="Image" />
                                                <div className="img-overlay bg-dark"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                <img src="https://5.imimg.com/data5/SELLER/Default/2020/12/EV/YZ/VF/8371915/cow-cattle-feed-500x500.jpg" className="img-fluid" alt="Image" />
                                                <div className="img-overlay bg-dark"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                            <div className="section-title ml-lg-5">
                                <h4 className="title mb-4 main-aboutus">
                                    {/* नम्रता & तुषार ट्रेडर्स <br /> कॅटल फीडचे फायदे। */}
                                    BENEFITS OF CATTLE FEED
                                </h4>
                                <p className="text-muted mb-0 main-textabout">Animals don't get enough nutrition from traditional feeding practices for milk production, body maintenance, and reproduction. Cattle Feed is recommended for better results.</p>

                                <div className="row">
                                    {AboutContent.map((value) => {
                                        return (
                                            <div className="col-lg-6 mt-5 pt-2 befit-arrowtext-div">
                                                <div className="media align-items-center rounded  p-0">
                                                    <div className="ml-3 mb-0 befit-arrowtext"><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/double-arrow-1786095-1518894.png?f=webp&w=128" style={{ "width": "20px" }} alt="" /><span className='text-about'>{value.text}</span></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus
