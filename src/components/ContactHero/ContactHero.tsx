import React from 'react';
import './ContactHero.css';

const ContactHero: React.FC = () => {
  const services: string[] = [
    "Website",
    "iOS", 
    "Android",
    "UI/UX Design",
    "SEO",
    "E-commerce",
  ];

  const handleButtonClick = () => {
    console.log("It is working");
  };

  return (
    <div className='container herocontact  my-[-200px]'>
      <div className="cta-content_hero">
      <p className='cta-line'>
  Let's collaborate and create something extraordinary together.   
</p>

        <p className='cta-title'>I am interested in:</p>
      </div>
      <div className="service-btns">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <button onClick={handleButtonClick} className='my-5 whitespace-nowrap'>{service}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHero;
