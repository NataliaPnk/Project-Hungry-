import React from 'react'
import s from '../PresentationSection/index.module.css'
import CompaniesUseApp from '../CompaniesUseApp'
import MainFeatures from '../MainFeatures'
import Testimonials from '../Testimonials'


export default function PresentationSection({testimonialList}) {


  return (
    <div className={s.presentationSectionContainer}>
      <CompaniesUseApp/>
      <MainFeatures/>
      <Testimonials testimonialList={testimonialList}/>
      </div>
  )
}
