
// import Image from "next/image";
// import React from "react";
// import { ProductType } from "@/types/types";
// const getData = async ()=>{
//   const res = await fetch("http://localhost:3000/api/products",{
//     cache:"no-store"
//   })

//   if(!res.ok){
//     throw new Error("Failed!")
//   }

//   return res.json()
// }

// const Featured = async () => {
//   const featuredProducts: ProductType[] = await getData();

//   return (
//     <div className="w-screen overflow-x-scroll text-red-500">
//       {/* WRAPPER */}
//       <div className="w-max flex">
//         {/* SINGLE ITEM */}
//         {featuredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
//           >
//             {/* IMAGE CONTAINER */}
//             {item.img && (
//               <div className="relative flex-1 w-full hover:rotate-[45deg] transition-all duration-500 drop-shadow-lg">
//                 <Image src={item.img} alt="" fill className="object-contain" />
//               </div>
//             )}
//             {/* TEXT CONTAINER */}
//             <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
//               <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
//                 {item.title}
//               </h1>
//               <p className="p-4 2xl:p-8">{item.desc}</p>
//               <span className="text-xl font-bold">${item.price}</span>
//               <button className="bg-red-500 text-white p-2 rounded-md">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Featured;

import React from 'react'
import Image from 'next/image'
import * as burg from "/public/temporary/p2.png"
const Featured = () => {
  return (
    <div>
      <div>
        <div>

          <div>
            <h2>Order Now</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div>
            <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div> <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div> <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div> <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div> <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div> <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div> <div className='h-[20rem]    col-span-1 '>
              <Image src={burg} alt='' width={500} height={500}/>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
