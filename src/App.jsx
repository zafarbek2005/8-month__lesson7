import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CreateProduct from './Components/Create/Create'
import ProductSingle from './Components/Single/ProductSingle'


const App = () => {
  return (
   <>  
     <ToastContainer/>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create' element={<CreateProduct/>}/>
    <Route path='/product/:id' element={<ProductSingle/>}/>



  </Routes>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default App