import React from 'react';
import {CSSComponents} from "../../Components/CSSComponents"
import SearchIcon from '@mui/icons-material/Search';

function IntroComp() {
  return (
    <div className='md:ml-16 tracking-wider py-16 mx-2'>
      <div className='flex items-center'>
        <div className='flex flex-col md:w-[606px] w-auto md:text-start text-center'>
          <h1 className='md:text-[100px] font-bold text-[#393E46] text-[60px]'>WELCOME</h1>
          <h3 className='md:text-3xl text-2xl font-bold text-primary-blue mb-6'>TO A WHOLE NEW EXPERIENCE OF WINDOW SHOPPING</h3>
          <p className='md:text-base text-sm text-[#00000099] mb-6'>Why roam around for hours if you can window shop in the luxury of your home...</p>
          <p className='md:text-base text-sm text-[#00000099]'>Peepthrough brings to you famous markets in your city with Selected, Sorted & Categorized outlets, all finely picked to serve your shopping requirements !</p>
        </div>
         <div className='relative md:block hidden'>
          <img src="./Assets/Images/welcome.png" alt="" className="h-[587px] w-auto -z-10" />
          <div className="ellipse-2 absolute w-[700px] h-[700px] top-0 right-0 left-0 bottom-0 m-auto rounded-full -z-[400]" style={{background: "linear-gradient(147.22deg, #13A89E -31.1%, rgba(19, 168, 158, 0) 77.92%)"}}></div> 
        </div>
      </div>
      <div className='relative block mx-auto tracking-wider rounded-2xl md:w-2/3 w-full md:mt-auto mt-8' style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
        <input type="text" placeholder='Search by Name, City, or Category' className='border w-full rounded-2xl h-10 md:placeholder:text-xs placeholder:text-xs placeholder:tracking-wider pl-4 outline-none md:pr-[155px] pr-[90px]' />
        <button className={`${CSSComponents.roundButtonBlue} md:px-8 px-6 py-[4px] md:text-sm text-[12px] font-medium absolute right-2 
         top-1/2 -translate-y-1/2 tracking-wider`} style={{boxShadow: "0px 4px 4px 0px #00000040"}}>
          <SearchIcon/>
          <span className='hidden md:inline'>Search</span>
        </button>
      </div>
    </div>
  );
}

export default IntroComp;