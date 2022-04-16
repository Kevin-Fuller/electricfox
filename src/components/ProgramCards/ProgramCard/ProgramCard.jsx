import React from 'react'
import './ProgramCard.css'
import images from '../../../constants/images';

function ProgramCard (title, shortDesc, link, tinyImage) {
  let aInformation = '';
  let aContent = <a target='_blank' href={link} className='program__card__content__signup'>Register Here</a>;
  if(link === 'comingSoon') {
    aContent = <a target='_blank' className='program__card__content__signup__coming__soon'>Coming Soon</a>;
  }

  if(link === 'email') {
    aContent = <a target='_blank' href="mailto:sallyridestrek@gmail.com" className='program__card__content__signup__contact'>Contact Us</a>;
  }

  return (
    <div className='program__card'>
        <div className='program__card__picture'>
            <img src={tinyImage} />
        </div>
        <div className='program__card__content'>
            <img src={images.mtbLogoTall}/>
            <h3 className='program__card__conten__title'>{title}</h3>
            <p className='program__card__conten__short__desc'>{shortDesc}</p>
            {aContent}
            
        </div>
    </div>
  )
}

export default ProgramCard