import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
        .
        <div className='footer__wrapper'>
            <div className='footerLine'></div>
            <div className='footerContainerWrapper'>
                <div className='footerLeft'>
                    <h2>Appointments availible by request</h2>
                    <h1>Sally Collins<br></br><span>CEO Electric Fox</span></h1>
                    <p>(812) 456 - 4565</p>
                    <p>email@email.com</p>
                </div>
                <div className='footerRight'>
                    <div className='footer__socials'>
                        <div className='footer-social'></div>
                        <div className='footer-social'></div>
                        <div className='footer-social'></div>
                    </div>
                    <ul>
                        <li>About Us</li>
                        <li>Sundance MTB Clinic</li>
                        <li>Electric Fox Hair Salon</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footerLogoContainer'>
            <h3 className='footerLogo1'>ELECTRIC FOX</h3>
            <h3 className='footerLogo2'>AT SUNDANCE</h3>
        </div>
    </footer>
  )
}

export default Footer