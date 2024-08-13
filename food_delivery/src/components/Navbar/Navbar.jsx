import React,{useState} from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home")
  return (
    <>
    <div className='navbar'>
        <img src={assets.nostimo} alt='Logo' className='logo'/>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-ap")} className={menu==='mobile-ap'?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt='search icon'/>
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt=''/>
                <div className='dot'></div>
            </div>
            <div>
                <button onClick={()=> setShowLogin(true)}> Sign IN</button>
            </div>

            
        </div>

   
    </div>
      
    </>
  )
}

export default Navbar
