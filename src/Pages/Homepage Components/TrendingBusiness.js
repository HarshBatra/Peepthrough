import React from "react";
import CardOfTrendingBusiness from "../../Components/CardOfTrendingBussiness";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import TrendingBusinessData from "../../constants/TrendingBusinessData";

function TrendingBusiness() {
  var businesses = TrendingBusinessData;
  return (
    <div className="md:my-16 max-[420px]:mx-10 max-[390px]:mx-6 mx-14 md:px-10 md:py-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-primary-blue tracking-wide text-center md:mb-2">
          <span className="font-bold">Trending</span> Market Places
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
              <SwiperSlide key={business.key} className="w-auto py-10 md:px-2 md:mr-[30px] mr-[15px]">
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
