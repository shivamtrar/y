import React from 'react';
import './CustomerService.css'; 
import backgroundImage from '../assets/cust.jpeg'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomerService = () => {
  return (
    <>
    <Navbar/>
    <div className="customer-service-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h3>Looking for more than just a repair?</h3>
        <div className="yellow-line"></div>
        <p>
          We troubleshoot and repair hardware and software issues, optimize
          performance, and provide setup and maintenance services for both PCs and tablets.
        </p>
        <h2>For Quick Assistance: +1-650-899-9698</h2>
        <h3>We Care To Serve Best As We Can</h3>
        <button className="chat-now-btn">Chat Now</button>

        <div className="steps">
          <p>✔ Start Chat</p>
          <p>✔ Schedule Appointment</p>
          <p>✔ Get Device Repaired</p>
        </div>
        <div>
            <p>
            iGeek Care is an independent third-party, IT service provider for software-related problems. Unless stated, we are not affiliated with any company, organization, manufacturer, ISP, or email provider. Our services have helped thousands of people with their computer problems. These services may also be available by the brand owner. 
            </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CustomerService;
