import React from 'react';
import './about.css';
// import ME from '../../assets/me.jpg';

const About = () => {
  return (
    <section id='about'>
      <div className='about__container'>
        <main className='row'>
          <section className="col">
            <div className='title'>
              <h2>EDUCATION</h2>
            </div>
            <div className='contents'>
            <div className='box'>
              <h3>Master in Information Systems - Knowledge Engineering Specialization</h3>
              <h4>Graduation in June 2026</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
              </ul>

              <div className="tag-container">
                <span className="tag">Information Retrieval</span>
                <span className="tag">Deep Learning</span>
                <span className="tag">Knowledge Organization System</span>
                <span className="tag">Natural Language Processing</span>

              </div>
            </div>

              <div className='box'>
                <h3>Bachelor in Information Systems</h3>
                <ul>
                  <li>🏫 Studied Enterprise Information Systems, algorithms, and databases, gaining a comprehensive understanding of these core areas.</li>
                  <li>📊 Acquired knowledge in calculus, algebra, statistics, and probability, laying a strong mathematical foundation for data analysis.</li>
                  <li>🤖 Explored machine learning, applying concepts to practical scenarios and enhancing my analytical skills.</li>
                  <li>📜 Conducted a research thesis on the classification and automated correction of coding assignments, integrating all learned subjects into a meaningful project.</li>
                </ul>
                <div className="tag-container">
                <span className="tag">Oriented Object Programming</span>
                  <span className="tag">Algorithms</span>
                  <span className="tag">Database Design</span>
                  <span className="tag">Artifical Intelligence</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Linear Algebra</span>
                  <span className="tag">Security of Information Systems</span>
                  <span className="tag">Entreprise Information Systems</span>
                  

                </div>
              </div>
              <div className='box'>
                <h3>Baccalaureate Diploma with Honors in Science, with Mathematics Specialization</h3>
                <p>Lycée Jeanne d'Arc</p>
              </div>
            </div>
          </section>

          <section className="col">
            <div className='title'>
              <h2>EXPERIENCE</h2>
            </div>
            <div className='contents'>
              <div className='box'>
                <h3>Python Software Developer - Internship</h3>
                <h4>Division des batîments de l'Université de Genève</h4>
                <h4>Jan-Feb 2025</h4>

                <ul>
                  <li>💻 Developed a web application for visualizing building energy consumption using Python and Flask.</li>
                  <li>🎨 Designed and implemented an intuitive user interface and structured the database for efficient data handling.</li>
                  <li>🗣️ Communicated complex technical concepts to stakeholders, ensuring clear understanding of the system's functionalities and benefits.</li>
                  <li>🚀 Enhanced skills in web development, data management, and effective communication through practical application.</li>
                </ul>
                <div className="tag-container_2">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" title="Python" className="skill-tag_2" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" alt="Flask" title="Flask" className="skill-tag_2" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" alt="SQL" title="SQL" className="skill-tag_2" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" title="Docker" className="skill-tag_2" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg" alt="Nginx" title="Nginx" className="skill-tag_2" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" alt="Javascript" title="Javascript" className="skill-tag_2" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg" alt="HTML" title="HTML" className="skill-tag_2" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg" alt="CSS" title="CSS" className="skill-tag_2" />
                </div>


              </div>
              <div className='box'>
                <h4>2016</h4>
                <h3>Volunteering - Cours Informatique au senior</h3>
                <ul>
                  <li>Engaged in social work by teaching seniors about computers and various software applications.</li>
                  <li>Conducted volunteer sessions to enhance their digital literacy, focusing on practical and accessible technology skills.</li>
                  <li>Provided personalized guidance to help seniors navigate the digital world confidently and independently.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default About;