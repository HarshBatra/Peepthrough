import React, {useState, useEffect} from 'react';
import CardOfShopkeeperLogin from '../Components/CardOfShopkeeperLogin';

function ShopkeeperLogin() {

    return (
        <div className='flex justify-center items-center h-screen'>
            <CardOfShopkeeperLogin />
            {/* <div className="ellipse1 absolute w-[893px] h-[893px] top-[-25rem] left-[-20rem] rounded-full bg-gradient-to-br from-teal-500 -z-10"></div> */}
        </div>
    );
}

export default ShopkeeperLogin;