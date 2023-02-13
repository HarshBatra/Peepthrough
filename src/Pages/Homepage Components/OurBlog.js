import React from "react";
import BlogsData from "../../constants/BlogsData";
import { useNavigate } from "react-router-dom";


function OurBlog() {
  var blogs = BlogsData.slice(0, 3);
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-20 my-16" id="blog">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-primary-blue text-center md:text-5xl text-4xl font-bold tracking-wider">
            Our Blog
          </h1>
          <span className="w-44 h-0.5 m-6 bg-gradient-to-r from-white to-white via-teal-500"></span>
        </div>
        <div className="flex md:justify-around items-center md:flex-row flex-col">
          {blogs.map((blog, index) => {
            return (
              <div className="w-80 mb-10 cursor-pointer" key={index} onClick={()=>navigate("/blog")}>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="w-80 h-64 overflow-hidden rounded-3xl"
                    style={{
                      filter: "drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    <img
                      src={blog.img}
                      width="314px"
                      height="262px"
                      className="rounded-3xl  min-h-full min-w-full"
                      alt=""
                    />
                  </div>
                  <div className="my-4 flex flex-col items-center">
                    <h1 className="text-primary-blue text-base tracking-widest">
                      {blog.topic}
                    </h1>
                    <span className="w-36 h-0.5 mt-2 primaryGradient"></span>
                  </div>
                </div>
                <div className="tracking-wider">
                  <h1 className="text-xs font-bold my-2">{blog.title}</h1>
                  <p className="text-xs md:font-medium font-normal leading-5">
                    {blog.content}
                  </p>
                  <span className="text-[10px] text-primary-blue font-normal">
                    {blog.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="px-6 py-2 text-primary-blue border-[1px] border-primary-blue text-xl font-medium  rounded-md hover:bg-primary-blue hover:text-white ease-in duration-300" onClick={()=>navigate("/all-blogs")}>
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default OurBlog;
