import React from 'react'
import './challenges.css'
const Challenges = () => {
    return ( 
<section className='challenges__section' id='skills'>
    <h1>Skills & Technology</h1>
    <ul class='skills-list'>
        <li><span>💻</span> <strong>Languages:</strong> <span class="skills-detail">Python, C</span></li>
        <li><span>🖼️</span> <strong>Frontend:</strong> <span class="skills-detail">React, (HTML, CSS, JS)</span></li>
        <li><span>🖥️</span> <strong>Backend:</strong> <span class="skills-detail">Flask, Node.js</span></li>
        <li><span>🗄️</span> <strong>Database:</strong> <span class="skills-detail">MySQL, MariaDB, MongoDB</span></li>
        <li><span>☁️</span> <strong>Cloud:</strong> <span class="skills-detail">Azure</span></li>
        <li><span>📊</span> <strong>Data Science:</strong> <span class="skills-detail">Scikit-Learn, MatPlotLib, Numpy, Pandas, Seaborn</span></li>
        <li><span>🛠️</span> <strong>Software Development</strong> <span class="skills-detail">Git, Azure DevOps, Selenium, SonarQube</span></li>


    </ul>
</section>
    )
}

export default Challenges