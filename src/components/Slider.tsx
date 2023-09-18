// "use client";
// import Image from "next/image";

// const data = [
//   {
//     id: 1,
//     title: "always fresh & always crispy & always hot",
//     image: "//slide1.png",
//   },
//   {
//     id: 2,
//     title: "we deliver your order wherever you are in NY",
//     image: "/slide2.png",
//   },
//   {
//     id: 3,
//     title: "the best pizza to share with your family",
//     image: "/slide3.jpg",
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () =>
//         setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
//       4000
//     );
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] lg:flex-row bg-fuchsia-50">
//       {/* Text Container */}
//       <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
//         <h1 className="text-5xl text-center uppercase p-4 md:text-6xl md:p-10 xl:text-7xl">
//           {data[currentSlide].title}
//         </h1>
//         <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
//       </div>
//       {/* Image Container */}
//       <div className="w-full flex-1 relative ">
//         <Image
//           src={data[currentSlide].image}
//           alt=""
//           fill
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;
'use client'



import { register } from "swiper/element/bundle";
register();

import React from 'react'
import Image from 'next/image'
 import { useState, useEffect,useRef  } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

//  slider data

register()
const data = [
  {
    id: 1,
    image:"/temporary/909.jpeg"
  },

  {
    id: 2,
    image:"/temporary/1084.jpeg"
  },

  {
    id: 3,
    image:"/temporary/1085.jpeg"
  },

  {
    id: 4,
    image:"/temporary/1330.jpeg"
  },

  {
    id: 5,
    image:"/temporary/1378.jpeg"
  },

]



const Slider = () => {

  const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  // const handlClick = () => {
  //   let prev = 0;
  //   let next = prev + 1;
  //   prev = next;
  //    setCurrentSlide(next)
  // }
  return (
    <div className='wrapper w-full   flex  items-center  justify-center verflow-hidden'>
      <div className='w-full   flex  items-center  justify-center overflow-x-hidden  relative overflow-hidden max-h-[28rem] h-28rem '>
      
        <Swiper
          className='w-full h-full'
          pagination={true}
          navigation={true}
     
    >
          <SwiperSlide className='w-full h-full'>
         
          <div className="w-full  h-full">

<Image src={data[currentSlide].image} alt="image" width={1480} height={100}  className='w-full h-full object-cover lg:w-[1280px] '/>
</div>
       
      </SwiperSlide>
          
    </Swiper>
  
        {/* <div>
          <button onClick={handlClick} >prev </button>
          <button  onClick={handlClick} > next</button>
        </div> */}
      </div>
    </div>
  )
}

export default Slider
