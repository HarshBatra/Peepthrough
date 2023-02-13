import React from 'react'
import { FaMapMarkerAlt, FaRegClock, FaMapMarked } from 'react-icons/fa';
import SidebarMall from '../Components/SidebarMall';
import CardOfTrendingBusiness from '../Components/CardOfTrendingBussiness';
// import TrendingBusinessData 
import TrendingBusinessData from '../constants/TrendingBusinessData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { CSSComponents } from '../Components/CSSComponents';
import SearchIcon from '@mui/icons-material/Search';


const Shops = () =>
{
    var businesses = TrendingBusinessData;
    var imgData = [
        './Assets/Images/shop_banner.jpg', './Assets/Images/shop_banner.jpg'
    ];
    return (
        <div  >

{/* 
            <div>
                <input type="text" placeholder='Search by Name, City, or Category' className='border w-full rounded-2xl h-10 placeholder:text-xs placeholder:tracking-wider pl-4 outline-none pr-[155px]' />
            </div> */}

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
                        {/* { businesses.map( ( business ) =>
                        {
                            return (
                                <SwiperSlide key={ business.key } className="w-auto py-10 px-2">
                                    <CardOfTrendingBusiness business={ business } />
                                </SwiperSlide>
                            );
                        } ) } */}

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
                {/* <img class='w-screen' src='./Assets/Images/shop_banner.jpg' /> */ }
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
                    {/* <div>
                        <div> Good place for shopping </div>
                        <div class='flex flex-col gap-10 my-6' >
                            <div class='flex flex-row gap-10' >
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                            </div>
                            <div class='flex flex-row gap-10' >
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                            </div>
                            <div class='flex flex-row gap-10 ' >
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                                <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                            </div>
                        </div>
                    </div> */}

                    <div class='grid grid-cols-1 gap-10 md:grid-cols-3' >
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                        <div><CardOfTrendingBusiness business={ businesses[ 0 ] } />  </div>
                    </div>

                </div>

            </div>



        </div>


    )
}

export default Shops