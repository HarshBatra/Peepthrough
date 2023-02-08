import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DrawerComp from "./DrawerComp"
import { useNavigate } from "react-router-dom";
import CardOfUsersLogin from "./CardOfUsersLogin"
import { Backdrop } from '@mui/material';

const Navbar = () => {
  const logo = "./Assets/Images/logo.png"
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className='w-screen flex flex-row shadow-lg h-16 items-center relative z-10'>
        <img className='logo h-8 ml-6 cursor-pointer' src={logo} alt="logo" onClick={()=>navigate("/")} />        
        <div className="nav-items flex-row ml-56 hidden md:flex">
            <div className="items items-center text-teal-500 flex flex-row gap-x-16">
                <Link to="/" className='z-50'>Home</Link>
                <a href="#categories" className='z-50'>Categories</a>
                <a href="#cities" className='z-50'>Cities</a>
                <a href="#testimonials" className='z-50'>Testimonials</a>
                <a href="#blog" className='z-50'>Blog</a>
            </div>
            <div className="login flex flex-row ml-16 gap-x-8">
                <button className="bg-teal-500 text-white w-32 h-8 px-4 border border-teal-500 rounded z-50 hover:bg-white hover:text-teal-500" onClick={()=>setOpen(!open)}>
                    Log In
                </button>
                <button className="bg-white text-teal-500 w-32 h-8 px-4 border border-teal-500 rounded z-50 hover:bg-teal-500 hover:text-white" onClick={()=>navigate("/advertise")}>
                    Advertise
                </button>
                <div className="ellipse-1 absolute w-[600px] h-[600px] top-[-25rem] right-[-7rem] rounded-full bg-gradient-to-r from-black z-20" style={{background: "linear-gradient(44.17deg, #000000 7.98%, rgba(0, 0, 0, 0) 132.21%)"}}></div>          
                <div className="ellipse-2 absolute w-[250px] h-[250px] top-[4.5rem] right-[-4rem] rounded-full bg-gradient-to-bl from-teal-500 z-30"></div>          
            </div>
        </div>
        <DrawerComp setOpen={setOpen} />
        <Backdrop
          sx={{ color: '#fff', zIndex: 100}}
          open={open}
          className="z-40"
        >
            <CardOfUsersLogin className="z-50" setOpen={setOpen} />
        </Backdrop>
    </div>
  )
}

export default Navbar;