import React from 'react';
import { Helmet } from 'react-helmet'; 
import { FaMapMarkerAlt, FaBuilding, FaEnvelope } from 'react-icons/fa'; //  Icons
import './Location.css';  

const Location = () => {
  return (
    <section id="location">
      <Helmet>
        <title>Our Location - HamsterPOS</title>
        <meta name="description" content="Find us at HamsterPOS located at Example Street 123, Jdeydet, Beirut. Your one-stop solution for local business needs." />
        <meta property="og:title" content="Our Location - HamsterPOS" />
        <meta property="og:description" content="Find us at HamsterPOS located at Example Street 123, Jdeydet, Beirut. Your one-stop solution for local business needs." />
        <meta property="og:url" content="https://hamsterpos.com/location" />
        <meta property="og:type" content="website" />
      </Helmet>
      <h2>Our Location</h2>
      <div className="location-info">
        <div className="info-item">
          <FaBuilding className="icon" />
          <p><strong>HamsterPOS</strong></p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <p>  Street 123, Jdeydet, Beirut, Lebanon</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <p>Zip Code: 12345</p>
        </div>
      </div>
      <iframe
        title="HamsterPOS Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10081.06664532571!2d35.50190415688161!3d33.88223309382095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f33f48520c41b%3A0x704236cc805d8b9c!2sJdeydet%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1631629003642!5m2!1sen!2sus"
        width="1000"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;
