import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.nostimo} alt='logo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro iure nisi recusandae ducimus repellendus, soluta ut dicta, maxime quibusdam quas velit veniam, minima magnam reiciendis veritatis id. Neque, consectetur</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='fb_icon'/>
                    <img src={assets.twitter_icon} alt='twitter_icon'/>
                    <img src={assets.linkedin_icon} alt='linkedin_icon'/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2> Company</h2>
                <ul>
                    <li> HOME</li>
                    <li> ABOUT US</li>
                    <li> DELIVERY</li>
                    <li> PRIVACY POLICY</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2> GET IN TOUCH</h2>
                <ul>
                    <li> 0099735176</li>
                    <li>reach@nostimo.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright"> Copyright 2024 @ Nostimo.com - All Right Reserved</p>

      
    </div>
  )
}

export default Footer
