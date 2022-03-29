import React from 'react'
import './ProgramCard.css'

function ProgramCard (title, shortDesc, link, tinyImage) {
  return (
    <div className='program__card'>
        <div className='program__card__picture'>
            <img src={tinyImage} />
        </div>
        <div className='program__card__content'>
            <h3 className='program__card__conten__title'>{title}</h3>
            <p className='program__card__conten__short__desc'>{shortDesc}</p>
            <a href={link} className='program__card__content__signup'>Sign up</a>
        </div>
    </div>
  )
}

export default ProgramCard