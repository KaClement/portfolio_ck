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
    <img src={IMG1} alt="Project Screenshot" />
  </div>

  <h3>Classification of Coding Assignments & Automated Feedback</h3>

  <ul>
    <li className='li_item'>Built a clustering tool using K-means and regex to analyze student submissions.</li>
    <li className='li_item'>Automatically generated personalized PDF feedback for each student.</li>
  </ul>

  <div className='portfolio__item-cta'>
    <a href="https://www.youtube.com/watch?v=es2JY_lJD7Q&ab_channel=Clem" className='btn-link'>Demo</a>
  </div>

  <div className="tag-container_2">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" title="Python" className="skill-tag_2" />
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" title="MariaDB" className="skill-tag_2" />
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" title="Flask" className="skill-tag_2" />
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" title="JavaScript" className="skill-tag_2" />
  </div>
</article>


    <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG2} alt="Movie Recommender Screenshot" />
      </div>
      <h3>Movie Recommendation System</h3>
      <ul>
        <li className='li_item'>🧠 Content-based and User-based recommendation features.</li>
        <li className='li_item'>🔗 Connected to IMDb API & built REST endpoints.</li>
      </ul>
      <div className="tag-container_2">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" title="Python" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" title="Flask" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" title="MariaDB" className="skill-tag_2" />
      </div>
      <div className='portfolio__item-cta'>
        <a href="https://github.com/KaClement/movie_recommendation" className='btn-link'>GitHub</a>
        <a href="https://www.youtube.com/watch?v=8v2ag728vzo&ab_channel=Clem" className='btn-link'>Demo</a>
      </div>
    </article>

    <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG3} alt="Game Project Screenshot" />
      </div>
      <h3>Serious Game: Calculus for Kids</h3>
      <ul>
        <li className='li_item'>Designed an educational game for primary students to practice arithmetic.</li>
      </ul>
      <div className="tag-container_2">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg" title="C#" className="skill-tag_2" />
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/unity.svg" title="Unity" className="skill-tag_2" />
      </div>
      <div className='portfolio__item-cta'>
        <a href="https://github.com" className='btn-link'>GitHub</a>
        <a href="https://youtube.com" className='btn-link'>Demo</a>
      </div>
    </article>

  </div>
</section>

  )
}

export default Portfolio