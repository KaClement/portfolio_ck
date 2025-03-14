import React from 'react'
import './myinfo.css'



const myInfo = () =>{

    return(

<section id='myinfo'>
    <h2>About Me</h2>
    <br />
    <div class="row div-box">
        <div class="col-4 img-box">
            <img src="/../../../assets/me.jpg" alt="Profile Image" />
        </div>
        <div class="col-8 text-box">
            <p>Completing my Master in August 2026 | Open for internship from March - To August 2026 </p>
  {/* Skill Tags with Logos */}
            <div className="skills-container">
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" alt="Python" className="skill-logo" />
                    Python
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" alt="Javascript" className="skill-logo" />
                    Javascript
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg" alt="C#" className="skill-logo" />
                    C#
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="skill-logo" />
                    React
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg" alt="HTML" className="skill-logo" />
                    HTML/CSS
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" alt="Flask" className="skill-logo" />
                    Flask
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/django.svg" alt="Django" className="skill-logo" />
                    Django
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" alt="PostgreSQL" className="skill-logo" />
                    PostgreSQL
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mariadb.svg" alt="MariaDB" className="skill-logo" />
                    MariaDB
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" alt="MongoDB" className="skill-logo" />
                    MongoDB
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" alt="Azure" className="skill-logo" />
                    Azure
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg" alt="Scikit-Learn" className="skill-logo" />
                    Scikit-Learn
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/numpy.svg" alt="Numpy" className="skill-logo" />
                    Numpy
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg" alt="Pandas" className="skill-logo" />
                    Pandas
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg" alt="Git" className="skill-logo" />
                    Git
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azuredevops.svg" alt="Azure DevOps" className="skill-logo" />
                    Azure DevOps
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/selenium.svg" alt="Selenium" className="skill-logo" />
                    Selenium
                </div>
                <div className="skill-tag">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sonarqube.svg" alt="SonarQube" className="skill-logo" />
                    SonarQube
                </div>
            </div>

        </div>
    </div>
</section>
    



    );

};

export default myInfo;