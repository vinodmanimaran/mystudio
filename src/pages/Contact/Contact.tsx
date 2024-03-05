import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactHero from '../../components/ContactHero/ContactHero'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactModel from '../../components/ContactModel/ContactModel'
// import ContactHeader from '../../components/HeaderContact/ContactHeader'
import './Contact.css'
import ErrorBoundary from '../Error'


// const Header = () => {
//   return (
//     <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-12 mt-[90px] sm:mt-[10px]">
//       <div className="container mx-auto px-4 content">
//         <h1 className="text-4xl md:text-6xl font-bold overflow-hidden">Contact Us</h1>
//         <p className="mt-4 text-lg md:text-xl">Have questions? We're here to help!</p>
//         <button className="mt-8 bg-white text-red-500 hover:bg-red-500 hover:text-red-600 py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out">Get in Touch</button>
//       </div>
//     </header>
//   );
// };



const Contact = () => {


 
  return (

<>
<Navbar/>
<ErrorBoundary/>
{/* <Header/> */}


<div className='contact'>
      
      <div className="row">
        <div className="col">
        <ContactHero/>
        </div>
      </div>


      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                   <ContactForm/>

        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <ContactModel/> 
        </div>
      </div>
</div>
</>
   
  )
}

export default Contact