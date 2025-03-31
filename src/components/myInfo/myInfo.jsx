import React from 'react';
import './myinfo.css';
import me_img from '../../assets/emoji_2.png'
const MyInfo = () => {
  return (
    <section id="myinfo">
        <h2>About Me</h2>
        <br />
        <p className="subtitle">
            <span>Master Graduation in August 2026</span>
            <span className="separator">•</span>
            <span>Looking for internship from March 2026 to August 2026</span>
        </p>
        
        <div className="row div-box">
            <div className="col-4 img-box">
                <img src={me_img} alt='IMG'/>        
            </div>
            
            <div className="col-8 text-box">

            {/* Skill Tags with Logos */}
            <div className="row">
                <div className="skills-container language col-4">
                <div className="skill-tag" style={{ backgroundColor: '#3572A5' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="skill-logo" />
                    <span className="skill-name">Python</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#F7DF1E' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" alt="Javascript" className="skill-logo" />
                    <span className="skill-name">Javascript</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#68217A' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg" alt="C#" className="skill-logo" />
                    <span className="skill-name">C#</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#E34F26' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg" alt="HTML" className="skill-logo" />
                    <span className="skill-name">HTML/CSS</span>
                </div>
                </div>

                <div className="skills-container framework col-4">
                <div className="skill-tag" style={{ backgroundColor: '#61DAFB' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="skill-logo" />
                    <span className="skill-name">React</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: 'white' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" alt="Flask" className="skill-logo" />
                    <span className="skill-name">Flask</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#092E20' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/django.svg" alt="Django" className="skill-logo" />
                    <span className="skill-name">Django</span>
                </div>
                </div>

                <div className="skills-container database col-4">
                <div className="skill-tag" style={{ backgroundColor: '#336791' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="skill-logo" />
                    <span className="skill-name">PostgreSQL</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#003545' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mariadb.svg" alt="MariaDB" className="skill-logo" />
                    <span className="skill-name">MariaDB</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#47A248' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" alt="MongoDB" className="skill-logo" />
                    <span className="skill-name">MongoDB</span>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="skills-container tools col-12">
                        <div className="skill-tag" style={{ backgroundColor: '#F7931E' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg" alt="Scikit-Learn" className="skill-logo" />
                    <span className="skill-name">Scikit-Learn</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#150458' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg" alt="Pandas" className="skill-logo" />
                    <span className="skill-name">Pandas</span>
                </div>
                

                
                <div className="skill-tag" style={{ backgroundColor: '#F05032' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg" alt="Git" className="skill-logo" />
                    <span className="skill-name">Git</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#0078D7' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azuredevops.svg" alt="Azure DevOps" className="skill-logo" />
                    <span className="skill-name">Azure DevOps</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#43B02A' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/selenium.svg" alt="Selenium" className="skill-logo" />
                    <span className="skill-name">Selenium</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#4E9BCD' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sonarqube.svg" alt="SonarQube" className="skill-logo" />
                    <span className="skill-name">SonarQube</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#2496ED' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" alt="Docker" className="skill-logo" />
                    <span className="skill-name">Docker</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#009639' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg" alt="nginx" className="skill-logo" />
                    <span className="skill-name">Nginx</span>
                </div>
                <div className="skill-tag" style={{ backgroundColor: '#0089D6' }}>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="skill-logo" />
                    <span className="skill-name">Azure</span>
                </div>
                </div>
            </div>
            </div>

       
        <div className="col-12 text-box-2">
            <div className="row">
                <div className="skill-container tools col-3">
                    <div className="skill-tag method" style={{ backgroundColor: '#ff4444' }}>
                        <p>Object-Oriented Programming</p>
                    </div>
                </div>
                <div className="skill-container tools col-3">
                    <div className="skill-tag method" style={{ backgroundColor: '#4CAF50' }}>
                        <p>Database Design</p>
                    </div>
                </div>
                <div className="skill-container tools col-3">
                    <div className="skill-tag method" style={{ backgroundColor: '#FF9800' }}>
                        <p>Design and Analysis of Algorithms</p>
                    </div>
                </div>
                <div className="skill-container tools col-3">
                    <div className="skill-tag method" style={{ backgroundColor: '#9C27B0' }}>
                        <p>Artificial Intelligence</p>
                    </div>
                </div>
            </div>
        </div>


      </div>
    </section>
  );
};

export default MyInfo;