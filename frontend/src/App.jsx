import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import './index.css'
import {Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
const App = () => {
  return (
    <>
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path='/' element ={<Home/>}></Route>
                <Route path='/cart' element ={<Cart/>}></Route>
                <Route path='/order' element ={<PlaceOrder/>}></Route>
            </Routes>
        </div>
        <Footer/>
    </>
    
  )
}

export default App