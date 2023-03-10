import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from "swiper";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CitiesData from "../../constants/CitiesData";

function CitySlideshow() {
  var cities = CitiesData;

  return (
    <>
      <div className="md:my-16 my-12 md:py-16 py-10 md:px-6" id="cities">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl text-primary-blue tracking-wide text-center ">
            <span className="font-bold">Featured</span> Cities
          </h1>
          <span className="w-44 h-0.5 m-6 md:mb-16 mb-10 bg-gradient-to-r from-white to-white via-teal-500"></span>
        </div>
        <Swiper
          navigation={{
            nextEl: ".nextButton",
            prevEl: ".prevButton",
          }}
          mousewheel={true}
          loop={true}
          keyboard={true}
          slidesPerView={"auto"}
          modules={[
            Navigation,
            Pagination,
            Mousewheel,
            Keyboard,
            EffectCoverflow,
          ]}
          effect={"coverflow"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 5,
          }}
          className="mySwiper"
        >
          {cities.map((city, index) => {
            return (
              <SwiperSlide
                key={index}
                className="sm:w-[375px] sm:h-[250px] md:w-[545px] md:h-[340px] w-[325px] h-[225px] p-2 bg-white mb-16"
                style={{
                  boxShadow: "10px 20px 30px rgba(0,0,0,0.25)",
                }}
              >
                <Link to="/mallsincity">
                  <div className="relative w-full h-full">
                    <img
                      src={city.img}
                      className="w-full h-full object-cover block"
                      alt="city"
                    />
                    <div className="absolute w-full md:h-[4.5rem] h-[3rem] bg-back-overlay bottom-0 left-0 flex justify-center items-center">
                      <span className="text-white md:text-4xl text-2xl font-normal">
                        {city.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center items-center">
          <span className="prevButton mr-28 cursor-pointer">
            <ArrowBack className="text-primary-blue " />
          </span>
          <span className="nextButton cursor-pointer">
            <ArrowForward className="text-primary-blue" />
          </span>
        </div>
      </div>
    </>
  );
}

export default CitySlideshow;
