import React from 'react'

function Home() {
  return (
    <div>
    <div className='about-container'>
    <div className='info'>
        <h2>Hello, I'm</h2>
        <h1>Siphesihle Dyalvane</h1>
        <h4>and I'm a <span class="highlight">Front-End Developer</span></h4>
        <p>I find pleasure in translating design concepts into seamless<br></br> 
        and interactive webpages using HTML,CSS,JavaScript and React</p>
        <div className='socials'>
        <i class="ri-facebook-circle-fill"></i>
        <i class="ri-github-fill"></i>
        <i class="ri-linkedin-fill"></i>
        <i class="ri-twitter-fill"></i>
        </div>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <button className='view-cv'>View CV</button>
      </a>
        </div>
        <div className='picture'>
            <img src='./src/images/pro-picture.jpg'></img>
        </div>
    </div>
    </div>
  )
}

export default Home