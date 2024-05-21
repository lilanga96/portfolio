import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <section id="profile" className="profile-section">
            <div className="profile-container">
                <img src="./src/images/pro-picture.jpg" alt="Sihle" className="profile-picture" />
                <div className="profile-info">
                    <h2>Siphesihle Dyalvane</h2>
                    <p>I am  a <span className="highlight">Front-End developer </span> I find pleasure in translating design concepts into
                     seamless interactive webpages using HTML, CSS, JavaScript and React.</p>
                     <div className='media'>
                     <i class="ri-github-line"></i>
                     <i class="ri-twitter-line"></i>
                     <i class="ri-facebook-line"></i>
                     <i class="ri-linkedin-line"></i>
                     </div>
                     <div>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <button className='view-cv resume'>View CV</button>
      </a>
    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

