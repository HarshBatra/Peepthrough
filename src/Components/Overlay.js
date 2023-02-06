import React, {useState, useEffect} from 'react';

function Overlay({component}) {

    return (
        <div className='fixed w-screen h-screen left-0 top-0 flex justify-center items-center z-[100] bg-[#00000080]'>
            <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[102]'>{component}</div>
        </div>
    );
}

export default Overlay;