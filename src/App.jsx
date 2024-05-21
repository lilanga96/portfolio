import React from 'react';
import Navigation from './Components/Navigation';
//import './App.css';
import Profile from './Components/ProfileInfo';
import Skills from './Components/Skills';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';


function App() {
    return (
        <div className="App">
          <Navigation />
          <Routes>
          <Route path='/' element ={<Profile />} />
           <Route path='/skills' element ={<Skills />} />
           <Route path='/contacts' element ={<Contacts />} />
            <Route path='/projects' element = { <Projects />} />
          </Routes>
            
            
        </div>
    );
}

export default App;

