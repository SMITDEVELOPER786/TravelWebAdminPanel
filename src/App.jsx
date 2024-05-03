import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Signin  from './Components/Login'
import Dashbord from './Components/Dashbord'
import image from "./assets/onlyfor.png"
function App() {
  return (
    <>
      <div className='md:block hidden'>

        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/dashbord/*' element={<Dashbord />} />
        </Routes>
      </div>
      <div className='md:hidden block h-screen'>
        <img src={image} alt="image" className='h-screen' />
      </div>
    </>
  )
}

export default App