import React from 'react';
import CategoriesData from '../../constants/CategoriesData';

function CategoriesComp() {
  var bg_icon_shadow = {"boxShadow": "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"};
  var class_of_icons = 'h-32 w-32 rounded-full mx-auto flex justify-center items-center realtive';
  var categories = CategoriesData;
  return (
    <>
    <div className='container mx-auto my-16'>
        <div className='flex flex-col justify-center items-center pb-10'> 
          <h1 className='text-center text-3xl categories-class relative tracking-widest'>Browse Bussinesses by <span className='text-primary-blue font-bold'>Category</span></h1>
          <span className='w-44 h-0.5 mt-4' style={{'background': 'radial-gradient(#13A89E 0%, rgba(19, 168, 158, 0) 100%)',}}></span>
        </div>
        <div className='flex flex-wrap space-x-10 space-y-4 justify-between items-middle'>
            <div className='mt-4 ml-10 flex-col items-center px-4'>
                <div className='h-32 w-32 rounded-full mx-auto flex justify-center items-center realtive' style={bg_icon_shadow}>
                <img src="./Assets/Images/Icons/Clothes.png" height="100px" width="100px" className='rounded-full max-h-full max-w-full' />
                </div>
                <h1 className='text-center mt-4 w-32 break-words text-primary-blue'>Clothing & Footwear</h1>
            </div>

            {categories.map((val, index)=>{
                return (      
                    <div className='flex-col justify-center items-center px-4' key={val.key}>
                        <div className={class_of_icons} style={bg_icon_shadow}>
                          <img src={val.icon} height="100px" width="100px" className='rounded-full max-h-full max-w-full' />
                        </div>
                        <p className='text-center mt-4 w-32 break-words text-primary-blue'>{val.category}</p>
                    </div>
                );
            })

            }

            
        </div>
    </div>
    </>
  );
}

export default CategoriesComp;