import React from 'react';
import Image from 'next/image';
import Banner from '@/app/assets/banner.png'
import { FaArrowDown } from 'react-icons/fa';
const HeroPage = () => {
    return (  
        <div className='w-full bg-[#000000]'> 
        <div className='w-full max-w-\[1280px\]  mx-auto h-auto pb-15'>
            <div className={`bg-[#222630] grid  rounded-2xl gap-1  sm:grid-cols-1 sm:gap-3  md:gap-10 lg:grid-cols-2 gap-20  mx-6  p-10 justify-center h-auto  items-center`}> 
            <div className='flex flex-col items-center lg:items-start gap-3 ml-4'> 
                <p className='text-[#C2F800] text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]'>WORKOUT LIBRARY</p>
                <div>  
                <h1 className=' w-fit text-white  font-bold text-center text-xl sm:text-2xl  md:text-3xl  lg:text-5xl lg:text-left'>TRAIN WITH INTENT. LOG <br/> EVERY SET.</h1>
                </div>
                <p className='text-[#9CA3AF] ita text-[8px] sm:text-[10px] md:text-[12px] lg:text-[15px]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into today's plan, and watch the week's work add up.</p>
                <a href="#library" className="inline-flex cursor-pointer items-center justify-center
                gap-1.5  bg-[#C2F800]  px-3  py-2  text-[10px] font-bold transition hover:bg-[#d4ff33] text-black sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs md:px-5 md:py-3 md:text-base  lg:px-6 lg:py-3.5 lg:text-xl">BROWSE WORKOUTS<FaArrowDown className="shrink-0" /></a>

            </div>
            <div className='flex justify-center items-center'>
                <Image src={Banner} alt='Banner Images' width={334} height={334} className="h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] lg:h-[334px] lg:w-[334px]"/> 
            </div>
        </div>
 </div>
  </div>
    );
};

export default HeroPage;