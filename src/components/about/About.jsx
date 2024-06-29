import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>

     
      <div className='about__container'>
        
        <main class='row'>
        
          <section class="col">
            <header class='title'>
              <h2>EDUCATION</h2>
            </header>
            <div class='contents'>
              <div class='box'>
                <h4>2021-2024</h4>
                <h3>Bachelor's Degree in Information Systems and Service Sciences</h3>
                <ul>
                  <li>🏫 Studied Enterprise Information Systems, algorithms, and databases, gaining a comprehensive understanding of these core areas.</li>
                  <li>📊 Acquired knowledge in calculus, algebra, statistics, and probability, laying a strong mathematical foundation for data analysis.</li>
                  <li>🤖 Explored machine learning, applying concepts to practical scenarios and enhancing my analytical skills.</li>
                  <li>📜 Conducted a research thesis on the classification and automated correction of coding assignments, integrating all learned subjects into a meaningful project.</li>
                </ul>

              </div>
              <div class='box'>
                <h4>2016-2019</h4>
                <h3>French Baccalaureate Diploma with Honors in Science, with Mathematics Specialization</h3>
                <p>Lycée Jeanne d'Arc</p>
              </div>
            </div>

          </section>
          
          <section class="col">
            <header class='title'>
              <h2>EXPERIENCE</h2>
            </header>
            <div class='contents'>
            <div class='box'>
                <h4>2024</h4>
                <h3>Python Developper</h3>
                <ul>
                  <li>💻 Developed a web application for visualizing building energy consumption using Python and Flask.</li>
                  <li>🎨 Designed and implemented an intuitive user interface and structured the database for efficient data handling.</li>
                  <li>🗣️ Communicated complex technical concepts to stakeholders, ensuring clear understanding of the system's functionalities and benefits.</li>
                  <li>🚀 Enhanced skills in web development, data management, and effective communication through practical application.</li>
                </ul>


              </div>
              <div class='box'>
                <h4>2016</h4>
                <h3>Bénévole - Cours Informatique au senior</h3>
                <ul>
                  <li>👥 Engaged in social work by teaching seniors about computers and various software applications.</li>
                  <li>💻 Conducted volunteer sessions to enhance their digital literacy, focusing on practical and accessible technology skills.</li>
                  <li>🧑‍🏫 Provided personalized guidance to help seniors navigate the digital world confidently and independently.</li>
                  <li>❤️ Volunteered for free, driven by a commitment to community service and empowering the elderly through technology.</li>
                </ul>
              </div>
             
              
            </div>

          </section>
        </main>
        </div> 
    
    </section>
  )
}

export default About