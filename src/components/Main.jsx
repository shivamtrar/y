import React from 'react';
import './Main.css';
import Card from './Card';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div className='main-section'>
      <div className="desc">
        <h2 className="main-head">Choose Product Category</h2>
        <div className='yellow'></div>
        <p className='para'>
          We believe technology should work for everyone. That’s why we offer a
          full range of tech & appliances repair solutions to keep you connected from
          protection and repair to installation and expert support. <br/>
          How can we help you today? 
        </p>
        <h2 className="contact-head">For Quick Assistance : +1-650-899-9698</h2>
      </div>

      <div className='cards'>
        {/* Wrap Card component with Link to navigate to CustomerService page */}
        <Link to="/customer-service" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card />
        </Link>
      </div>

      <div className='appointment'>
        <div>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 className='expert'>Book your Appointment</h2>
          </Link>
        </div>
        <div>
        
            <h2 className='expert'>Ask an expert</h2>
          
        </div>
      </div>

      <div className='repair'>
        <div className='content-repair'>
          <h2 className='rep-head'>Fast repairs, right in your neighborhood</h2>
          <p className='rep-des'>
            Our experts can fix your tech & appliances easily. Make your appointment today and let us come to you.
          </p>
          <p className='rep-icon'>Thousands of local repair experts ready to help</p>
          <p className='rep-icon'>Most repairs done in same day</p>
          <Link to="/contact-us">
            <button className='button' style={{cursor:"pointer"}}>Book your Appointment</button>
          </Link>
          
        </div>
        <div className='rep-img-div'>
          <img src='/asset/repair.webp' className='img-rep' alt="Repair service" />
        </div>
      </div>

      <div className='appointment'>
        <div>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit', }}>
            <h2 className='expert'>Book your Appointment</h2>
          </Link>
        </div>
        <div>
        
            <h2 className='expert'>Ask an expert</h2>
          
        </div>
      </div>

      <div className='repair'>
        <div className='content-repair'>
          <h2 className='rep-head'>Who we are?</h2>
          <p className='rep-des'>
            Geek Tech Care is a comprehensive tech and appliance repair service provider that caters to a wide range of electronic devices and appliances.
          </p>
          <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit',}}>
          <button className='button'style={{cursor:"pointer" }}>Read More</button>
          </Link>
            
            
        </div>
        <div className='rep-img-div'>
          <img src='/asset/about-us-banner.webp' className='img-rep' alt="About us" />
        </div>
      </div>
    </div>
  );
};

export default Main;
