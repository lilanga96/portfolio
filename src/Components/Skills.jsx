import React from 'react';
import './skill.css'

function Skills() {
  return (
    <div  className="animate__animated animate__slideInUp">
        <h2 className='skills-heading'>Technical Skills</h2>
        <div class="grid-container">
            
        <div class="card">
            
            <h2>JavaScript</h2>
            <p>Proficient in JavaScript, building dynamic and interactive web applications using ES6+ features and libraries.</p>
        </div>
        <div class="card">
            <h2>React</h2>
            <p>Experienced in React, creating responsive single-page applications with hooks, Redux, and performance optimization.</p>
        </div>
        <div class="card">
            <h2>HTML</h2>
            <p>Strong foundation in HTML, developing well-structured, semantic, and accessible web pages with HTML5 elements.</p>
        </div>
        <div class="card">
            <h2>CSS</h2>
            <p>Adept at CSS, designing visually appealing and responsive layouts using CSS3, Flexbox, Grid, and preprocessors.</p>
        </div>
</div>
</div>
  )
}

export default Skills