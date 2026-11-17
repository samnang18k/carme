import React, { useState } from 'react'
import logo from '../assets/logo.png'
import logodark from '../assets/logo-dark.png'
import { NavLink,Link } from 'react-router-dom';
import {Menu, Moon , Sun, X} from 'lucide-react'
import { useTheme } from "../Context/ThemeContext";

const NavItems = [
  {
    name: "Home",
    path: "/",
  },
   {
    name: "Car",
    path: "/car",
  },
  {
    name: "Service",
    path: "/service",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
   const [openMenu , setOpenMenu ] = useState(false);
   const { darkMode, toggleTheme } = useTheme();
 
  const linkStyle = ({isActive}) => `relative dark:text-white p-2 font-medium text-lg transition-all duration-300 ease-in-out border-b-2 ${
              isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600"}`;


  return (
    <nav className='flex items-center justify-between px-15 dark:bg-gray-950'>
      <div className='w-45 shrink-0'>
        <img src={darkMode ? logodark : logo} alt="" />
      </div>
      <ul className='hidden md:flex gap-10 '>
        {
          NavItems.map((item)=>(
            <NavLink 
            key={item.path}
            to={item.path}
            className={linkStyle}
            >
              {item.name}
            </NavLink>
          )) }
      </ul>
      <div className='hidden md:flex items-center justify-center gap-9 '>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200  dark:hover:bg-gray-700 transition-colors duration-300">                              
           {darkMode  
                    ? (<Sun size={22} className="text-yellow-400 hover:text-yellow-400" />)
                    :(<Moon size={22} className="text-gray-700 hover:text-white" />)}
        </button>
        <button className='btn rounded-sm w-23 shadow-none border-0 bg-blue-400 text-white'>
          <Link to='/login'>login</Link>
        </button>
      </div>
      <div className='md:hidden'>
        
        <button
        onClick = {() => setOpenMenu(!openMenu)}
         className='relative md:hidden dark:text-white'>
          {
            openMenu ?  <X/> : <Menu/>
          }
        </button>
        {openMenu && (
  <div className="md:hidden absolute z-99 right-5 w-full items-center dark:bg-gray-800 flex flex-col gap-4 p-5 bg-white shadow-lg">

    {NavItems.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        onClick={() => setOpenMenu(false)}
        className={linkStyle }
      >
        {item.name}
      </NavLink>
    ))}
  </div>
)}
      </div>

    </nav>
  )
}

export default Navbar
