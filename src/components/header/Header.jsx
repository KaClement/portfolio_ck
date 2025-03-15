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
              {/* <li><a href="#contact">Contact Me</a></li> */}
            </ul>
        </div>
       
        <div class="content">
          <h1>Clément Kacel</h1>
          <h3>Software Engineer</h3>
          <h6>Master Student at University of Geneva in Information Systems </h6>
          <div>
            <button class="login-btn" type="button"><span class="cover"></span> <a rel="noopener noreferrer"href={cv} target='_blank'>Resume</a></button>
            <button class="login-btn" type="button"><span class="cover"></span> <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/clementka">LinkedIn</a></button>
            <button class="login-btn" type="button"><span class="cover"></span> <a  target="_blank" rel="noopener noreferrer"href="https://github.com/KaClement">GitHub</a></button>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header