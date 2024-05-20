import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navigation = () => {


  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <Link to={'/'} class="nav-item">
          <li className="nav-link" >Home</li>
        </Link>
         <Link to={'/about'} class="nav-item">
           <li className="nav-link" >About</li>
         </Link>
         <Link to={'/skills'} class="nav-item">
           <li className="nav-link" >Skills</li>
         </Link>
         <Link to={'/projects'} class="nav-item">
           <li className="nav-link">Projects</li>
         </Link>
        <Link to={'/contacts'} class="nav-item">
          <li className="nav-link">Contacs</li>
         </Link>

            </ul>
        </div>
    </nav>
  );
};

export default Navigation;

