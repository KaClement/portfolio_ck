import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/energy.png'
import IMG2 from '../../assets/movie_wall.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='port_title'>Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Building Management System</h3>
          <ul>
            
            <li class='li_item'>🐍 Python and Flask with Agile Methodology</li>
            <li class='li_item'>🔗 MariaDB for data handling</li>
            <li class='li_item'>👀 Visualization of Energy Consumption by University's Building</li>

          </ul>
          <div className='portfolio__item-cta'>
          <a href="https://www.youtube.com/watch?v=es2JY_lJD7Q&ab_channel=Clem" className='btn'>Demo</a>
          
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Movie Recommendation System </h3>
          <ul>
            <li className='li_item'>🐍 Python and Flask</li>
            <li className='li_item'>🔗 Integrated IMDB API and MariaDB for data handling</li>
            <li className='li_item'>🧠 Content-based and User-based recommendations</li>
          </ul>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/KaClement/movie_recommendation" className='btn'>GitHub</a>
            <a href="https://www.youtube.com/watch?v=8v2ag728vzo&ab_channel=Clem" className='btn'>Demo</a>
           
          </div>
        </article>
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Serious Game : Calculus for Kids</h3>
          <ul>
            <li className='li_item'>🐍 Python and Flask</li>
            <li className='li_item'>🔗 Integrated IMDB API and MariaDB for data handling</li>
            <li className='li_item'>🧠 Content-based and User-based recommendations</li>
          </ul>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://youtube.com" className='btn'>Demo</a>
            
          </div>
        </article> */}

    {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Projet de recherche en bachelor : Classification puis génération personnalisé de feedback pour des codings assignement</h3>
          <ul>
            <li className='li_item'>🐍 Python and Flask</li>
            <li className='li_item'>🔗 Integrated IMDB API and MariaDB for data handling</li>
            <li className='li_item'>🧠 Content-based and User-based recommendations</li>
          </ul>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://youtube.com" className='btn'>Demo</a>
            
          </div>
      </article> */} 

    {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Projet de recherche en Master : AI, LLM, GraphRag and recommendation of relevant research article and data</h3>
          <ul>
            <li className='li_item'>🐍 Python and Flask</li>
            <li className='li_item'>🔗 Integrated IMDB API and MariaDB for data handling</li>
            <li className='li_item'>🧠 Content-based and User-based recommendations</li>
          </ul>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://youtube.com" className='btn'>Demo</a>
            
          </div>
      </article> */} 

 {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Research Breakthrough Prediciton : for CERN Quantum Institue </h3>
          <ul>
            <li className='li_item'>🐍 Python and Flask</li>
            <li className='li_item'>🔗 Integrated IMDB API and MariaDB for data handling</li>
            <li className='li_item'>🧠 Content-based and User-based recommendations</li>
          </ul>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://youtube.com" className='btn'>Demo</a>
            
          </div>
        </article> */}

                {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Serious Game : WeightQuest (Hackathons)</h3>
          <ul>
            <li className='li_item'>🐍 Python and Flask</li>
            <li className='li_item'>🔗 Integrated IMDB API and MariaDB for data handling</li>
            <li className='li_item'>🧠 Content-based and User-based recommendations</li>
          </ul>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://youtube.com" className='btn'>Demo</a>
            
          </div>
        </article> */}

      
      </div>
    </section>
  )
}

export default Portfolio