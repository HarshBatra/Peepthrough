import React from 'react'

const SingleBlog = () =>
{
    const Images={
        banner : "./Assets/Images/BlogPage/SingleBlogBanner.png",
        User : "./Assets/Images/BlogPage/UserImg.png",
        Like : "./Assets/Images/BlogPage/LikeButton.png",
    }
    return (
        <div>
            <img src={ Images.banner } alt='banner' class='w-full h-96  shadow-[0_5px_70px_0px_rgba(0,0,0,0.25)]' />
            <div class='m-10 p-9 ' >
                <div class='text-lg text-center font-semibold text-[#13A89E] tracking-widest leading-6 '>
                    ROAD TRIP
                </div>

                <div class='font-normal text-xs text-center text-[#13A89E99] tracking-wide leading-4 '>
                    16 Dec 2022
                </div>

                <div class='font-semibold text-3xl text-center tracking-wider leading-5 my-2.5 ' >
                    Lorem Ipsum Topic
                </div>

                <div class='flex flex-row justify-between mx-8 px-6 items-center  ' >
                    <div class='flex items-center gap-x-2 ' >
                        <div> <img src={ Images.User } /></div>
                        <div class=' text-[#13A89E] leading-6  tracking-wider text-center text-base ' > Pradeep Vishawakarma </div>
                    </div>
                    <div class='flex  gap-x-1 items-center'>
                        <div class=''>
                            <img src={ Images.Like } alt="like button" />
                        </div>
                        <div class='  text-sm leading-8 font-normal text-center text-[#13A89E] align-text-top  ' >
                            12
                        </div>
                    </div>

                </div>
                <div class='mx-2 my-6 font-medium leading-8 text-sm tracking-wider  text-justify' >

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officia voluptatem perspiciatis, porro saepe ipsa quam excepturi similique iusto sint officiis. Quae corrupti, consectetur ex minus eveniet esse tempore odit.

                </div>

            </div>
        </div >
    )
}

export default SingleBlog