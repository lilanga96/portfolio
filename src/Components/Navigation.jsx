import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
  return (
    <div>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to={'/'} class="nav-item"style={{ textDecoration: 'none'}}>
          <h4 className="nav-link"  style={{ color: 'whitesmoke' }} >Home</h4>
        </Link>
        <Link to={'/about'} class="nav-item"style={{ textDecoration: 'none' }}>
          <h4 className="nav-link"  style={{ color: 'whitesmoke' }}  >About</h4>
        </Link>
        <Link to={'/skills'} class="nav-item"style={{ textDecoration: 'none' }}>
          <h4 className="nav-link"  style={{ color: 'whitesmoke' }}  >Skills</h4>
        </Link>
        <Link to={'/projects'} class="nav-item"style={{ textDecoration: 'none' }}>
          <h4 className="nav-link"style={{ color: 'whitesmoke' }}  >Projects</h4>
        </Link>
        <Link to={'/contacts'} class="nav-item"style={{ textDecoration: 'none'}}>
          <h4 className="nav-link" style={{ color: 'whitesmoke' }}  >Contacs</h4>
        </Link>
      </ul>
    </div>
    <h4 className="navbar-brand">
      S <span className='highlight'>D</span>
    </h4>
  </div>

</nav>
    </div>
  )
}

export default Navigation