import React from 'react'
import "./Review.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Review() {

    const reviewList = [

        {
            name: "Prakash Desai",
            village: "Satara",
            rating: 5,
            review: "Noticed a positive transformation in cattle's health and weight management. Improved energy, coat condition, and overall health. Well-balanced feed composition positively impacted the herd's well-being."
        },
        {
            name: "Anita Pawar",
            village: "Sangli",
            rating: 5,
            review: "Remarkable results observed in energy levels, muscle tone, and market value. Nutritional balance in the feed positively affected overall performance in the field and market."
        },
        {
            name: "Vikram Patil",
            village: "Kolhapur",
            rating: 5,
            review: "Significant improvement in cattle's health, productivity, and performance. Healthier coats, better weight maintenance, and increased milk production noted on the farm."
        },
        // Additional Reviews
        {
            name: "Sneha Joshi",
            village: "Miraj",
            rating: 4,
            review: " Positive results observed in milk yield and health. Some pickier eaters took time to adjust to the feed. Beneficial addition to the feeding regimen overall."
        },
        {
            name: "Nitin Shah",
            village: "Ichalkaranji",
            rating: 4,
            review: "Positive impact on vitality and productivity. Good weight maintenance and increased milk production. Suggestion for more flavor variety, but satisfied with the results."
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='small-cont'>
                <div class="review-container">
                    <div class="col-sm-12">
                        <h6 class="sub-text text-light_green text-center">POSITIVE FEEDBACK FROM</h6>
                        <h2 class="heading text-center">OUR CLIENTS</h2>
                    </div>
                    <Slider className='pad' {...settings}>
                        {reviewList.map((value) => {
                            return (
                                <div class="review-card">
                                    <div className="cust-mer">
                                        <div>
                                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png?f=avif&w=256" alt="user" />

                                        </div>
                                        <div className='li-re'>
                                            <p>{value.name}</p>
                                            <p>{value.village}</p>
                                        </div>
                                    </div>
                                    <div class="card__content">
                                        <span><img className="img-rev" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12%2013a3%203%200%201%200%200-6c-.161%200-.315.023-.469.047C12.218%205.832%2013.507%205%2015%205V3c-3.309%200-6%202.691-6%206v1a3%203%200%200%200%203%203zM4%2013a3%203%200%201%200%200-6c-.161%200-.315.023-.469.047C4.218%205.832%205.507%205%207%205V3C3.691%203%201%205.691%201%209v1a3%203%200%200%200%203%203z%22%2F%3E%3C%2Fsvg%3E" alt="" /></span>
                                        <div class="card__details">
                                            <p>
                                                {value.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}
