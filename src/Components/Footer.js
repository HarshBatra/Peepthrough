import React from 'react';
import {FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
  const logo = "./Assets/Images/logo.png"  
  return (
    <div className='footer flex flex-row pl-20 pr-20 pt-10 pb-36 w-screen justify-between bg-gradient-to-r from-teal-50 via-teal-100 to-teal-50 relative -z-50'>
        <div className="f-item1 flex flex-col gap-12 mt-8 ">
            <img className='logo h-8 w-[151px]' src={logo} alt="logo"/>
            <div className="location flex flex-col">
                <p className='text-teal-500 font-bold'>Office Location</p>
                <p>New Delhi,Delhi</p>
                <p>India</p>
            </div>
            <div className="contact flex flex-col">
                <p className='font-bold'>Contact Us</p>
                <p>Email: <span className='font-bold text-teal-500'>support@domain.com</span></p>
                <p>Phone: +91 <span className='text-2xl font-bold'>99xxxxxxxx</span></p>
            </div>
            <div className="social flex flex-row gap-12 text-[1rem] font-bold">
                <FaTwitter className='text-teal-500'/>
                <FaInstagram className='text-teal-500'/>
                <FaFacebook className='text-teal-500'/>
                <FaYoutube className='text-teal-500'/>
            </div>
        </div>
        <div className="f-item2 z-10 flex flex-col bg-white shadow-[5px_5px_120px_-20px_rgba(0,0,0,0.2)] rounded-[1.5rem] p-10 mt-2">
            <p className='text-4xl font-bold'>Subscribe to Our</p>
            <p className='text-4xl font-bold text-teal-500'>Newsletter</p>
            <form action="" className='newsletter text-[.8rem] font-semubold'>                
                <div className='name flex flex-col mt-6 gap-[.4rem]'>
                    <p>Full Name</p>
                    <input name='fullname' className='bg-[rgba(217,217,217,0.2)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. John Doe' />
                </div>
                <div name='email' className='email flex flex-col mt-4 gap-[.4rem]'>
                    <p>Email</p>
                    <input className='bg-[rgba(217,217,217,0.2)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. johndoe32@gmail.com' />
                </div>
                <div name='phonenum' className='number flex flex-col mt-4 gap-[.4rem]'>
                    <p>Phone Number</p>
                    <input className='bg-[rgba(217,217,217,0.2)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. +91 79xxxxxxxx' />
                </div>
                <div className="subscribe mt-10">
                    <button className='flex justify-center items-center bg-transparent text-black font-bold px-4 border border-teal-500 w-72 h-8 ml-[-0.6rem] rounded-2xl hover:bg-teal-500 hover:text-white hover:fill-white'>
                        <div className="sub flex flex-row gap-1 ">
                            Subscribe <FaTelegramPlane className='text-teal-500 text-[1.3rem]'/>
                        </div>
                    </button>
                </div>
            </form>
        </div>
        <div className="f-item3 flex flex-col justify-between mt-3">
            <div className="about-login flex flex-col gap-8">
                <div className="about-links flex flex-row gap-16">
                    <div className="company flex flex-col gap-3 font-medium">
                        <p className='font-bold text-teal-500'>Company</p>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>FAQs</p>
                        <p>Contact</p>
                    </div>
                    <div className="support flex flex-col gap-3 font-medium">
                        <p className='font-bold text-teal-500'>Support</p>
                        <p>Get In Touch</p>
                        <p>Help Center</p>
                        <p>Live Chat</p>
                        <p>How it Works</p>
                    </div>
                </div>
                <div className="shopk">
                    <button className='flex justify-center items-center text-sm text-white bg-teal-500 rounded-2xl w-60 h-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-white hover:text-teal-500'>
                        Shopkeeper's Login
                    </button>
                </div>  
            </div>              
            <div className="rights mb-[-2rem]">
                <p className='text-teal-500 text-bold text-[13px]'>{new Date().getFullYear()} @ Peepthrough. All rights Reserved.</p>
            </div>        
        </div>
        <div className="ellipse1 absolute w-[250px] h-[250px] top-[10rem] left-[28rem] rounded-full bg-gradient-to-b from-teal-500 -z-10"></div>
        <div className="ellipse2 absolute w-[300px] h-[300px] top-[-12rem] left-[83rem] rounded-full bg-gradient-to-b from-teal-500 -z-10"></div>
        <div className="ellipse3 absolute w-[250px] h-[250px] top-[20rem] left-[-13rem] rounded-full bg-gradient-to-b from-black -z-10"></div>
        <div className="ellipse4 absolute w-[70px] h-[70px] bottom-[10rem] right-[-0.5rem] rounded-full bg-gradient-to-tl from-black -z-10"></div>
    </div>
  )
}

export default Footer