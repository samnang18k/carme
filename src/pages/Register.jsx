import { Eye, EyeOff, LoaderCircle, Mail } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [value , setValue] = useState ({
      fullName:"",
      email : "",
      password : "",
      confirmPassword : "",
    });
    const[showPassword , setShowPassword] = useState (false);
    const [loading ,setLoading] = useState (false);
    const  [error , setError] = useState ({});
    const [ confirmPassword , setConfirmPassword] = useState(false)



    const handleChange = (e) =>{
      const {name ,value } = e.target ;

      setValue ((prev) => ({...prev , [name] : value}))

      setError ((prev) => ({...prev , [name]: ""}))

    }

    const validate = () => {
      const newError = {};

      if(!value.fullName.trim())(
        newError.fullName = "Name require"
      )

      if (!value.email.trim()){
        newError.email = "Email is require";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)){
        newError.email = "Invalid email address"
      }

      if(!value.password){
        newError.password = "Password is required";
      } else if (value.password.length < 8) {
        newError.password = "Password must be 8 character"
      }

      
       if (
        value.confirmPassword  !== value.password
       ){
        newError.confirmPassword = "Password do not match";
       }
      setError(newError);
     return Object.keys(newError).length === 0;

    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validate()) return;

        try{
          setLoading(true);

          await new Promise((resolve) => setTimeout(resolve , 2000));
          alert("login successfully");
      }catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
      

};
  return (
    <div className='border-2 border-gray-300 w-120 flex flex-col items-center justify-center rounded-2xl py-10'>
      <div className='flex flex-col items-center gap-1 pb-9'>
        <span className='font-bold text-xl text-gray-800'>Login</span>
        <p className='text-gray-600'>Enter your email and password to login</p>
      </div>
      <form onSubmit={handleSubmit}>

        <div>
         <div>
            <label
            className={` ${
              error.fullName ? "text-red-500":"text-gray-800"
            }`}
             htmlFor="fullname">Full Name</label>
         </div>
         <div>
            <div className={`relative w-75 border-2  items-center justify-center px-3 py-2 rounded-sm ${
              error.fullName 
                       ? " border-red-500"
                       : "border-gray-400"
            }`}>
             <input 
                className={`outline-0 w-full pr-7 text-gray-800 `}
                type="text"
                name='fullName'
                value={value.fullName}
                onChange={handleChange} 
                placeholder='Full Name'/>
                
            </div>
            <p className={`text-red-500`}>
              {error.fullName}
            </p>
         </div>
        </div>

        <div>
         <div>
            <label
            className={` ${
              error.email ? "text-red-500":"text-gray-800"
            }`}
             htmlFor="email">Email</label>
         </div>
         <div>
            <div className={`relative w-75 border-2  items-center justify-center px-3 py-2 rounded-sm ${
              error.email 
                       ? " border-red-500"
                       : "border-gray-400"
            }`}>
             <input 
                className={`outline-0 w-full pr-7 text-gray-800 `}
                type="text"
                name='email'
                value={value.email}
                onChange={handleChange} 
                placeholder='Email'/>
             <Mail className='absolute right-3 top-2 text-gray-400'/>
            </div>
            <p className={`text-red-500`}>
              {error.email}
            </p>
         </div>
        </div>


        <div className='mt-2'>
         <div>
            <label
            className={`${
              error.password 
                   ? "text-red-500"
                   : "text-gray-800"
            }`}
             htmlFor="Password">Password</label>
         </div>

         <div>
            <div className={`relative w-75 border-2 items-center justify-center px-3 py-2 rounded-sm ${
              error.password
                          ? "border-red-500"
                          : "border-gray-400"
            }`}>
             <input 
                className={`outline-0 w-full pr-7 text-gray-800`}
                type={ showPassword  ? "text" : "password"}
                value={value.password}
                name='password'
                onChange={handleChange} 
                placeholder='Password'/>
             <button
             type='button'
             onClick = {() => setShowPassword(!showPassword)}
             className='absolute right-3 top-2 text-gray-400'
             >
              {
                showPassword ? <Eye /> : <EyeOff /> 
              }
             </button>
            </div>
            <p className={`text-red-500`}>
              {error.password}
            </p>
         </div>
        </div>


        <div className='mt-2'>
         <div>
            <label
            className={`${
              error.password 
                   ? "text-red-500"
                   : "text-gray-800"
            }`}
             htmlFor="Password">confirmPassword</label>
         </div>

         <div>
            <div className={`relative w-75 border-2 items-center justify-center px-3 py-2 rounded-sm ${
              error.password
                          ? "border-red-500"
                          : "border-gray-400"
            }`}>
             <input 
                className={`outline-0 w-full pr-7 text-gray-800`}
                type={ showPassword  ? "text" : "password"}
                value={value.confirmPassword}
                name='confirmPassword'
                onChange={handleChange} 
                placeholder='confirmPassword'/>
             <button
             type='button'
             onClick = {() => setShowPassword(!showPassword)}
             className='absolute right-3 top-2 text-gray-400'
             >
              {
                showPassword ? <Eye /> : <EyeOff /> 
              }
             </button>
            </div>
            <p className={`text-red-500`}>
              {error.confirmPassword}
            </p>
         </div>
        </div>

        <div className='flex justify-between py-3'>
            <div className='flex items-center gap-1'>
                <input type="checkbox" />
                <span className='text-gray-800'>Remember me</span>
            </div>
            <Link className='text-gray-800 hover:underline '> Forgot Password?</Link>
        </div>
        <button 
        type='submit'
        disabled={loading}
        className={`bg-blue-400 flex items-center justify-center gap-2 text-white w-80 py-2 rounded-sm cursor-pointer `}>
            {loading 
              ? (<> <LoaderCircle className='animate-spin'/> loading... </>)
              : ("login")
            }
        </button>
        <p className='divider'>or</p>
        <button type='button' className=' border-2  border-gray-400 flex items-center gap-2  text-gray-700 px-20 py-2 rounded-sm mb-3 cursor-pointer'>
            <img 
            className='w-7'
             src="/google.png" alt="" />
            Login with google
        </button>
        <span className='ml-6  text-gray-800'>
           Already Have an account? 
           <Link to="/login" className='text-gray-600 hover:underline decoration-gray-400 underline-offset-2'>
             Login
           </Link>
        </span>
      </form>
    </div>
  )
}

export default Register
