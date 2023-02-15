import React from 'react'

const Plan =() =>{
  return (
    <div className='max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* left-side */}
         <div className='grid grid-cols-2 grid-rows-6 h-[200vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='/'/>
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='/'/>
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://media.istockphoto.com/id/1428676905/photo/family-going-to-hotel-room-with-luggage.jpg?b=1&s=170667a&w=0&k=20&c=4FCwHeJZ067ECYUQROTwfrBZ8Q2-106XAz1xv0D-3RY=' alt='/'/>
            
            <img className='row-span-3 object-cover w-full h-full p-2' src='https://media.istockphoto.com/id/1355624426/photo/woman-in-bikini-eating-fruits-and-relaxing-in-hotel-swimming-pool-all-inclusive-summer.jpg?s=612x612&w=0&k=20&c=C0AtNYhOHslXrFtZ14O_9Ek62uL4GAjHZjSyZaz58M0=' alt='/'/>
            <img className='row-span-2 object-cover w-full h-full p-2' src='https://media.istockphoto.com/id/1359985372/photo/3d-rendering-of-modern-house-in-luxurious-style-by-the-sea-or-ocean-on-sunset.jpg?b=1&s=170667a&w=0&k=20&c=CL2ZplDriiuoT4J-3ySBJ8oxYMk46NX0nsMpD9jniew=' alt='/'/>
            
         </div>
         {/* right-side */}
         <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold '>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur non quisquam.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque eveniet corporis quaerat quasi
                 quia sit necessitatibus et, id ad expedita minima odit illum! Vero maxime iste natus blanditiis quo.</p>
                 <div>
         <button className='border-black'>Learn More</button>
         <button>Book Trip</button>
        </div>
        </div>
    </div>
  )
}

export default Plan