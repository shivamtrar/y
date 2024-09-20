import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Danielle Williams',
    jobTitle: 'Business Analyst',
    rating: 4,
    text: "I had a complicated issue with my home security system, but Geek Tech Care tackled it with ease. Their knowledgeable technician identified the problem quickly and implemented a solution that restored my peace of mind. I highly recommend their services!",
  },
  {
    name: 'Michael Davis',
    jobTitle: 'IT Specialist',
    rating: 5,
    text: 
    "Geek Tech Care saved the day when my refrigerator suddenly stopped cooling. Their technician arrived promptly, diagnosed a faulty compressor, and had it replaced in no time. Thanks to them, I didn't have to worry about spoiled groceries!"
 },
  {
    name: 'Sarah Lee',
    jobTitle: 'Marketing Director',
    rating: 3,
    text: "I've relied on Geek Tech Care for all my tech needs, from computer repairs to smart home installations, and they've never disappointed. Their team is reliable, knowledgeable, and always goes the extra mile to ensure customer satisfaction. "  },
  {
    name: 'David Johnson',
    jobTitle: 'Business Owner',
    rating: 5,
    text: "When my WiFi signal was constantly dropping, I called Geek Tech Care for help. Their team optimized my network setup, and now I enjoy seamless connectivity throughout my home. Thanks to them, streaming and gaming have never been smoother!"  },
  {
    name: 'Emily Clark',
    jobTitle: 'Freelancer',
    rating: 4,
    text: "I couldn't figure out why my printer kept jamming until I contacted Geek Tech Care. Their technician not only fixed the issue but also took the time to explain what went wrong and how to prevent it in the future. Outstanding service!"
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const handleNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setFadeClass('fade-in');
    }, 500); // Match this to the duration of the transition in CSS
  };

  const handlePrev = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFadeClass('fade-in');
    }, 500);
  };

  const { name, jobTitle, rating, text } = testimonials[currentTestimonial];

  return (
    <div className="testimonial-container">
      <h2>Testimonials</h2>
      <div className={`testimonial-content ${fadeClass}`}>
        <div className="icon">
        <img src="/asset/testimonial.png" alt="user icon" className='testmonial-image'/>
        </div>
        <div className="name" style={{color:"black"}}>{name}</div>
        <div className="job-title">{jobTitle}</div>
        <div className="stars">
          {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
        </div>
        <p className="testimonial-text">{text}</p>
      </div>
      <div className="testimonial-nav">
        <button className="nav-button" onClick={handlePrev}>
          {'←'}
        </button>
        <button className="nav-button" onClick={handleNext}>
          {'→'}
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
