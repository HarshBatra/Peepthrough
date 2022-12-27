import React from 'react';
import BlogsData from '../../constants/BlogsData';

function OurBlog() {
  var blogs = BlogsData;
  return (
    <>
        <div className='container mx-auto my-16'>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className='text-primary-blue text-center text-6xl	font-bold tracking-wider'>Our Blog</h1>
                <span className='w-44 h-0.5 radialEffectBg mt-6 primaryGradient'></span>
            </div>
            <div className='flex justify-between items-center'>
                {blogs.map((blog, index)=>{
                    return (
                        <div className='w-80' key={index}>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='w-80 h-64 overflow-hidden rounded-3xl'
                                style={{
                                    "filter": "drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.25))"
                                }}
                                >
                                    <img src={blog.img} width="314px" height="262px" className='rounded-3xl  min-h-full min-w-full' />
                                </div>
                                <div className='my-4 flex flex-col items-center'>
                                    <h1 className='text-primary-blue text-base tracking-widest'>{blog.topic}</h1>
                                    <span className='w-36 h-0.5 mt-2 primaryGradient'></span>
                                </div>
                            </div>
                            <div className='tracking-wider'>
                                <h1 className='text-xs font-bold my-2'>{blog.title}</h1>
                                <p className='text-xs font-medium leading-5'>{blog.content}</p>
                                <span className='text-[10px] text-primary-blue font-normal'>{blog.date}</span>
                            </div>
                        </div>
                      );
                    })
                }
            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='px-6 py-2 text-primary-blue border-[1px] border-primary-blue text-xl font-medium  rounded-md hover:bg-primary-blue hover:text-white ease-in duration-300'>View More</button>
            </div>
        </div>
    </>
  );
}

export default OurBlog;