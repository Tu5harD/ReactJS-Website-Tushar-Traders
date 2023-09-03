import React , {useEffect} from 'react'
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import AOS from "aos";
import "aos/dist/aos.css";
import indranil from '../HomePage/Images/Indraneel.webp'
import atta from '../HomePage/Images/atta.webp'
import sarki from '..//HomePage/Images/sarki.webp'
import bussa from '../HomePage/Images/bussa.webp'
import sardar from '../HomePage/Images/sardar.webp'
export default function ProductList() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      });
    const card = [
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
        // {
        //     img: 'https://s3images.coroflot.com/user_files/individual_files/782068_mwdepcwcavfoymuvwmvc6edri.jpg',
        //     weight: "50 KG",
        //     name: "Indranil Pend",
        // },
    ]
    return (
        <div>

            <div class="products " style={{backgroundColor:"#f1f6fb"}}>
                <div class="container">

                    <h1 class="lg-title"><span className='lg-our'>Our </span>Products</h1>
                    <div class="product-items" >

                        {card.map((value) => {
                            return (
                                <div class="product">
                                    <div> 
                                    <div class="product-content">
                                        <div class="product-img">
                                            <img src={value.img} alt="product image" />
                                        </div>

                                    </div>

                                    <div class="product-info product-grid">
                                        <div className="flex flex-column justify-content-between gap-1 device-card">

                                        <div class="product-info-top">
                                                <h2 class="sm-title  flex justify-content-center">{value.name}</h2>
                                            </div>
                                       
                                            <div class="product-info-top">
                                                <h2 class=" sm-title flex justify-content-center" style={{fontSize:"14px"}}>Weigth - {value.weight}</h2>
                                            </div>
                
                                        </div>
                                        <div className=' flex justify-content-center'>
                                        <Rating name="read-only" value={4} readOnly />

                                        </div>
                                        <div class="product-btns">
                                            <Link to='/order'><Button className=' bg-black' variant="contained">Order</Button>
                                            </Link>

                                        </div>
                                    </div>
                                    </div>
                                   
                                </div>



                            )
                        })}



                    </div>
                </div>
            </div>
        </div>
    )
}
