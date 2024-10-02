import React from 'react'
import s from '../TestimonialItems/index.module.css'

export default function TestimonialItems({id, img, author, testimonial}) {

  return (
    <div className={s.testimonailItem}>
      <img src={img} alt='person'/>
      <h4>{author}</h4>
      <p>{testimonial}</p>
      </div>
  )
}
