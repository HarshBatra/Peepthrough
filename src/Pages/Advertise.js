import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
const Advertise = () =>
{
    return (
        <div className='h-screen flex justify-center items-center'>
            <div class='flex flex-col gap-6 p-10 rounded-3xl  bg-gradient-to-br from-[#13A89E47]  to-[#13A89E00]  items-center ' style={ {
                'box-shadow': '5px 5px 20px 2px rgba(0, 0, 0, 0.25)',
            } }  >
                <div className=' text-center '>
                    <span className=' text-2xl font-bold text-teal-500 tracking-wider  leading-10'  >Advertise</span>
                    <span className='text-2xl font-bold tracking-wider leading-10 '> with us </span>
                </div>
                <div class='flex flex-row gap-6 justify-center' >
                    <div>
                        <form action="" className='newsletter text-[.8rem] font-semibold'>
                            <div className='name flex flex-col mt-6 gap-[.4rem]'>
                                <p>Business Name</p>
                                <input name='fullname' className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. Company' />
                            </div>
                            <div name='contactname' className='name flex flex-col mt-4 gap-[.4rem]'>
                                <p>Contact Person</p>
                                <input className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. John Doe' />
                            </div>
                            <div name='phonenum' className='number flex flex-col mt-4 gap-[.4rem]'>
                                <p>Contact No.</p>
                                <input className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. +91 79xxxxxxxx' />
                            </div>
                            <div name='email' className='email flex flex-col mt-4 gap-[.4rem]'>
                                <p>Email</p>
                                <input className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. johndoe@gmail.com' />
                            </div>
    
                        </form>
                    </div>
                    <div>
                        <form action="" className='newsletter text-[.8rem] font-semibold'>
                            <div className='name flex flex-col mt-6 gap-[.4rem]'>
                                <p>City</p>
                                <input name='fullname' className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. Delhi' />
                            </div>
                            <div name='contactname' className='name flex flex-col mt-4 gap-[.4rem]'>
                                <p> Assign Market </p>
                                <input className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. Market ' />
                            </div>
                            <div name='phonenum' className='number flex flex-col mt-4 gap-[.4rem]'>
                                <p>Address </p>
                                <input className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. Address' />
                            </div>
                            <div name='email' className='email flex flex-col mt-4 gap-[.4rem]'>
                                <p>Pincode</p>
                                <input className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl w-72 h-8 ml-[-0.6rem]' type="text" placeholder='   eg. 123456' />
                            </div>
    
                        </form></div>
                    <div >
                        <form action="" className='newsletter text-[.8rem] font-semibold' >
                            <div className='name flex flex-col mt-6 gap-[.4rem]'>
                                <p> About Business </p>
                                <input className='bg-[rgba(255, 255, 255, 0.5)] rounded-2xl h-60   ml-[-0.6rem]' type="text" />
                            </div>
                        </form>
                    </div>
                </div>
    
                {/* <div> Submit </div> */ }
                <div className="shopk  ">
                    <button className='flex justify-center items-center text-sm text-white bg-teal-500 rounded-2xl w-60 h-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-white hover:text-teal-500'>
                        Submit
                    </button>
                </div>
            </div >
        </div>
    )
}

export default Advertise