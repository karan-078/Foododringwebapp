"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/pagination";
import {custmSlider} from "@/data"
import Image from "next/image";


custmSlider:[]
const Scroller = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    


  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === custmSlider.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);


    return (
      


    <div className="  pt-40 lg:pt-8">
            <div>
        <div>
          <div>
            <div className="text-3xl text-[#3a424a] font-semibold">Join our family of  <span className=" text-[#f4781d]">15L+ happy customers</span></div>
            <div>
              <div className="flex gap-4 py-12 ">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                                >{
                                        custmSlider?.map(slide =>(
                                            <SwiperSlide   key={slide.id} >
                                            <div className=" bg-[#ffffff] min-h-[22rem] max-h-[22rem]  ">
                                                    {<Image src={slide.img} alt="" width={500} height={500}  className="rounded-lg"/>}
                                                    
                                                    <p>{slide.des}</p>

                                                    <h2>{slide.title}</h2>
                                            </div>
                                           
                                          </SwiperSlide>
                                        ))
                                
                                    }
                                
                                 
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
