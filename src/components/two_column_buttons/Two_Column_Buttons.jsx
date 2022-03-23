import React from 'react'
import './Two_Column_Buttons.css'

function Two_Column_Buttons(leftButton, leftButtonLink, rightButton, rightButtonLink) {
  return (
    <div className='two-column-buttons'>
        <a href={leftButtonLink} className='two-column-button-button two-column-button-button-left'><span className="animatedBnspan">{leftButton}</span></a>
        <a href={rightButtonLink} className='two-column-button-button two-column-button-button-right'><span className="animatedBnspan">{rightButton}</span></a>
      </div>
  )
}

export default Two_Column_Buttons