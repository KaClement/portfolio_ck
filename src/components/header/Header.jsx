import React from 'react';
import './header.css'
import cv from './../../assets/cv.pdf';





const Header = () => {
  return (
    <header>
    
      <div class="banner">
        <div class="navbar">
            <ul>
              <li><a href="#myinfo">About me</a></li>
              <li><a href="#about">Experience</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#technology">Skills</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
       
        <div class="content">
          <h1>Clément Kacel</h1>
          <h4>Python Developper & Data Science Enthousiast </h4>
          <div>
            <button class="signup-btn" type="button"><span class="cover"></span> <a href={cv} target='_blank'>CV</a></button>
            <button class="login-btn" type="button"><span class="cover"></span> <a href="www.linkedin.com/in/clementka">LinkedIn</a></button>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header