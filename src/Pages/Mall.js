import React from 'react'
import { FaMapMarkerAlt, FaRegClock, FaMapMarked } from 'react-icons/fa';
import SidebarMall from '../Components/SidebarMall';
import CardOfTrendingBusiness from '../Components/CardOfTrendingBussiness';
import TrendingBusinessData from '../constants/TrendingBusinessData';
import ShopData from '../constants/ShopData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CardOfShop from "../Components/CardOfShop"


const Mall = () =>
{
    var businesses = TrendingBusinessData;
    var shops = ShopData;
    var imgData = [
        './Assets/Images/shop_banner.jpg', './Assets/Images/shop_banner.jpg',
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
                        modules={ [ Navigation, Pagination, Mousewheel, Keyboard ] }
                        className="mySwiper"
                    >

                        { imgData.map( ( img_src ) =>
                        {
                            return (
                                <SwiperSlide >
                                    <img class='w-screen' src={ img_src } />
                                </SwiperSlide>
                            )
                        } ) }

                    </Swiper>
                </div>
            </div>

            <div class='m-2 px-5 md:hidden'>

                <div class='flex flex-col gap-y-2 ' >

                    <div class='font-semibold text-2xl' > C Block Market </div>
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

            <div class=' m-2 px-1 md: m-10 px-20 '>
                <div class='hidden  md:flex flex-row justify-between' >
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

                <div class='my-10 text-lg' >
                    Home &gt; Noida &gt; C Block Market
                </div>

                <div class='flex flex-row md : gap-10' >
                    <div class='flex  sm: hidden md:flex ' >
                        <SidebarMall />
                    </div>
                    <div class='grid grid-cols-1 gap-10 md:grid-cols-3' >
                        {/* <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div> */}
                        {shops.map((data,idx)=>{
                            return(
                                <div className=' h-fit'><CardOfShop data={data} /></div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Mall;