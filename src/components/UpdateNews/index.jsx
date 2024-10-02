import React from 'react'
import UpdateNewsItem from '../UpdateNewsItem'
import s from '../UpdateNews/index.module.css'

export default function UpdateNews({news}) {

  return (
    <div className={s.newsOuterContainer}>
      <h2>Update News</h2>

    <div className={s.newsInnerContainer}>
      {
        news.map((el) => <UpdateNewsItem key={el.id} {...el}/>)
      }
      </div>
      </div>
  )
}
