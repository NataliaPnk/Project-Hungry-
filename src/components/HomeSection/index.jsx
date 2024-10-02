import React from 'react'
import s from '../HomeSection/index.module.css'
import { FaApple } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

export default function HomeSection() {

  return (
    <div className={s.homeSectionContainer}>
      
      <div className={s.homeSectionTextWrapper}>
        <h1>Your Favourite Food <br/> delivery Partner.</h1>
        <p>Food Delivery is a thriving business and there are many <br/>opportunities for this Businesses as its Growing.</p>

        <div className={s.iconsWrapper}>
          <div className={s.iconApple}><FaGooglePay /> <p>GET IT ON <br/> <strong>Google Play</strong></p></div>
          <div className={s.iconGooglePlay}> <FaApple /><p>Download on the Apple Store</p></div>
        </div>

      </div>

      <img src='https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </div>
  )
}
