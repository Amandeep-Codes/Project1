import React,{useState} from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [menu,setMenu]=useState("Home")
  return (
    <>
    <div className='navbar'>
        <img src={assets.nostimo} alt='Logo' className='logo'/>
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-app</li>
            <li>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt='search icon'/>
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt=''/>
            </div>
            <div>
                <button> Sign IN</button>
            </div>

            
        </div>

   
    </div>
      
    </>
  )
}

export default Navbar
