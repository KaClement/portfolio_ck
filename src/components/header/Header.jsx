import React from 'react';
import './header.css'
import cv from './../../assets/cv.pdf';





const Header = () => {

  
  return (
    <header>
     
      
      <div class="banner">
        <div class="navbar">
          
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#technology">A propos de moi</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            <li><a href="https://Github.com">GitHub</a></li>
            </ul>
        </div>
       
        <div class="content">
          <h1>Clément Kacel</h1>
          <p>Etudiant à l'université de Genève, bachelor en système d'information et sciences des services</p>
          <div>
            <button class="signup-btn" type="button"><span class="cover"></span> <a href={cv} target='_blank'>CV</a></button>
            <button class="login-btn" type="button"><span class="cover"></span> <a href="www.linkedin.com/in/clementka">Linkedin</a></button>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header