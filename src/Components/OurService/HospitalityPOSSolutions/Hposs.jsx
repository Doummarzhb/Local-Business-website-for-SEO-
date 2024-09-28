import React from 'react';
import { Helmet } from 'react-helmet'; //   react-helmet
import { FaClipboardCheck, FaChartLine, FaCreditCard, FaUsers, FaCog, FaRegListAlt, FaClipboard } from 'react-icons/fa';      
import './HPOSS.css';  

const HPOSS = () => {
  return (
    <div className="hposs-container">
      <Helmet>
        <title>Hospitality POS Solutions - HamsterPOS</title>
        <meta name="description" content="We provide integrated solutions for hotels and restaurants to ensure exceptional customer experience and seamless operations management." />
        <meta name="keywords" content="POS, hospitality, hotel management, restaurant management, CRM" />
      </Helmet>

      <p> .</p>

      <section className="features">
        <h2>Main Features</h2>
        <div className="gridss">
          <div className="feature-item">
            <FaClipboardCheck size={40} />
            <h3>Efficient Order Management</h3>
            <p>Take orders quickly and accurately via mobile devices.</p>
          </div>
          <div className="feature-item">
            <FaRegListAlt size={40} />
            <h3>Inventory Tracking</h3>
            <p>Automated notifications for inventory levels.</p>
          </div>
          <div className="feature-item">
            <FaUsers size={40} />
            <h3>Customer Relationship Management (CRM)</h3>
            <p>Record customer data and preferences.</p>
          </div>
          <div className="feature-item">
            <FaChartLine size={40} />
            <h3>Reporting and Analytics</h3>
            <p>Track sales and business performance.</p>
          </div>
          <div className="feature-item">
            <FaCreditCard size={40} />
            <h3>Smooth Payment Processing</h3>
            <p>Support for various payment methods.</p>
          </div>
          <div className="feature-item">
            <FaCog size={40} />
            <h3>Integration with Booking Systems</h3>
            <p>Connect with booking systems to streamline reservation and order management.</p>
          </div>
          <div className="feature-item">
            <FaClipboard size={40} />
            <h3>Easy Menu Customization</h3>
            <p>Simple customization of menus, adding or removing items.</p>
          </div>
          <div className="feature-item">
            <FaChartLine size={40} />
            <h3>Real-time Data Analysis</h3>
            <p>Obtain instant analytics on sales performance.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} HamsterPOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HPOSS;
