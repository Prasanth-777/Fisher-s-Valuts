import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutPage from './Components/AboutPage'
import ProductsShowcase from './Components/Product'
import BulkOrders from './Components/BulkOrders'
import EventsCatering from './Components/Events'
import Contact from './Components/Contact'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutPage/> 
      <ProductsShowcase/>
      <BulkOrders/>
      <EventsCatering/>
      <Contact/>
    </div>
  )
}

export default App
