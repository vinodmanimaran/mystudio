import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ErrorBoundary from './pages/Error'
import Map from './pages/Map'


const App = () => {
  return (
    <div className='container'>
      <ErrorBoundary>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>
      <Footer/>
      </ErrorBoundary>
          </div>
  )
}

export default App