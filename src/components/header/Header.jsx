import React from 'react';
import './header.css'
import cv from './../../assets/cv.pdf';
import resume_1 from './../../assets/file-regular.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Resume icon
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // LinkedIn and GitHub icons




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
          <h6>Master of Information Systems at University of Geneva </h6>
          <div>
              <a class="login-btn" href={cv} target="_blank" rel="noopener noreferrer">
                  <span class="cover"></span>
                 
                  <FontAwesomeIcon icon={faFileAlt} className="icon" /> 
                  <span className="resume-text">Resume</span> 
                </a>

              <a class="login-btn" href="https://linkedin.com/in/clementka" target="_blank" rel="noopener noreferrer">
                  <span class="cover"></span>
                  <FontAwesomeIcon icon={faLinkedin} className="icon" /> 
                  <span className="resume-text">LinkedIn</span> 

                  </a>

                <a class="login-btn" href="https://github.com/KaClement" target="_blank" rel="noopener noreferrer">
                  <span class="cover"></span>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  <span className="resume-text">GitHub</span> 

                  </a>

          </div>
      </div>


      </div>
    </header>
  )
}

export default Header