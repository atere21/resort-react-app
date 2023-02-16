import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://media.istockphoto.com/id/1209208392/photo/baked-lobster-with-applesauce-and-grilled-bbq-fruit-on-a-white-plate-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=wHoNGoi0TfbcviCRRw1ZGaDN5g30qWjpvgWO7kU-lJk=',
      title: 'Lobster',
    },
    {
      url: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Sushi',
    },
    {
      url: 'https://media.istockphoto.com/id/1390907605/photo/delicious-curry-shrimp-pasta.jpg?b=1&s=170667a&w=0&k=20&c=EYpdQTUA8otfJdZGKyyp6fipRIDVczXIhJo-Ay1tIPM=',
      title: 'Pasta',
    },
    {
      url: 'https://media.istockphoto.com/id/1297899281/photo/fried-salmon-steaks-fried-cauliflower-and-fried-edible-mushrooms-on-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=BTK1JzW4PAPNaHI4e9NGWWP0VsAIlvusVSan1oUnn8g=',
      title: 'Salmon',
    },
  ];
 
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () =>{
    const isFirstSlide = currentIndex ===0
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () =>{
    const isLastSlide = currentIndex ===slides.length -1
    const newIndex = isLastSlide ? 0: currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex)
  }
  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group object-contain'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
         
         {/* left-arrow */}

      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
     group-hover:bg-black/20 text-white cursor-pointer '>
      <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>

         {/* right-arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
       group-hover:bg-black/20 text-white cursor-pointer '>
      
       <BsChevronCompactRight onClick={nextSlide} size={30}/>
       </div>
    </div>
  );
};

export default ImageSlider;