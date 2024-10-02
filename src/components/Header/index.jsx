import React from 'react'
import s from '../Header/index.module.css'

export default function Header() {
  return (
    <div className={s.headerContainer}>
        <p className={s.label}>Hungry</p>
      
      <div className={s.navMenuWrapper}>
        <p>Home</p>
        <p>Features</p>
        <p>Testimonial</p>
        <p>Blog</p>
      </div>

      <button className={s.button}>Download Now</button>

      </div>
  )
}
