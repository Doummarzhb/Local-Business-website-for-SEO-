import React from 'react';
import { Helmet } from 'react-helmet'; //   react-helmet
import { FaHeadset, FaTools, FaClock, FaPhoneAlt } from 'react-icons/fa';      
 

const CustomerSupport = () => {
  return (
    <div className="hposs-container">
      <Helmet>
        <title>Customer Support & Technical Assistance - HamsterPOS</title>
        <meta name="description" content="We provide 24/7 technical support to ensure uninterrupted business operations and fast resolution of any technical issues." />
        <meta name="keywords" content="customer support, technical assistance, help desk, support team" />
      </Helmet>
      
   
      <p> .</p>

      <section className="features">
        <h2>Main Features</h2>
        <div className="gridss">
          <div className="feature-item">
            <FaHeadset size={40} />
            <h3>24/7 Technical Support</h3>
            <p>Our support team is available 24/7 to meet your needs.</p>
          </div>
          <div className="feature-item">
            <FaTools size={40} />
            <h3>Quick Solutions to Problems</h3>
            <p>We provide effective and rapid solutions to any technical issues.</p>
          </div>
          <div className="feature-item">
            <FaClock size={40} />
            <h3>Fast Response Time</h3>
            <p>Immediate response to assist you at any time.</p>
          </div>
          <div className="feature-item">
            <FaPhoneAlt size={40} />
            <h3>Phone Support</h3>
            <p>Contact us easily by phone for assistance.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} HamsterPOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CustomerSupport;
