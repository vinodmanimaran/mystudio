import React from 'react'
import './ContactModel.css'
import Lottie from 'react-lottie';
import Animation from '/public/Animation - 1709637307866.json'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }

}

const ContactModel = () => {
  return (
    <div className='lottie-container'>
       <Lottie 
	    options={defaultOptions}
      isClickToPauseDisabled={true
      }
      eventListeners={[
        {
          eventName: 'click',
          callback: () => {}, // Empty callback to prevent click
        },

      ]}
      />
    </div>
  )
}

export default ContactModel
