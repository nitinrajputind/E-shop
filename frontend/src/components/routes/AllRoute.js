import React from 'react'
import Api from '../Context/Api'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Laptop from '../pages/Laptop'
import Mobile from '../pages/Mobile'
import Tablet from '../pages/Tablet'
import Accessories from '../pages/Accessories'
import Navbar from '../header/Navbar'
import Footer from '../Footer/Footer'

const AllRoute = () => {
  return (
    <div>
      <Api>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/laptop/:brandname' element={<Laptop/>}/>
          <Route path='/Mobile' element={<Mobile/>}/>
          <Route path='/tablet' element={<Tablet/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
        </Routes>
        <Footer/>
      </Api>
    </div>
  )
}

export default AllRoute
