import React, { useState } from 'react';
import ContactHero from '../../components/ContactHero/ContactHero';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactModel from '../../components/ContactModel/ContactModel';
import './Contact.css';
import ErrorBoundary from '../Error';

const Contact: React.FC = () => {
  return (
    <>
      <ErrorBoundary />
      <div className='contact'>
        <div className="row">
          <div className="col">
            <ContactHero />
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <ContactForm />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <ContactModel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
