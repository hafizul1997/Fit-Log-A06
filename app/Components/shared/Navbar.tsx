
import React from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png'
import Navlinks from './Navlinks';
import MyPlanButton from '@/app/WorkoutDetails/MyPlanButton';
import SavedNavButton from '../Saved/SavedNavButton';
const Navbar = () => {
  {/*Using Daisy UI navbar */}
    return (
      
      <div className='w-full'>  
      <div className='max-w-\[1280px\]'>   
        <div className="navbar  bg-[#000000] shadow-sm  w-full ">
  <div className="navbar-start">
    <div className="dropdown">
  <div
    tabIndex={0}
    role="button"
    className="btn btn-neutral lg:hidden"
  >
    <svg
      aria-label="Menu"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </div>

  <ul
    tabIndex={-1}
    className="
      menu
      menu-lg
      dropdown-content
      z-[50]
      mt-3
     w-[calc(100vw-20px)]
      !bg-black
      py-2
      shadow
    "
  >
    {/*this component uses for menu link for mobile device*/}
    <Navlinks className="w-full  my-1 py-2" />
  </ul>
</div>
    <div className='flex gap-5 ml-6 items-center'>
      <Image src={Logo} alt='Logo' width={28} height={28} className="h-6 w-6 hidden sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
      <h1 className='text-white font-bold text-xs sm:text-sm md:text-md lg:text-xl'>FITLOG</h1>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/*Navlinks component ussing for desktop device*/}
     <Navlinks/>
    </ul>
  </div>
  <div className="navbar-end flex gap-1 sm:gap-2 mr-4 lg:gap-3 mr-6">
    <MyPlanButton />
    <SavedNavButton />
  </div>
</div>
 </div>
  </div>
    );
};

export default Navbar;