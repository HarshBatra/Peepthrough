import React, {useState, useEffect} from 'react';
import { CSSComponents } from './CSSComponents';
import CancelIcon from '@mui/icons-material/Cancel';

function CardOfUsersLogin({setOpen}) {
    const [isLog, setIsLog] = useState(true);
    return (
        <div className='relative'>
            <span className='flex absolute right-6 top-2 text-black cursor-pointer' onClick={()=>setOpen(false)}><CancelIcon /></span>
                {isLog ? (
                <div className='md:w-[25rem] px-14 py-16 rounded-[20px] bg-white text-black mx-4 w-90 max-[375px]:w-80' 
                style={{
                    boxShadow: "5px 5px 20px 2px #00000040"
                 }}>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold'>Please enter your <span className='text-primary-blue'>Login</span> details</h1>
                    <div className='flex flex-col mt-8'>
                        <label className='font-medium text-xs ml-2 mb-2'>Username</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none border' placeholder='eg. John Doe' />
                    </div>
                    <div className='flex flex-col mt-6'>
                        <label className='font-medium text-xs ml-2 mb-2'>Password</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none border' placeholder='eg. 123456' />
                    </div>
                    <button className={`${CSSComponents.roundButtonBlue} drop-shadow-[5px_5px_20px_rgba(0,0,0,0.25)] mt-9`}>Login</button>
                    <span className='text-sm mt-6 text-center'>Create an account?
                        <span className='font-semibold text-primary-blue cursor-pointer' onClick={()=>setIsLog(!isLog)}> Register</span>
                    </span>
                </div>
                </div>) :
                (
                <div className='md:w-[30rem] px-14 py-16 rounded-[20px] bg-white text-black mx-4 w-90 max-[375px]:w-80' 
                style={{
                    boxShadow: "5px 5px 20px 2px #00000040"
                 }}>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold'>Please enter your <span className='text-primary-blue'>Register</span> details</h1>
                    <div className='flex flex-col mt-8'>
                        <label className='font-medium text-xs ml-2 mb-2'>Name</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none border' placeholder='eg. Simon Helter' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='font-medium text-xs ml-2 mb-2'>Mobile</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none border' placeholder='eg. 987XXXXXXX' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='font-medium text-xs ml-2 mb-2'>Username</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none border' placeholder='eg. John Doe' />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='font-medium text-xs ml-2 mb-2'>Password</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none border' placeholder='eg. 123456' />
                    </div>
                    <button className={`${CSSComponents.roundButtonBlue} drop-shadow-[5px_5px_20px_rgba(0,0,0,0.25)] mt-9`}>Register</button>
                    <span className='text-sm mt-6 text-center'>Already has an account?
                        <span className='font-semibold text-primary-blue cursor-pointer' onClick={()=>setIsLog(!isLog)}> Login</span>
                    </span>
                </div>
                </div>)}
        </div>
    );
}

export default CardOfUsersLogin;