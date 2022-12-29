import React, {useState, useEffect} from 'react';
import { CSSComponents } from './CSSComponents';

function CardOfShopkeeperLogin() {

    return (
        <div className=''>
            <div className='w-100 px-14 py-16 rounded-[20px] ' style={{
                background: "linear-gradient(147.38deg, rgba(19, 168, 158, 0.28) 0%, rgba(19, 168, 158, 0) 100%)",
                boxShadow: "5px 5px 20px 2px #00000040"
             }}>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold'>Please enter your <span className='text-primary-blue'>Login</span> details</h1>
                    <div className='flex flex-col mt-8'>
                        <label className='font-medium text-xs ml-2 mb-2'>Username</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none' placeholder='eg. John Doe' />
                    </div>
                    <div className='flex flex-col mt-6'>
                        <label className='font-medium text-xs ml-2 mb-2'>Password</label>
                        <input className='font-medium text-xs p-3 rounded-full focus:outline-none' placeholder='eg. 123456' />
                    </div>
                    <button className={`${CSSComponents.roundButtonBlue} drop-shadow-[5px_5px_20px_rgba(0,0,0,0.25)] mt-9`}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default CardOfShopkeeperLogin;