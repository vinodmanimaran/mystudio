import React from 'react';
import './ContactHero.css';

const ContactHero: React.FC = () => {
  const services: string[] = [
    "Website Development",
    "Ios Development",
    "Android Development",
    "UI/UX Design",
    "SEO Optimization",
    "E-commerce Solutions",
  ];

  const handleButtonClick = () => {
    console.log("It is working");
  };

  return (
    <div className='container herocontact'>
      <div className="cta-content">
        <p className='cta-line'>Got something in mind? We'd love to help.</p>
        <p className='cta-title'>I am interested in:</p>
      </div>
      <div className="service-btns">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <button onClick={handleButtonClick} className='my-5'>{service}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHero;
