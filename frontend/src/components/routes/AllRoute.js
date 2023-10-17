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
import Login from '../LogIn_SigIn/Login'
import SignUp from '../LogIn_SigIn/SignUp'
import Product from '../ProductShow/Product'
import Order from '../AddToCart/Order'
import Sucess from '../Payment/Sucess'
import Cancel from '../Payment/Cancel'

const AllRoute = () => {
  return (
    <div>
      <Api>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/laptop/:brandname' element={<Laptop/>}/>
          <Route path='/Mobile/:brandname' element={<Mobile/>}/>
          <Route path='/tablet' element={<Tablet/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/Signup"} element={<SignUp/>}/>

          <Route path="/product/:id/:name" element={<Product/>} />
          <Route path="/order" element={<Order />} />


          {/* Payment Routes */}
          <Route path="/Sucess" element={<Sucess/>} />
          <Route path="/Cancel" element={<Cancel/>} />
        </Routes>
        <Footer/>
      </Api>
    </div>
  )
}

export default AllRoute
