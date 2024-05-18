import React from 'react'

function Home() {
  return (
    <div className='about-container'>
        <div className='info'>
        <h2>Hello, I'm</h2>
        <h1>Siphesihle Dyalvane</h1>
        <h4>and I'm a <span class="highlight">Front-End Developer</span></h4>
        <p>I find pleasure in translating design concepts into seamless<br></br> 
        and interactive webpages using HTML,CSS,JavaScript and React</p>
        </div>
        <div className='picture'>
            <img src='./src/images/pro-picture.jpg'></img>
        </div>
    </div>
  )
}

export default Home