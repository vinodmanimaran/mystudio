import React from 'react';
import './ContactModel.css';
import Lottie, { LottieOptions, EventListener, LottieRef } from 'react-lottie';
import Animation from '/public/Animation - 1709637307866.json';

const defaultOptions: LottieOptions = {
  loop: true,
  autoplay: true,
  animationData: Animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const ContactModel: React.FC = () => {
  const lottieRef = React.useRef<LottieRef>(null);

  const clickListener: EventListener = {
    eventName: 'click',
    callback: () => {} 
  };

  return (
    <div className='lottie-container'>
      <Lottie 
        options={defaultOptions}
        isClickToPauseDisabled={true}
        eventListeners={[clickListener]}
        ref={lottieRef}
      />
    </div>
  );
}

export default ContactModel;
