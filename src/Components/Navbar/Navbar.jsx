import React, { useState,useEffect } from 'react'
import './dist/Navbar.css';
import loogo from '../HomePage/Images/loogo.webp'
import { FaWindowClose } from 'react-icons/fa';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const Navbar = () => {

  const [active, setActive] = useState('navBar')
  const navlink = [
    {
      link: "/",
      title: "HOME",
    },
    {
      link: "/about",
      title: "ABOUT",
    },
    {
      link: "/product",
      title: "PRODUCT",
    },
    {
      link: "/contact",
      title: "CONTACT",
    },
    {
      link: "/gallery",
      title: "GALLERY",
    },
  ]
  // Function to show navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  // Function to remove navbar
  const removeNav = () => {
    setActive('navBar')
  }
  return (
    <>

      <section className='navBarSection' >
        <header className="header flex">


          <div onClick={showNav} className="toggleNavbar">
            {/* <FontAwesomeIcon icon={faBars} /> */}
            <i class="fa-solid fa-bars-staggered"></i>
          </div>


          <div className="logoDiv">
            <picture className='logo'>
              <img className='logo-img' src={loogo} alt="" />
            </picture>
          </div>

          <div className="logoDiv">
            <picture className='logo'>
              <img className='top-logo-img' src={loogo} alt="" />
            </picture>
          </div>

          <div className={active}>
            <ul className="navLists flex">

              {navlink.map((value) => {
                return (
                  <li className="navItem">
                    <Link to={value.link} className="navLink" >{value.title}</Link>
                  </li>
                )
              })}

              <Link to="/order" className="navLink"><Button variant="contained" className=' bg-black'>ORDER NOW</Button></Link>



            </ul>

            <div onClick={removeNav} className="closeNavbar" style={{ padding: "1rem", backgroundColor: "#1d2127", borderRadius: "10px" }}>
              {/* <FontAwesomeIcon className='icon' icon={faRectangleXmark} size='2xl' style={{ "color": "#1d2127", }} /> */}
              <i style={{ color: "white" }} class="fa-solid fa-xmark fa-xl"></i>            </div>
          </div>
        </header>

      </section>
    </>
  )
}

export default Navbar


