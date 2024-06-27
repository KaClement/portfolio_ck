import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
     
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a className='footer__socials' href="https://Github.com"><BsGithub /></a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__copyright">
        <small>&copy; Clément Kacel. All rights reserved</small>
      </div>
     
    </footer>
  )
}

export default footer