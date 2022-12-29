import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import PeopleReviewsData from "../../constants/PeopleReviewsData";



function BlogSlideShow() {
    
    var slides = PeopleReviewsData;
    return (
      <>
        <div className="my-16 py-16" 
            style={{
                'background': 'radial-gradient(rgba(19, 168, 158, 0.5) 0%, rgba(19, 168, 158, 0.25) 0.01%, rgba(19, 168, 158, 0) 100%)',
            }}
        >
            <div className='flex flex-col justify-center items-center mb-6'>
                <h1 className='text-primary-blue text-center text-[40px]	font-normal tracking-wider'><span className="font-bold">People</span> Talking About Us</h1>
                <span className='w-44 h-0.5 radialEffectBg mt-6' style={{'background': 'radial-gradient(#13A89E 0%, rgba(19, 168, 158, 0) 100%)',}}></span>
            </div>
            <Swiper
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                slidesPerView={2}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                effect={"coverflow"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {slides.map((val)=>{
                    return (
                    <SwiperSlide key={val.key}>
                        <div className="flex w-full py-16 px-16 tracking-wider" >
                            <div className="h-52 w-52 shrink-0 min-w-52 min-h-52 overflow-hidden bg-black rounded-full flex justify-center items-center relative">
                                <img src={val.img} className="w-52  rounded-full"  />
                                {/* <span className="absolute w-fit h-fit text-[200px] text-primary-blue bottom-0 left-0 bg-black">,,</span> */}
                            </div>
                            <div className="flex flex-col ml-4 justify-center">
                                <p className="text-xs font-normal mb-4">{val.description}</p>
                                <div className="flex">
                                    <h1 className="text-xs font-semibold basis-1/2">{val.name}</h1>
                                    <p className="text-xs basis-1/2 text-[#6B728E] font-normal">{val.position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    );
                })
                }
            </Swiper>
        </div>
      </>
    );
}

export default BlogSlideShow;