import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>

      </Routes>

      <Footer/>
    </div>
  )
}

export default App