import React from 'react'
import './header.css'
import Cta from './Cta'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'
const Header = () => {
  return (
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Vinay Chandran</h1>
      <h5 className='text-light'>Front-End Developer</h5>
      <Cta />
      <HeaderSocials />
      <div className='me'>
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
  )
}

export default Header