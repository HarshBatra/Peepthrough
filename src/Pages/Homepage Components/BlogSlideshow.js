import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import PeopleReviewsData from "../../constants/PeopleReviewsData";

function BlogSlideShow() {
  var slides = PeopleReviewsData;
  return (
    <>
      <div
        className="my-16 py-16 md:px-28 px-8"
        style={{
          background:
            "radial-gradient(rgba(19, 168, 158, 0.5) 0%, rgba(19, 168, 158, 0.25) 0.01%, rgba(19, 168, 158, 0) 100%)",
        }}
        id="testimonials"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary-blue text-center md:text-4xl text-2xl font-normal tracking-wider">
            <span className="font-bold">People</span> Talking About Us
          </h1>
          <span className="w-44 h-0.5 m-6 bg-gradient-to-r from-transparent to-transparent via-teal-500"></span>
        </div>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          effect={"coverflow"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {slides.map((val) => {
            return (
              <SwiperSlide key={val.key}>
                <div className="flex flex-col md:flex-row w-full py-16 px-16 tracking-wider justify-center items-center">
                  <div className="h-40 w-40 mb-10 shrink-0 overflow-hidden rounded-full drop-shadow flex justify-center items-center relative">
                    <img src={val.img} className="rounded-[50%]" alt="" />
                  </div>
                  <div className="flex flex-col ml-4 justify-center">
                    <p className="text-xs md:font-normal basis-1/2 font-light text-justify mb-6">
                      {val.description}
                    </p>
                    <div className="flex justify-between">
                      <h1 className="text-xs font-semibold basis-1/2">
                        {val.name}
                      </h1>
                      <p className="text-xs text-gray-500 font-normal basis-1/2">
                        {val.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default BlogSlideShow;
