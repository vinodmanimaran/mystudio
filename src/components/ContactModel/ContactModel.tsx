import React from 'react';
import './ContactModel.css';
import Lottie from 'react-lottie';
import Animation from '../../assets/Animation - 1709637307866.json';

const ContactModel: React.FC = () => {
  const handleComplete = (): void => {
    console.log('Animation completed');
  };

  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='lottie-container'>
      <Lottie 
        options={defaultOptions}
        isClickToPauseDisabled={true}
        eventListeners={[
          {
            eventName: 'complete',
            callback: handleComplete
          }
        ]}
      />
    </div>
  );
};

export default ContactModel;
