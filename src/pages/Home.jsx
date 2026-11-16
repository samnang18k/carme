import React from 'react'
import car from '../assets/car1.png'
import { ArrowRight, Clock, MoveRight, Settings, Shield, Tag } from 'lucide-react'

const carItems = [
  {
    id: 1,
    img: "/toyota.png",
    title: "Toyota Camry",
    year: "2023",
    type: "Automatic",
    model: "Diesel",
    price: 42000,
  },
  {
    id: 2,
    img: "/bmw-m3.png",
    title: "BMW M3",
    year: "2024",
    type: "Automatic",
    model: "Petrol",
    price: 75000,
  },
  {
    id: 3,
    img: "/bmw-x5.png",
    title: "BMW X5",
    year: "2023",
    type: "Automatic",
    model: "Diesel",
    price: 68000,
  },
  {
    id: 4,
    img: "/porsche-911.png",
    title: "Porsche 911",
    year: "2024",
    type: "Automatic",
    model: "Petrol",
    price: 120000,
  },
];

const Home = () => {
  return (
    <div className='font-[inter]'>
      <div 
      style={{backgroundImage: `url(${car})`,}}
      className='h-150 relative bg-center bg-cover bg-no-repeat '>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full w-190 flex items-center justify-center text-white">
          <div className='flex flex-col gap-2'>
            <span className="font-bold text-lg text-blue-400">
              DRIVE YOUR DREAM
            </span>

            <h1 className="text-5xl font-bold ">
              Premium Car <br /> For Better Tomorrow
            </h1>

            <span className="block w-120 text-sm mt-2">
              Find the perfect car that matches your lifestyle, budget and
              journey. We bring you the best deals, top brands and a seamless
              buying experience.
            </span>
            <div className='flex gap-5'>
            <button className='bg-blue-400 text-white px-5 py-3 rounded-sm flex gap-3 text-sm font-medium items-center cursor-pointer group'>
              BOOK YOUR CAR  <MoveRight size={18} className='group-hover:translate-x-1  transition-all duration-400 '/>
            </button>
            <button className='border text-white px-5 py-3 rounded-sm flex gap-3 text-sm font-medium cursor-pointer items-center group'>
              EXPLORE CAR  <MoveRight size={18} className='group-hover:translate-x-1  transition-all duration-400 '/>
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className='w-full py-8 px-35 flex items-center justify-between'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <div className='flex bg-blue-200 w-20 h-20 items-center justify-center rounded-full text-blue-500'>
            <Shield size={40} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl'>Experience Team</h1>
            <p className='text-gray-500 text-wrap w-50 text-center '>skill professional with year of hand on experience</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <div className='flex bg-blue-200 w-20 h-20 items-center justify-center rounded-full text-blue-500'>
            <Settings size={40} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl'>Premium Materials</h1>
            <p className='text-gray-500 text-wrap w-50 text-center'>we are only top-grade material for building result.</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <div className='flex bg-blue-200 w-20 h-20 items-center justify-center rounded-full text-blue-500'>
            <Clock size={40} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl'>Fast & Republic</h1>
            <p className='text-gray-500 text-wrap w-50 text-center'>We value your time and complete project on schetdule</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <div className='flex bg-blue-200 w-20 h-20 items-center justify-center rounded-full text-blue-500'>
            <Tag size={40} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl'>Competitive Pricing</h1>
            <p className='text-gray-500 text-wrap w-50 text-center'>Quality service at fair and transparent rates. </p>
          </div>
        </div>
      </div>
      <div className='w-full py-4 dark:bg-gray-950'>
        <div>
          <div className='flex justify-between w-full  px-35 py-5 mb-3  '>
            <h1 className='text-2xl font-bold dark:text-white'>Popular Cars For You</h1>
            <button className='flex items-center gap-2 underline-offset-2  underline dark:text-white group cursor-pointer'>View all car <ArrowRight size={18} className='group-hover:translate-x-1 transition-all duration-300' /></button>
          </div>
          <div className=''>
            <div className=' flex w-full gap-5 justify-between px-35'>
              {carItems.map ((car) => (
                <div key={car.id} className="bg-white w-90 rounded-xl shadow-md shadow-gray-500 overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4 dark:bg-gray-900 ">
                    <h2 className="text-xl font-bold dark:text-white">{car.title}</h2>

                    <p className='text-gray-700 dark:text-white'>Year: <span className='text-gray-400 dark:text-gray-50'>{car.year}</span></p>
                    <p className='text-gray-700 dark:text-white'>Transmission: <span className='text-gray-400 dark:text-gray-50'>{car.type}</span></p>
                    <p className='text-gray-700 dark:text-white'>Fuel: <span className='text-gray-400 dark:text-gray-50'>{car.model}</span></p>

                    <div className='flex items-center justify-between'>
                      <h3 className="text-blue-600 font-bold mt-3 dark:text-blue-400">
                      ${car.price.toLocaleString()}
                     </h3>
                     <button className='flex  gap-1 mt-2 group cursor-pointer dark:text-white'>View detail <ArrowRight className='group-hover:translate-x-1 transition-all duration-300'/></button>
                    </div>
                  </div>
                </div>
              ) )}
            </div>
          </div>
        </div>
      </div>
      <section>
        <div 
        style={{backgroundImage: `url('/car.jpg')`,}}
        className='w-full h-90  bg-center bg-cover bg-no-repeat '
        >
          <div className='w-3/4 h-full flex flex-col  items-center justify-center  bg-gradient-to-r from-black/70 via-black/70 to-transparent'>
          <h1 className='text-white font-bold mr-140 text-3xl leading-normal text-start text-wrap w-1/4 '>
            Your Dream Car Is Just Away View Our Inventory.
          </h1 >
          <p className="mt-4 mr-100 text-gray-300 text-start w-2/5 text-sm md:text-base ">
            Explore our curated selection of luxury and performance vehicles, inspected and ready for the road.
          </p>
          <button className='btn mr-180 mt-4 w-35 rounded-sm bg-blue-400 border-0  text-white  shadow-none'>Browse Car</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
