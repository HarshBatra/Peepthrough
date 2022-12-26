import React from 'react';

const Navbar = () => {
  const logo = "./Assets/Images/logo.png"  
  return (
    <div className='w-screen flex flex-row shadow-lg h-16 items-center'>
        <img className='logo h-8 ml-6' src={logo} alt="logo"/>        
        <div className="nav-items flex flex-row ml-56">
            <div className="items items-center text-teal-500 flex flex-row gap-x-16">
                <div>Home</div>
                <div>Categories</div>
                <div>Cities</div>
                <div>Testimonials</div>
                <div>Blog</div>
            </div>
            <div className="login flex flex-row ml-16 gap-x-8">
                <button class="bg-teal-500 text-white w-32 h-8 px-4 rounded z-10">
                    Log In
                </button>
                <button class="bg-white text-teal-500 w-32 h-8 px-4 border border-teal-500 rounded z-10">
                    Advertise
                </button>
                <div className="ellipse-1 absolute w-[600px] h-[600px] top-[-27rem] right-[-9rem] rounded-full bg-gradient-to-r from-black"></div>          
                <div className="ellipse-2 absolute w-[250px] h-[250px] top-[4.5rem] right-[-4rem] rounded-full bg-gradient-to-bl from-teal-500 "></div>          
            </div>
        </div>
    </div>
  )
}

export default Navbar;