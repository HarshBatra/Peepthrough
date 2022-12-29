import React from 'react';

function RetailComp() {
  return (
    <>
    <div className='py-20 my-16' style={{'background': 'radial-gradient(rgba(19, 168, 158, 0.5) 0%, rgba(19, 168, 158, 0.25) 0.01%, rgba(19, 168, 158, 0) 100%)',}}>
        <div className='container mx-auto'>
          {/* <h1 className='text-center mb-16'><span className='text-4xl text-primary-blue font-black tracking-wider retailHeading'>Retail Shopping </span> <span className='text-4xl text-black tracking-wide'> made easy</span></h1> */}
          <h1 className='text-center mb-16'><span className='text-4xl text-primary-blue font-bold tracking-wider'>Retail Shopping </span> <span className='text-4xl text-black tracking-wide'> made easy</span></h1>
          <div className='flex justify-between'>
            <div className='h-auto w-80 relative flex flex-col justify-center items-center'>
              <img src="./Assets/Images/data-searching.png"  width="200" height="200" className='max-h-full max-w-full'/>
              <h1 className='max-w-full h-auto break-words text-center mt-4 text-xl font-medium tracking-widest'><span className='text-primary-blue text-2xl font-extrabold tracking-widest'>Explore</span> our market database & plan in advance your shopping schedule.</h1>
            </div>
            <div className='h-auto w-80 relative flex flex-col justify-center items-center'>
              <img src="./Assets/Images/location.png"  width="200" height="200" className='max-h-full max-w-full'/>
              <h1 className='max-w-full h-auto break-words text-center mt-4 text-xl font-medium tracking-widest'><span className='text-primary-blue text-2xl font-extrabold tracking-widest'>Search</span> the product you need, before you begin your shopping streak.</h1>
            </div>
            <div className='h-auto w-80 relative flex flex-col justify-center items-center'>
              <img src="./Assets/Images/sale.png"  width="200" height="200" className='max-h-full max-w-full'/>
              <h1 className='max-w-full h-auto break-words text-center mt-4 text-xl font-medium leading-7 tracking-widest'><span className='text-primary-blue text-2xl font-extrabold leading-9	tracking-widest'>Learn</span> about sales & discounts being offered before you step out.</h1>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default RetailComp;