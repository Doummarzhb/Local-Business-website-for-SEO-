import React from 'react';
import { Helmet } from 'react-helmet'; //   react-helmet
import { FaCloud, FaChartLine, FaUsers, FaSync } from 'react-icons/fa';      
 

const CPOSS = () => {
  return (
    <div className="hposs-container">
      <Helmet>
        <title>Cloud POS Solutions - HamsterPOS</title>
        <meta name="description" content="Manage sales and reports remotely with our reliable cloud solutions, giving you full control from anywhere." />
        <meta name="keywords" content="Cloud POS, remote management, sales, reports, SaaS" />
      </Helmet>
{/*       
      <h1>Cloud POS Solutions</h1> */}
      <p> .</p>

      <section className="features">
        <h2>Main Features</h2>
        <div className="gridss">
          <div className="feature-item">
            <FaCloud size={40} />
            <h3>Remote Access</h3>
            <p>Access your POS system from anywhere with an internet connection.</p>
          </div>
          <div className="feature-item">
            <FaChartLine size={40} />
            <h3>Real-Time Reporting</h3>
            <p>Get up-to-date reports on sales and performance instantly.</p>
          </div>
          <div className="feature-item">
            <FaUsers size={40} />
            <h3>Multi-User Support</h3>
            <p>Allow multiple users to access the system simultaneously with different permissions.</p>
          </div>
          <div className="feature-item">
            <FaSync size={40} />
            <h3>Automatic Updates</h3>
            <p>Enjoy seamless updates without interrupting your business operations.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} HamsterPOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CPOSS;
