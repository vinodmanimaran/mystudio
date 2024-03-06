import React from 'react';
import './ContactModel.css';
import Lottie, { AnimationEventCallback, LottieRef } from 'react-lottie';
import Animation from '../../assets/Animation - 1709637307866.json'; 

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const ContactModel: React.FC = () => {
  const lottieRef = React.useRef<LottieRef>(null);

  const completeListener: AnimationEventCallback = {
    eventName: 'complete',
    callback: () => {} // Empty callback to prevent complete event
  };

  return (
    <div className='lottie-container'>
      <Lottie 
        options={defaultOptions}
        isClickToPauseDisabled={true}
        eventListeners={[completeListener]}
        lottieRef={lottieRef}
      />
    </div>
  );
};

export default ContactModel;
