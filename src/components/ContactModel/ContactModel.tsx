import React from 'react';
import './ContactModel.css';
import Lottie, { LottieProps, LottieRefOptions, AnimationEventCallback } from 'react-lottie';
import Animation from '/public/Animation - 1709637307866.json';


const defaultOptions: LottieProps['options'] = {
  loop: true,
  autoplay: true,
  animationData: Animation as any, // Cast animation data to any
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const ContactModel: React.FC = () => {
  const lottieRef = React.useRef<LottieRefOptions>(null);

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
}

export default ContactModel;
