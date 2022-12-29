import React from 'react';
import CardOfTrendingBusiness from './CardOfTrendingBussiness';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import TrendingBusinessData from '../../constants/TrendingBusinessData';

function TrendingBusiness() {
    console.log("TB",TrendingBusinessData);
    var businesses = TrendingBusinessData;
  return (
    <div className='my-16 ml-[4.5rem]'>
        <h1 className='text-4xl text-primary-blue tracking-wide text-center mb-16'><span className='font-bold'>Trending</span> Business Places</h1>
        <div>
            <Swiper
                mousewheel={true}
                keyboard={true}
                slidesPerView={"auto"}
                spaceBetween={40}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {businesses.map((business)=>{
                    return (
                    <SwiperSlide key={business.key} className='w-fit py-10'>
                        <CardOfTrendingBusiness business={business} />
                    </SwiperSlide>
                    );
                })
                }
            </Swiper>
        </div>
    </div>
  );
}

export default TrendingBusiness;