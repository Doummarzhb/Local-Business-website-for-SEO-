import React from 'react';
import { Helmet } from 'react-helmet'; //   react-helmet
import { FaChartBar, FaTags, FaCreditCard, FaUsers, FaCogs, FaClipboardList, FaChartPie, FaClipboardCheck } from 'react-icons/fa';    
 

const APOSS = () => {
  return (
    <div className="hposs-container">
      <Helmet>
        <title>Advanced POS Software - HamsterPOS</title>
        <meta name="description" content="We offer advanced and user-friendly POS software for sales management, accurate reporting, and customization options to meet client needs." />
        <meta name="keywords" content="POS, advanced software, sales management, reporting, customization" />
      </Helmet>

      {/* <h1>Advanced POS Software</h1> */}
      <h1></h1>
      <p> .</p>

      <section className="features">
      {/* <p>We offer advanced and user-friendly POS software for sales management, accurate reporting, and customization options to meet client needs.</p> */}

        <h2>Main Features</h2>
        <div className="gridss">
          <div className="feature-item">
            <FaClipboardCheck size={40} />
            <h3>Efficient Sales Management</h3>
            <p>Streamline your sales processes with ease.</p>
          </div>
          <div className="feature-item">
            <FaChartBar size={40} />
            <h3>Accurate Reporting</h3>
            <p>Generate detailed reports to analyze your business performance.</p>
          </div>
          <div className="feature-item">
            <FaCreditCard size={40} />
            <h3>Seamless Payment Options</h3>
            <p>Accept various payment methods to cater to all customers.</p>
          </div>
          <div className="feature-item">
            <FaTags size={40} />
            <h3>Customizable Features</h3>
            <p>Tailor the POS system to fit your unique business requirements.</p>
          </div>
          <div className="feature-item">
            <FaCogs size={40} />
            <h3>User-Friendly Interface</h3>
            <p>An intuitive interface that simplifies daily operations.</p>
          </div>
          <div className="feature-item">
            <FaUsers size={40} />
            <h3>Exceptional Customer Support</h3>
            <p>24/7 support to assist with any inquiries or issues.</p>
          </div>
          <div className="feature-item">
            <FaClipboardList size={40} />
            <h3>Inventory Management</h3>
            <p>Effortlessly track and manage your inventory levels.</p>
          </div>
          <div className="feature-item">
            <FaChartPie size={40} />
            <h3>Promotional Management</h3>
            <p>Manage and analyze your promotional campaigns effectively.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} HamsterPOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default APOSS;