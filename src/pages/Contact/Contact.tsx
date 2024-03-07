import React from 'react';
import ContactHero from '../../components/ContactHero/ContactHero';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactModel from '../../components/ContactModel/ContactModel';
import './Contact.css';
import ErrorBoundary from '../Error';
import Map from '../Map';
import { ContactUsHeader } from '../../components/TypingFormTitle/TypingFormTitle';
import  MyInfoCard  from '../../components/Myinfo/Myinfo';

const Contact: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <div className='contact'>
          <div className="row">
            <div className="col">
              <ContactUsHeader />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <ContactHero />
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="cta-content ">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-gray-600 mb-4">Let's turn your ideas into reality. Fill out the form, and we'll get in touch with you shortly.</p>
                <p className="text-lg text-gray-600 mb-4">Have questions or need assistance? Check out our <a href="/faq" className="text-blue-500">FAQs</a> for more information.</p>
                <p className="text-lg text-gray-600">We're excited to work with you!</p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <ContactForm />
            </div>
          </div>

          <div className="row info">
            <div className="col-xxl col-xl col-lg col-md">
              <ContactModel />
            </div>
            <div className="col-xxl col-xl col-lg col-md">
              <MyInfoCard />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Map />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Contact;
