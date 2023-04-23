import React from 'react';
import './Services.css';

function Services() {
  return (
    <>
    <div className='ser'>
      <div className='head'>
      <h3>SERVICES WE DELIVER</h3>
      </div>
      <div className='para'>
        <p>
         Preparing for your success, we provide truly prominent IT solutions.
        </p>
      </div>

      <div className='container'>
        <div className='ek'>
          <h1>Web Designing</h1>
       <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p> 
        </div>
        <div className='two'>
        <h1>Web Application</h1>
            <p>We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.</p>
        </div>
        <div className='three'>
        <h1>Mobile App Development</h1>
            <p>We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.</p>
        </div>
      </div>


    </div>
      
    </>
  )
}

export default Services;
