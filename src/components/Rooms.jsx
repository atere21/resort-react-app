import React from 'react'

function Rooms() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4s'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed, fuga quam aliquid inventore nesciunt fugit ab maxime!</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 '>
            <img className='object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/'/>
            <img className=' row-span-2 object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='/'/>
            <img className='object-cover w-full h-full'
             src='https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='/'/>
        </div>
    </div>
  )
}

export default Rooms