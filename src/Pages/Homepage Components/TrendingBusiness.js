import React from "react";
import CardOfTrendingBusiness from "./CardOfTrendingBussiness";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import TrendingBusinessData from "../../constants/TrendingBusinessData";

function TrendingBusiness() {
  console.log("TB", TrendingBusinessData);
  var businesses = TrendingBusinessData;
  return (
    <div className="md:my-16 md:mx-14 mx-12 md:px-10 md:py-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-primary-blue tracking-wide text-center md:mb-2">
          <span className="font-bold">Trending</span> Business Places
        </h1>
        <span className="w-44 h-0.5 m-6 md:mb-10 mb-4 bg-gradient-to-r from-white to-white via-teal-500"></span>
      </div>
      <div>
        <Swiper
          mousewheel={true}
          keyboard={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {businesses.map((business) => {
            return (
              <SwiperSlide key={business.key} className="w-auto py-10 px-2">
                <CardOfTrendingBusiness business={business} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default TrendingBusiness;
