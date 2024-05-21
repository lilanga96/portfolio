import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <section id="profile" className="profile-section">
            <div className="profile-container animate__animated animate__slideInLeft">
                <img src="./src/images/pro-picture.jpg" alt="Sihle" className="profile-picture" />
                <div className="profile-info">
                    <h2 className='fullname'>Siphesihle Dyalvane</h2>
                    <p>I am  a <span className="highlight">Front-End developer </span> I find pleasure in translating design concepts into
                     seamless interactive webpages using HTML, CSS, JavaScript and React.</p>
        <div className='media'>
        <a href="https://github.com/lilanga96" target="_blank" rel="noopener noreferrer">
            <i class="ri-github-line"></i>
        </a>
        <a href="https://x.com/Isipho86250439?t=AnZo8gPaSOEdxeK5boARYg&s=09" target="_blank" rel="noopener noreferrer">
            <i class="ri-twitter-line"></i>
        </a>
        <a href="https://web.facebook.com/siphesihle.dyalvane.9" target="_blank" rel="noopener noreferrer">
            <i class="ri-facebook-line"></i>
        </a>
        <a href="www.linkedin.com/in/siphesihle-d-566061271" target="_blank" rel="noopener noreferrer">
            <i class="ri-linkedin-line"></i>
        </a>
                     </div>
                     <div>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <button className='view-cv'>View CV</button>
      </a>
    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

