import React from 'react'

import './Footer.css'
import { assets } from '../../assets/assets'
export const Footer = () => {
  return (
   <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>FoodDeliveryApp is your go-to solution for fast, fresh, and delicious meals delivered straight to your doorstep. We offer a diverse menu, ranging from local favorites to international cuisines, ensuring there's something for everyone.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-5667</li>
                        <li>contact@tomato.com</li>
                    </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
   </div>
  )
}
