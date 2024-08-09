import React,{useState} from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [menu,setMenu]=useState("home")
  return (
    <>
    <div className='navbar'>
        <img src={assets.nostimo} alt='Logo' className='logo'/>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>Menu</li>
            <li onClick={()=>setMenu("mobile-ap")} className={menu==='mobile-ap'?"active":""}>Mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt='search icon'/>
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt=''/>
                <div className='dot'></div>
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
