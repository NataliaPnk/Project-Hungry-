import React from 'react'
import s from '../UpdateNewsItem/index.module.css'

export default function UpdateNewsItem({ id, img, title, description, readMore}) {

  return (
    <div className={s.newsItemWrapper}>
      <img src={img}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{readMore}</span>
      </div>
  )
}
