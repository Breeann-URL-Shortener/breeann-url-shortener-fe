/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../../assets/minuscurl_logo_main_2b.png';
// import businesslogo from '../../assets/laptop_business.jpg';
import peopleIllustration from '../../assets/people2.jpg';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar to links? */}
      <img src={mainlogo} alt="miniscurl logo with dark background"/>
      
      <section>
        <div>
          <h1>Tiny links, for your big ideas</h1>
        
          <h2>Minuscurl transforms your long urls to be simple & minuscule.</h2>
          
          <p>
            Within this app, you'll be able to take long urls and condense them, making them more manageable. That way, you can maximize the space on your own personal sites or social media accounts. 
            
            You'll also have access to any past minuscule urls that you have created, so that you'll never lose track of your new links.
          </p>
        
          <Link to="/signup">
            <button>Get Started</button>
          </Link>

          <Link to="/login">
            Already have an account? Click here to Login.
          </Link>

        </div>
        
        <img src={peopleIllustration} alt="office view from above"/>
      </section>
    </div>

  );
};

export default LandingPage;
