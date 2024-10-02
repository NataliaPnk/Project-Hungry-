import React from 'react'
import s from '../Testimonials/index.module.css'
import TestimonialItems from '../TestimonialItems'


export default function Testimonials({testimonialList}) {

  return (
    <div className={s.testimonialsContainer}>
      <h2>Testimonials</h2>

    <div className={s.testimonialsItems}>
      {
      testimonialList.map((el) => (
        <TestimonialItems key={el.id} {...el} />))
     }
    </div>
  
    </div>
  )
}
