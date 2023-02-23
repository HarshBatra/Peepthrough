import React, { useState } from 'react'
import { FaMapMarkerAlt, FaRegClock, FaMapMarked } from 'react-icons/fa';
import SidebarMall from '../Components/SidebarMall';
import CardOfTrendingBusiness from '../Components/CardOfTrendingBussiness';
import TrendingBusinessData from '../constants/TrendingBusinessData';
import ShopData from '../constants/ShopData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CardOfShop from "../Components/CardOfShop"
import DrawerForMallSidebar from '../Components/DrawerForMallSidebar';


const Mall = () =>
{
    var businesses = TrendingBusinessData;
    const [open, setOpen] = useState(false);
    var shops = ShopData;
    // var imgData = [
    //     './Assets/Images/shop_banner.jpg', './Assets/Images/shop_banner.jpg',
    // ];
    var imgData = [
        './Assets/Images/shop_banner_2_1.jpg', './Assets/Images/shop_banner_2_2.jpg',
    ];
    return (
        <div>
            <div>
                <div>
                    <Swiper
                        mousewheel={ true }
                        keyboard={ true }
                        slidesPerView={ "auto" }
                        spaceBetween={ 40 }
                        modules={ [ Autoplay, Navigation, Pagination, Mousewheel, Keyboard ] }
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        loop={true}
                    >

                        { imgData.map( ( img_src ) =>
                        {
                            return (
                                <SwiperSlide >
                                    <div className='w-screen h-80 bg-slate-300'>
                                        <img class='w-full h-full object-cover' src={ img_src } />
                                    </div>
                                </SwiperSlide>
                            )
                        } ) }

                    </Swiper>
                </div>
            </div>

            <div class='pl-5 md:hidden'>

                <div class='flex flex-col gap-y-2 md:text-lg text-base' >

                    <div className='flex justify-between items-center'>     
                        <div class='font-semibold text-2xl' > C Block Market </div>
                        <div className=""> <DrawerForMallSidebar setOpen={setOpen} /> </div>
                    </div>
                    <div class='flex flex-row gap-2 ' >
                        <div >
                            <FaMapMarkerAlt size={ 30 } />
                        </div>
                        <div> Block C, Sector 41, Noida, Uttar Pradesh 201301 </div>
                    </div>
                    <div class='flex flex-row gap-2' >
                        <div >
                            <FaRegClock size={ 30 } />
                        </div>
                        <div> Timings : 9.00 am - 11.00 pm
                            Open All Days
                        </div>
                    </div>
                    <div class='flex flex-row gap-2'>
                        <div> <FaMapMarked size={ 30 } /> </div>
                        <div> View Map </div>
                    </div>

                </div>
            </div>

            <div class='m-2 my-10 md:mx-20'>
                <div class='hidden md:flex flex-row justify-between items-center md:text-lg text-base' >
                    <div class='flex flex-col gap-3' >
                        <div class='font-bold text-3xl' > C Block Market </div>
                        <div class='flex flex-row gap-2 ' >
                            <div >
                                <FaMapMarkerAlt size={ 30 } />
                            </div>
                            <div> Block C, Sector 41, Noida, Uttar Pradesh 201301 </div>
                        </div>
                    </div>
                    <div class='flex flex-col gap-2'>
                        <div class='flex flex-row gap-2' >
                            <div >
                                <FaRegClock size={ 30 } />
                            </div>
                            <div> Timings : 9.00 am - 11.00 pm
                                Open All Days
                            </div>
                        </div>
                        <div class='flex flex-row gap-2'>
                            <div> <FaMapMarked size={ 30 } /> </div>
                            <div> View Map </div>
                        </div>
                    </div>
                </div>

                <div class='my-10 md:text-lg px-5 text-base' >
                    Home &gt; Noida &gt; C Block Market
                </div>

                <div class='flex flex-row md : gap-10' >
                    <div class='hidden md:block' >
                        <SidebarMall />
                    </div>
                    <div class='grid gap-10 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 w-full items-center justify-center' >
                        {shops.map((data,idx)=>{
                            return(
                                <div className='w-full flex justify-center'><CardOfShop data={data} /></div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Mall;