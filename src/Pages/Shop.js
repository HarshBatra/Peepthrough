import React from 'react'
import ShopData from '../constants/ShopData'
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt} from 'react-icons/fa';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const Shop = () => {
    var shop=ShopData[0];
  return (
    <div className='flex w-screen flex-col align-middle items-center bg-teal-50 mt-7 mb-7 '>
        <div className="head-img">
            <img className='w-screen h-60' alt="" src={'./Assets/Images/shop_banner.jpg'} />
        </div>
        <div className="flex flex-col mt-5 w-9/12 gap-5  content">
            <div className="flex flex-row contact-card justify-between bg-white">
                <div className="card-left flex flex-col p-4 w-9/12 gap-2 ">
                    <div className="name flex font-bold text-2xl">{shop.name}</div>
                    <div className="phone flex gap-3 text-base items-center"><FaPhone/> {shop.contact}</div>
                    <div className="email flex gap-3 text-base items-center"><FaEnvelope/> {shop.email}</div>
                    <div className="address flex gap-3 text-base items-center"><FaMapMarkerAlt/> {shop.location}</div>
                    <div className="site flex gap-3 text-base items-center"><FaGlobe/> {shop.city}</div>
                </div>
                <div className="card-right flex flex-col">
                    
                </div>
            </div>        
            <div className="main-content flex flex-row gap-10 mb-4">
                <div className="left-content flex flex-col w-9/12 gap-5">
                    <div className="about flex flex-col p-4 gap-5 bg-white">
                        <h2 className='font-bold text-2xl'>ABOUT THE BUSINESS</h2>
                        <div className='text-base'>{shop.about}</div>
                    </div>
                    <div className="social flex flex-row p-4 gap-3 font-semibold text-base bg-white">
                        <p>Shop on</p><Facebook className='cursor-pointer'/><Instagram className='cursor-pointer'/><Twitter className='cursor-pointer'/>
                    </div>
                    <div className="gallery flex flex-col p-4 gap-5 bg-white">
                        <h2 className='font-bold text-2xl'>GALLERY</h2>
                        <div className="gal-imgs flex flex-row">
                            
                        </div>
                    </div>
                    <div className="product-list flex flex-col p-4 gap-5 bg-white">
                        <h2 className='font-bold text-2xl'>PRODUCT LIST</h2>
                        <div className="list">{shop.productList}</div>
                    </div>
                    <div className="review flex flex-col p-4 gap-5 bg-white">
                        <h2 className='font-bold text-2xl'>REVIEWS</h2>
                        <p>{shop.reviews}</p>
                    </div>
                </div>
                <div className="right-content flex flex-col gap-5">
                    <div className='timings flex flex-col p-4 gap-5 bg-white'> 
                        <h2 className='font-bold text-2xl'>TIMINGS</h2>
                        <p>9.00 am - 11.00 pm <br />
                            Open All Days</p>
                    </div>
                    <div className="rating flex flex-col p-4 gap-5 bg-white">
                        <h2 className='font-bold text-2xl'>RATING</h2>
                    </div>
                    <div className="map flex flex-col p-4 gap-5 bg-white">
                        <h2 className='font-bold text-2xl'>MAP</h2>
                    </div>
                    <div className="contact-biz flex flex-col p-4 gap-5 bg-white">
                        <h2  className='font-bold text-2xl'>CONTACT BUSINESS</h2>
                        <form action="" className='biz-contact flex flex-col gap-4 items-center justify-center'>
                            <input className='bg-[rgba(217,217,217,0.2)] rounded-2xl h-8 pl-4 -mx-2 w-56' type="text" name='' placeholder='Name' />
                            <input className='bg-[rgba(217,217,217,0.2)] rounded-2xl h-8 pl-4 -mx-2 w-56' type="text" name='' placeholder='Email' />
                            <input className='bg-[rgba(217,217,217,0.2)] rounded-2xl h-8 pl-4 -mx-2 w-56' type="text" name='' placeholder='Phone' />
                            <textarea className='bg-[rgba(217,217,217,0.2)] rounded-2xl h-20 pl-4 -mx-2 w-56' name='' placeholder='Query' />
                            <button className="flex justify-center items-center bg-teal-500 text-white px-4 w-52 h-8 ml-[-0.6rem] rounded-2xl">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop