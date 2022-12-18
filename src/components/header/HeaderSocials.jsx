import React from 'react'
import {FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com" target='_blank'><FaGithub /></a>
        <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials