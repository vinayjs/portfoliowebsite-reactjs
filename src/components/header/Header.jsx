import React from 'react'
import './header.css'
import Cta from './Cta'

const Header = () => {
  return (
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Vinay Chandran</h1>
      <h5 className='text-light'>Front-End Developer</h5>
      <Cta />

      <div className='me'>
        <img src='' alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
  )
}

export default Header