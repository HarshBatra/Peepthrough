import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const logo = "./Assets/Images/logo.png";
  const navigate = useNavigate();
  return (
    <div className="flex overflow-clip md:flex-row flex-col md:px-20 pt-2 md:pt-10 pb-20 w-full md:justify-around justify-center self-center md:text-left text-center items-center md:items-start align-top relative bg-gradient-to-r from-teal-50 via-teal-100 to-teal-50">
      <div className="flex flex-col items-center md:items-start gap-12 mt-8 ">
        <img className="h-8 w-[151px]" src={logo} alt="logo" />
        <div className="flex flex-col">
          <p className="text-teal-500 font-bold">Office Location</p>
          <p>New Delhi, Delhi</p>
          <p>India</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Contact Us</p>
          <p>
            Email:{" "}
            <span className="font-bold text-teal-500">support@domain.com</span>
          </p>
          <p>
            Phone: +91 <span className="text-2xl font-bold">99xxxxxxxx</span>
          </p>
        </div>
        <div className="flex flex-row gap-12 text-[1rem] font-bold">
          <FaTwitter className="text-teal-500 transition grow cursor-pointer" />
          <FaInstagram className="text-teal-500 transition grow cursor-pointer" />
          <FaFacebook className="text-teal-500 transition grow cursor-pointer" />
          <FaYoutube className="text-teal-500 transition grow cursor-pointer" />
        </div>
      </div>
      <div className="z-[1] flex flex-col bg-white shadow-[5px_5px_120px_-20px_rgba(0,0,0,0.2)] rounded-[1.5rem] p-10 md:my-2 my-10">
        <p className="text-2xl md:text-4xl font-bold">Subscribe to Our</p>
        <p className="text-2xl md:text-4xl font-bold text-teal-500">
          Newsletter
        </p>
        <form action="" className="text-[.8rem] font-semubold">
          <div className="flex flex-col items-start mt-6 gap-[.4rem]">
            <p>Full Name</p>
            <input
              name="fullname"
              className="bg-[rgba(217,217,217,0.2)] rounded-2xl h-8 pl-4 -mx-2 w-full"
              type="text"
              placeholder="eg. John Doe"
            />
          </div>
          <div
            name="email"
            className="flex flex-col items-start mt-4 gap-[.4rem]"
          >
            <p>Email</p>
            <input
              className="bg-[rgba(217,217,217,0.2)] rounded-2xl h-8 pl-4 -mx-2 w-full"
              type="text"
              placeholder="eg. johndoe32@gmail.com"
            />
          </div>
          <div
            name="phonenum"
            className="flex flex-col items-start mt-4 gap-[.4rem]"
          >
            <p>Phone Number</p>
            <input
              className="bg-[rgba(217,217,217,0.2)] rounded-2xl h-8 pl-4 -mx-2 w-full"
              type="text"
              placeholder="eg. +91 79xxxxxxxx"
            />
          </div>
          <div className="mt-10">
            <button className="flex justify-center items-center bg-transparent text-black font-bold px-4 border border-teal-500 w-full h-8 -ml-2 rounded-2xl hover:bg-teal-500 hover:text-white hover:font-semibold tracking-widest">
              <div className="flex flex-row gap-1 ">
                SUBSCRIBE{" "}
                <FaTelegramPlane className="text-teal-500 text-lg hover:text-white" />
              </div>
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center mt-3">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-16 mt-6">
            <div className="flex flex-col gap-3 font-normal text-sm">
              <p className="font-bold text-teal-500">Company</p>
              <Link className="cursor-pointer hover:font-semibold" to="/about-us">About Us</Link>
              <Link className="cursor-pointer hover:font-semibold" to="/all-blogs">Blog</Link>
              <Link className="cursor-pointer hover:font-semibold" to="/faq">FAQs</Link>
              <Link className="cursor-pointer hover:font-semibold" to="/contact-us">Contact</Link>
            </div>
            <div className="flex flex-col gap-3 font-normal text-sm">
              <p className="font-bold text-teal-500">Support</p>
              <p className="cursor-pointer hover:font-semibold">Get In Touch</p>
              <p className="cursor-pointer hover:font-semibold">Help Center</p>
              <p className="cursor-pointer hover:font-semibold">Live Chat</p>
              <p className="cursor-pointer hover:font-semibold">How it Works</p>
            </div>
          </div>
          <div>
            <button className="flex justify-center items-center text-sm text-white bg-teal-500 rounded-2xl w-60 h-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-white hover:text-teal-500" onClick={()=>navigate("/shopkeeper-login")}>
              Shopkeeper's Login
            </button>
          </div>
        </div>
        <div className="md:mt-52 my-10">
          <p className="text-teal-500 text-bold text-[13px]">
            {new Date().getFullYear()} @ Peepthrough. All rights Reserved.
          </p>
        </div>
      </div>
      <div className="vert-move2 absolute w-[250px] h-[250px] top-[10rem] left-[28rem] rounded-full bg-gradient-to-b from-teal-500 "></div>
      <div className="vert-move1 absolute w-[300px] h-[300px] top-[-12rem] left-[83rem] rounded-full bg-gradient-to-b from-teal-500"></div>
      <div className="vert-move3 absolute w-[250px] h-[250px] top-[20rem] left-[-13rem] rounded-full bg-gradient-to-b from-teal-500"></div>
      <div className="vert-move absolute w-[70px] h-[70px] bottom-[10rem] right-[-0.5rem] rounded-full bg-gradient-to-tl from-black"></div>
    </div>
  );
};

export default Footer;
