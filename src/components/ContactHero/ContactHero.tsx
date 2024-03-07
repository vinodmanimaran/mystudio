import React from 'react';
import './ContactHero.css';

const ContactHero: React.FC = () => {
  const services: string[] = [
    "Website Development",
    "iOS Development", 
    "Android Development",
    "UI/UX Design",
    "SEO Optimization",
    "E-commerce Solutions",
  ];

  const handleButtonClick = () => {
    console.log("It is working");
  };

  return (
    <div className='container herocontact  my-[-200px]'>
      <div className="cta-content_hero">
      <p className='cta-line'>Have a project in mind? Let's bring your ideas to life. Share your vision with us by filling out the details below.</p>
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
