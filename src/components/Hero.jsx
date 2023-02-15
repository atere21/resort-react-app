import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' alt='/' src='https://images.unsplash.com/photo-1589007758669-c58f38192d28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'/>
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
    
    <div className='absolute top-0 left-0 w-full h-screen '>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>ALL INCLUSIVE</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea iste aliquid 
                et placeat veniam nam nesciunt dolorum similique tempore.
            </p>
            <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero