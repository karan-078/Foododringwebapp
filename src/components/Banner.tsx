'use client'
import * as story from "/public/temporary/our_story.jpg"

import *  as icon from "public/temporary/p3.png"
import Image from "next/image"
const Banner = () => {
  return (
    <>
    <div className="py-16">
          <div className="flex flex-col lg:flex-row relative items-center">
              <div className="">
                 <Image src={story} alt="" width={600} height={600} className="rounded-3xl"/>
              </div>
              <div  className="h-[20rem] lg:w-[50%]  lg:absolute  bg-[#ffffff] left-[40%] bottom-4 shadow-md z-10 rounded-3xl p-7 flex gap-2 flex-col">
                 
                  <span className="text-lg">OUR STORY</span>
                  <h4 className="text-3xl font-semibold">Pioneers of Pizzas with <br/><span className="text-[#f4781d]">2X Toppings</span></h4>
                  <p>Ever looked at Pizza Toppings and wondered, WHY SO LESS?
Well, we did. And we definitely wanted more! So, we immediately took it upon ourselves to fix it, and made the pizzas that we all deserve - PIZZAS LOADED WITH 2X TOPPINGS.
And thats how MOJO Pizza was born, to make sure that you Never Settle For Less.</p>
             </div>
        </div>
          

    </div>

      
      <div className="relative  lg:pt-56 ">
  
        
        <div className="lg:px-20 xl:px-40 h-80 bg-[#ffffff] lg:absolute top-0.5  w-full lg:max-w-[70rem] left-[6%] flex lg:shadow-md lg:rounded-2xl justify-between py-6 border-t-2 border-[#F47D38]">

        <div className=" flex flex-col  justify-center">
          <h1 className="font-semibold text-xl pb-4">Get start With MObile App</h1>
          <p className="text-sm ">Flat ₹200 OFF on first THREE orders<br/>
            Code: MOJOAPP | Download today!</p>
          
          
            <button className="py-2 px-4 border border-black/40  max-w-[16rem] rounded-2xl m-6 ml-0 bg-[#2d3142] text-[#ffffff] shadow-md">Download on App Store</button>
            <button className="py-2 px-4 border border-black/40  max-w-[16rem]   rounded-2xl m-6 ml-0"> Download on Play Store</button>
           </div>
    
        
        <div>
      <Image src={icon} alt="" width={400} height={400} className=""/>
        </div>
         
        </div>
        </div>
    </>
  )
}

export default Banner
