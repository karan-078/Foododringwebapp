
// import Link from "next/link";
// import React from "react";



// const MenuPage = () => {
 
//   return (
//     <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
//       (
//       <Link
//         href={"/"}
//           //  href={`/menu/${category.slug}`}
//           // key={category.id}
//           className="w-full h-1/3 bg-cover p-8 md:h-1/2"
//           // style={{ backgroundImage: `url(${category.img})` }}
//         >
//         {/* <div className={`text-${category.color} w-1/2`}> */}
//         <div>
//           <h1 className="uppercase font-bold text-3xl"></h1>
//           <p className="text-sm my-8"></p>
//             {/* <p className="text-sm my-8">{category.desc}</p> */}
//             {/* <button
//               className={`hidden 2xl:block bg-${category.color} text-${
//                 category.color === "black" ? "white" : "red-500"
//               } py-2 px-4 rounded-md`}
//             >
//               Explore
//             </button> */}
//           </div>
//         </Link>
//       )
//     </div>
//   );
// };

// export default MenuPage;


import React from 'react'
import { MenuType } from '@/types/types'
import Link from "next/link";
//  get data form our categories Routs
const getData= async () => {
  const rest = await fetch("http://localhost:3000/api/categories", {
    cache:"no-store"
  })

  if (!rest.ok) {
    throw new  Error("Falid")
  }

  return rest.json();
}

const Menupage = async () => {
  

  const menu:MenuType = await getData()
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {
        menu.map((category) => (
          
          <Link href={`/menu/${category.slug}`}
            key={category.id}
            className="w-full h-1/3 bg-cover p-8 md:h-1/2"
            style={{backgroundImage:`url(${category.img})`}}
          >

<div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
          
          </Link>
        ))
      }
      
    </div>
  )
}

export default Menupage
