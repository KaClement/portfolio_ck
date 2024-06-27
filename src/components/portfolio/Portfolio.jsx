import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Packet Sniffer in C</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn'>GitHub</a>
          
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Socket Programming in C : Clients-Server mini game </h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
           
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Shared Memory manipulation with Semaphor</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Stock Market Application</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
           
          </div>
        </article>

        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://github.com" className='btn'>Live Demo</a>
            
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Android Applicaiton : Sensors Manipulation Java/XML</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio