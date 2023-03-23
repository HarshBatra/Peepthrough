import React from 'react'
import ShopData from '../constants/ShopData'
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt} from 'react-icons/fa';
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';


const Shop = () => {
    var shop=ShopData[0];
  return (
    <div className='flex w-screen flex-col align-middle items-center bg-teal-100'>
        <div className="head-img">
            <img className='w-screen h-60' alt="" src={'./Assets/Images/shop_banner.jpg'} />
        </div>
        <div className="content flex flex-col w-9/12 gap-8 mt-6 mb-12">
            <div className="shop-info flex flex-row justify-between p-8 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                <div className="info-l flex flex-col gap-5 text-teal-500 ">
                    <h1 className='text-black mb-3 font-bold text-2xl'>{shop.name}</h1>
                    <div className='flex flex-row gap-2 items-center'><FaMapMarkerAlt/><p>{shop.location}</p></div>
                    <div className='flex flex-row gap-2 items-center'><FaGlobe/><p>{shop.city}</p></div>
                    <div className='flex flex-row gap-2 items-center'><FaEnvelope/><p>{shop.email}</p></div>
                    <div className='flex flex-row gap-2 items-center'><FaPhone/><p>{shop.contact}</p></div>
                </div>
                <div className="info-r">
                    <div className="verify flex w-28 h-8 items-center justify-center rounded-2xl bg-teal-500 text-white">PT Verified</div>
                </div>
            </div>
            <div className="about-offers flex flex-row gap-4 h-4/6">
                <div className="about flex flex-col w-8/12 h-full gap-5 p-8 rounded-2xl text-teal-500 bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                    <h1 className='text-black mb-3 font-bold text-2xl'>About Business</h1>
                    <p>{shop.about}</p>
                </div>
                <div className="offers-timings flex flex-col w-4/12 gap-8">
                    <div className="offers flex flex-col h-2/6 p-8 rounded-2xl bg-teal-500 shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)] text-white gap-2">
                        <h1 className=' mb-3 font-bold text-2xl'>Offers</h1>
                        <p>lorem ipsum</p>
                    </div>
                    <div className="timings-ratings flex flex-col h-4/6 p-8 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                        <div className="timings flex flex-col">
                            <h1 className='text-black font-bold text-2xl mb-28'>Timings</h1>
                        </div>
                        <div className="ratings flex flex-col">
                            <h1 className='text-black font-bold text-2xl'>Ratings</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-vid flex flex-col h-64 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]"></div>
            <div className="maps flex flex-col h-64 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]"></div>
            <div className="list-gallery flex flex-row gap-8">
                <div className="prod-list flex flex-col p-8 h-4/6 w-6/12 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                    <h1 className='text-black mb-3 font-bold text-2xl'>Product List</h1>
                    <p className='text-teal-500'>{shop.productList}</p>
                </div>
                <div className="gallery flex flex-col p-8 h-4/6 w-6/12 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                    <h1 className='text-black mb-3 font-bold text-2xl'>Gallery</h1>
                </div>
            </div>
            <div className="reviews-contact flex flex-row gap-6">
                <div className="reviews flex flex-col w-8/12 p-8 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                    <h1 className='text-black font-bold text-2xl'>Reviews</h1>
                </div>
                <div className="contact-biz flex-col w-4/12 p-8 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                    <h1 className='text-black font-bold text-2xl'>Contact Business</h1>
                    <form action="" className="text-[.8rem]">
                        <div className="flex flex-col mt-6 gap-[.4rem]">
                        <p>Full Name</p>
                        <input
                            name=""
                            className=" bg-gray-50 rounded-2xl h-8 pl-4 -mx-2 w-full"
                            type="text"
                            placeholder="e.g. John Doe"
                        />
                        </div>
                        <div className="contactEmail flex flex-col mt-4 gap-[.4rem]">
                        <p>Email</p>
                        <input
                            name=""
                            className="bg-gray-50 rounded-2xl h-8 pl-4 -mx-2 w-full"
                            type="email"
                            placeholder="e.g. johndoe@email"
                        />
                        </div>
                        <div className="flex flex-col mt-4 gap-[.4rem]">
                        <p>Phone Number</p>
                        <input
                            name=""
                            className="bg-gray-50 rounded-2xl h-8 pl-4 -mx-2 w-full"
                            type="text"
                            placeholder="e.g. +91 97xxxxxxxx"
                        />
                        </div>
                        <div className="flex flex-col mt-4 gap-[.4rem]">
                        <p>Query</p>
                        <textarea
                            name=""
                            className="bg-gray-50 rounded-2xl h-20 pl-4 -mx-2 w-full"
                            type="text"
                            placeholder="e.g. query"
                        />
                        </div>
                        <div className="mt-10">
                        <button className="flex justify-center items-center bg-teal-500 text-white px-4 w-72 h-8 ml-[-0.6rem] rounded-2xl">
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="social flex flex-row p-4 gap-3 rounded-2xl bg-white shadow-[5px_5px_20px_2px_rgba(0,0,0,0.25)]">
                <p>Shop on:</p> <Instagram/><Facebook/><Pinterest/>
            </div>
        </div>
    </div>
  )
}

export default Shop