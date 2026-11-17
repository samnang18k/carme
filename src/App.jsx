import React from 'react'
import {Routes , Route} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home'
import Car from './pages/Car'
import Service from '../src/pages/Service'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'

import AuthLayout from './Layout/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <>
    <Routes>
      <Route element={ <MainLayout /> }>
        <Route path='/'  element={<Home />}/>
        <Route path='/car'  element={<Car />}/>
        <Route path='/service'  element={<Service />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/contact'  element={<Contact />}/>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path='/login'  element={<Login />}/>
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
