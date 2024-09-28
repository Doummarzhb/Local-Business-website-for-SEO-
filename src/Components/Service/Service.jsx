import React from 'react';
import './Service.css';
import { FaHotel, FaShoppingCart, FaLaptop, FaTools, FaCloud } from 'react-icons/fa'; //  icons
import backgroundImage from '../../assets/workspace-1280538_1280.jpg';
import { Helmet } from 'react-helmet'; // React Helmet  
import { useNavigate } from 'react-router-dom'; //react rout navigate

const Service = () => {
    const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Services Hamster POS  | POS Solutions for Retail & Hospitality</title>
        <meta name="description" content="Hamster POS provides state-of-the-art Point of Sale solutions for hospitality and retail sectors, offering advanced software, hardware, and support." />
        <meta property="og:title" content="Hamster POS Services" />
        <meta property="og:description" content="Explore our POS solutions for hospitality and retail businesses with advanced software and hardware." />
      </Helmet>
      <div className='cont' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='service'>
          <h1>Our Services</h1>
        </div>
        <div className='services-row'>
          <div className='service-item'>
            <FaHotel className='service-icon' />
            <h3>Hospitality POS Solutions</h3>
            <p>We provide integrated solutions for hotels and restaurants to ensure exceptional customer experience and seamless operations management.</p>
            <button className='service-button' onClick={() => navigate('/hposs')}>Learn More</button>
          </div>
          <div className='service-item'>
            <FaShoppingCart className='service-icon' />
            <h3>Retail POS Solutions</h3>
            <p>Our retail POS solutions enhance daily operations with multiple options for managing inventory and sales.</p>
            <button className='service-button' onClick={() => navigate('/rposs')}>Learn More</button>
          </div>
          <div className='service-item'>
            <FaLaptop className='service-icon' />
            <h3>Advanced POS Software</h3>
            <p>We offer advanced and user-friendly POS software for sales management, accurate reporting, and customization options to meet client needs.</p>
            <button className='service-button' onClick={() => navigate('/aposs')}>Learn More</button>
          </div>
          <div className='service-item'>
            <FaTools className='service-icon' />
            <h3>Customer Support & Technical Assistance</h3>
            <p>We provide 24/7 technical support to ensure uninterrupted business operations and fast resolution of any technical issues.</p>
            <button className='service-button' onClick={() => navigate('/customsupport')}>Learn More</button>
          </div>
          <div className='service-item'>
            <FaCloud className='service-icon' />
            <h3>Cloud POS Solutions</h3>
            <p>Manage sales and reports remotely with our reliable cloud solutions, giving you full control from anywhere.</p>
            <button className='service-button' onClick={() => navigate('/cposs')}>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
