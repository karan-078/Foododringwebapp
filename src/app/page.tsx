'use client'
import Featured from "@/components/Featured"
import Slider from "@/components/Slider"
import Offer from "@/components/Offer"
import Brand from "@/components/Brand"
import Scroller from "@/components/Scroller"
import Banner from "@/components/Banner"


export default function Home() {

  
    

  return (
    <main className=" md:px-[2rem] lg:px-[8rem]">
      <Slider />
      <Brand/>
      <Featured />
      <Scroller/>
      <Offer />
      <Banner/>
    </main>
  )
    
 

}
