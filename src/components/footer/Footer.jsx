import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
     
      <ul className='permalinks'>
        <li><a className='a_footer' href="#">Home</a></li>
        <li><a className='a_footer' href="#about">About</a></li>
        <li><a className='footer__socials' href="https://github.com/KaClement"><BsGithub /></a></li>
        <li><a className='a_footer' href="#portfolio">Portfolio</a></li>
        <li><a className='a_footer' href="#contact">Contact</a></li>
      </ul>


      <div className="footer__copyright">
        <small>&copy; Made with React, by Clément Kacel. All rights reserved</small>
      </div>
     
    </footer>
  )
}

export default footer