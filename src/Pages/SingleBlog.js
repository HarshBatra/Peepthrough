import React from "react";

const SingleBlog = () => {
  const Images = {
    banner: "./Assets/Images/BlogPage/SingleBlogBanner_3.jpg",
    User: "./Assets/Images/BlogPage/UserImg.png",
    Like: "./Assets/Images/BlogPage/LikeButton.png",
  };
  return (
    <div>
      <div className="w-full md:h-[50vh] h-[40vh] mb-10">
        <img
          src={Images.banner}
          alt="banner"
          class="w-full h-full object-cover drop-shadow-2xl mb-10 md:rounded-[30px] rounded-[20px]"
        />
      </div>
      <div class="md:mx-20 mb-20 md:px-20 mx-6">
        <div class="text-lg text-center font-semibold mt-4 text-[#13A89E] tracking-widest leading-6 ">
          ROAD TRIP
        </div>

        <div class="font-normal text-xs text-center text-[#13A89E99] tracking-wide leading-4 ">
          16 Dec 2022
        </div>

        <div class="font-semibold md:text-3xl text-xl text-center tracking-wider leading-5 mt-6">
          Lorem Ipsum Topic 
        </div>

        <div class="flex flex-row justify-between md:mx-10 mt-6 px-6 items-center  ">
          <div class="flex items-center gap-x-2">
            <div>
              {" "}
              <img src={Images.User} alt="" />
            </div>
            <div class=" text-[#13A89E] leading-6 tracking-wider text-center md:text-base text-sm">
              {" "}
              Pradeep Vishawakarma{" "}
            </div>
          </div>
          <div class="flex gap-x-1 items-center">
            <div class="">
              <img src={Images.Like} alt="like button" />
            </div>
            <div class="text-sm leading-8 font-normal text-center text-[#13A89E] align-text-top  ">
              12
            </div>
          </div>
        </div>
        <div class="mx-2 mt-10 md:font-medium font-light md:leading-8 leading-6 md:text-sm text-xs md:tracking-wider tracking-wide text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          officia voluptatem perspiciatis, porro saepe ipsa quam excepturi
          similique iusto sint officiis. Quae corrupti, consectetur ex minus
          eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Molestias, officia voluptatem perspiciatis, porro
          saepe ipsa quam excepturi similique iusto sint officiis. Quae
          corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Molestias, officia
          voluptatem perspiciatis, porro saepe ipsa quam excepturi similique
          iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse
          tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam
          excepturi similique iusto sint officiis. Quae corrupti, consectetur ex
          minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Molestias, officia voluptatem
          perspiciatis, porro saepe ipsa quam excepturi similique iusto sint
          officiis. Quae corrupti, consectetur ex minus eveniet esse tempore
          odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam
          excepturi similique iusto sint officiis. Quae corrupti, consectetur ex
          minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Molestias, officia voluptatem
          perspiciatis, porro saepe ipsa quam excepturi similique iusto sint
          officiis. Quae corrupti, consectetur ex minus eveniet esse tempore
          odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam
          excepturi similique iusto sint officiis. Quae corrupti, consectetur ex
          minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Molestias, officia voluptatem
          perspiciatis, porro saepe ipsa quam excepturi similique iusto sint
          officiis. Quae corrupti, consectetur ex minus eveniet esse tempore
          odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam
          excepturi similique iusto sint officiis. Quae corrupti, consectetur ex
          minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Molestias, officia voluptatem
          perspiciatis, porro saepe ipsa quam excepturi similique iusto sint
          officiis. Quae corrupti, consectetur ex minus eveniet esse tempore
          odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam
          excepturi similique iusto sint officiis. Quae corrupti, consectetur ex
          minus eveniet esse tempore odit.
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
