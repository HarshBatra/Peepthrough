import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow } from "swiper";
import {ArrowBack, ArrowForward} from '@mui/icons-material';
import CitiesData from '../../constants/CitiesData';

function CitySlideshow() {
  var cities = CitiesData;

  return (
    <>
    <div className='my-16 py-16'>
        {/* <h1 className='text-center mb-16'><span className='text-4xl text-primary-blue font-black tracking-wider retailHeading'>Featured </span> <span className='text-4xl text-primary-blue tracking-wide font-bold'> Cities</span> */}
        {/* <span className='text-4xl text-primary-blue font-black tracking-wider retailHeading'>...</span></h1>  */}
        <h1 className='text-center mb-16'><span className='text-4xl text-primary-blue font-bold tracking-wider'>Featured </span> <span className='text-4xl text-primary-blue tracking-wide'> Cities</span>
        </h1> 
        <Swiper
            navigation={{
              nextEl: '.nextButton',
              prevEl: '.prevButton',
            }}
            mousewheel={true}
            loop={true}
            keyboard={true}
            slidesPerView={"auto"}
            modules={[Navigation, Pagination, Mousewheel, Keyboard,EffectCoverflow]}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:100,
                modifier:5
            }}
            className="mySwiper"
        >
          {cities.map((city, index)=>{
            return (
              <SwiperSlide key={index} className='w-[545px] h-[340px] p-2 bg-white mb-16' style={{
                "boxShadow":"10px 20px 30px rgba(0,0,0,0.25)"
              }}>
                <div className='relative w-full h-full'>
                    <img src={city.img} className='w-full h-full object-cover block' />
                    <div className='absolute w-full h-[4.5rem] bg-back-overlay bottom-0 left-0 flex justify-center items-center'>
                        <span className='text-white text-4xl font-normal'>{city.name}</span>
                    </div>
                </div>
              </SwiperSlide>
            );
          })
          } 
        </Swiper>
        <div className='flex justify-center items-center'>
            <span className='prevButton mr-28 cursor-pointer'><ArrowBack className='text-primary-blue ' /></span>
            <span className='nextButton cursor-pointer'><ArrowForward className='text-primary-blue' /></span>
        </div>
 
    </div>

     

    </>
  );
}

export default CitySlideshow;