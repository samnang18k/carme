import React from 'react'
import {Routes , Route} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home'
import Car from './pages/Car'
import Service from '../src/pages/Service'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'


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
    </Routes>
    </>
  )
}

export default App
