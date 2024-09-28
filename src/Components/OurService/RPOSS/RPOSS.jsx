import React from 'react';
import { Helmet } from 'react-helmet'; //   react-helmet
import { FaChartBar, FaTags, FaCreditCard, FaUsers, FaCogs, FaClipboardList, FaChartPie, FaClipboardCheck } from 'react-icons/fa';      
 

const RPOSS = () => {
  return (
    <div className="hposs-container">
      <Helmet>
        <title>Retail POS Solutions - HamsterPOS</title>
        <meta name="description" content="Our retail POS solutions enhance daily operations with multiple options for managing inventory and sales." />
        <meta name="keywords" content="POS, retail, inventory management, sales management, CRM" />
      </Helmet>
      
      <p> .</p>

      <section className="features">
        <h2>Main Features</h2>
        <div className="gridss">
          <div className="feature-item">
            <FaClipboardCheck size={40} />
            <h3>Advanced Inventory Management</h3>
            <p>Easily track inventory with low stock alerts.</p>
          </div>
          <div className="feature-item">
            <FaChartBar size={40} />
            <h3>Integrated Data Analytics</h3>
            <p>Detailed reports on sales and performance to help you make decisions.</p>
          </div>
          <div className="feature-item">
            <FaCreditCard size={40} />
            <h3>Smooth Payment Processing</h3>
            <p>Offer multiple payment options to meet customer needs.</p>
          </div>
          <div className="feature-item">
            <FaTags size={40} />
            <h3>Integration with E-commerce</h3>
            <p>Connect POS with e-commerce stores for centralized management.</p>
          </div>
          <div className="feature-item">
            <FaCogs size={40} />
            <h3>User-Friendly Interface</h3>
            <p>A simple interface that makes daily use easy.</p>
          </div>
          <div className="feature-item">
            <FaUsers size={40} />
            <h3>Excellent Customer Support</h3>
            <p>A support team available 24/7 to assist with any inquiries.</p>
          </div>
          <div className="feature-item">
            <FaClipboardList size={40} />
            <h3>Easy Reporting Setup</h3>
            <p>Detailed reports on sales performance in real-time.</p>
          </div>
          <div className="feature-item">
            <FaChartPie size={40} />
            <h3>Promotional Campaign Management</h3>
            <p>Easy creation and management of promotional offers.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} HamsterPOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RPOSS;
