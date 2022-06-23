import React from 'react'
import { Link } from 'react-router-dom'
import './Two_Column_Buttons.css'

function Two_Column_Buttons(leftButton, leftButtonLink, rightButton, rightButtonLink) {
  return (
    <div className='two-column-buttons'>
        <Link to={leftButtonLink} className='two-column-button-button two-column-button-button-left'><span className="animatedBnspan">{leftButton}</span></Link>
        <Link to={rightButtonLink} className='two-column-button-button two-column-button-button-right'><span className="animatedBnspan">{rightButton}</span></Link>
      </div>
  )
}

export default Two_Column_Buttons