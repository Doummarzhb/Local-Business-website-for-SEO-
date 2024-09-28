import React from 'react';
import { Helmet } from 'react-helmet'; //  Helmet
import './About.css';  
import image from '../../assets/about2.jpeg';  

const AboutUs = () => {
  return (
    <div className="about-us">
      <Helmet>
        <title>About Us - HamsterPOS</title>
    
        <meta name="description" content="Learn about HamsterPOS, providing the best POS solutions for local businesses." />
        <meta property="og:title" content="About Us - HamsterPOS" />
        <meta property="og:description" content="Discover HamsterPOS, offering the best POS solutions for local businesses." />
        <meta property="og:url" content="https://hamsterpos.com/about" />
      </Helmet>
      
      <div className='row'>
        <div className='imgwrapper'>
          <img src={image} alt='About Us' />
        </div>
        <div className='contentWrapper'>
          <div className='content'>
            <span className='textWrapper'>
              <span>About Us</span>
            </span>
            <h2> About Us</h2>
            <p>We strive to deliver the best experience to our customers by offering high-quality products and excellent customer service.</p>
            <p>We offer a variety of point-of-sale services that help enhance business performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
