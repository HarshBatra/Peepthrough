import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const logo = "./Assets/Images/logo.png";
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-[3.5rem] w-[100%] justify-center items-center">
        <h1 className="text-teal-500 md:text-6xl text-4xl font-bold tracking-wider">
          Contact Us
        </h1>
        <div className="mt-[1.3rem] w-[10rem] h-[.16rem] rounded-[45%] bg-gradient-to-r from-teal-50 via-teal-400 to-teal-50"></div>
      </div>
      <div className="flex md:flex-row flex-col pl-20 pr-20 pt-10 pb-36 w-screen justify-center items-center gap-20">
        <div className="flex flex-col gap-12 mt-8 ">
          <img className="logo h-8 w-[151px]" src={logo} alt="logo" />
          <div className="flex flex-col">
            <p className="text-teal-500 font-bold">Office Location</p>
            <p>New Delhi,Delhi</p>
            <p>India</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Contact Us</p>
            <p>
              Email:{" "}
              <span className="font-bold text-teal-500">
                support@domain.com
              </span>
            </p>
            <p>
              Phone: +91 <span className="text-2xl font-bold">99xxxxxxxx</span>
            </p>
          </div>
          <div className="flex flex-row gap-12 text-[1rem] font-bold">
            <FaTwitter className="text-teal-500" />
            <FaInstagram className="text-teal-500" />
            <FaFacebook className="text-teal-500" />
            <FaYoutube className="text-teal-500" />
          </div>
        </div>
        <div className="z-10 flex flex-col bg-gradient-to-br from-teal-100 via-teal-50 to-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)] rounded-[1.5rem] p-10 mt-2">
          <p className="text-sm font-semibold">
            If you have any questions about the <br /> site or need support,
            please fill out the <br /> form below, and we will respond to <br />{" "}
            your request as quickly as possible.
          </p>
          <form action="" className="text-[.8rem] font-semubold">
            <div className="flex flex-col mt-6 gap-[.4rem]">
              <input
                name="contactName"
                className="bg-white rounded-2xl h-8 pl-4 -mx-2 w-full"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="contactEmail flex flex-col mt-4 gap-[.4rem]">
              <input
                name="contactEmail"
                className="bg-white rounded-2xl h-8 pl-4 -mx-2 w-full"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col mt-4 gap-[.4rem]">
              <input
                name="contactPhone"
                className="bg-white rounded-2xl h-8 pl-4 -mx-2 w-full"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col mt-4 gap-[.4rem]">
              <input
                name="contactMessage"
                className="bg-white rounded-2xl h-8 pl-4 -mx-2 w-full"
                type="text"
                placeholder="Message"
              />
            </div>
            <div className="mt-10">
              <button className="flex justify-center items-center bg-teal-500 text-white px-4 w-72 h-8 ml-[-0.6rem] rounded-2xl">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
