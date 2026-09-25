import React from 'react';
import Image from 'next/image';
import Banner from '@/app/assets/banner.png'
const HeroPage = () => {
    return (  
        <div className='w-full bg-[#000000]'> 
        <div className='w-full max-w-\[1280px\]  mx-auto min-h-screen'>
            <div className={`bg-[#222630] grid  rounded-2xl  sm:grid-cols-1  lg:grid-cols-2 gap-20  mx-6  p-10 justify-center h-auto  items-center`}> 
            <div className='flex flex-col items-center gap-5 lg:items-start'> 
                <p className='text-[#C2F800] text-sm'>WORKOUT LIBRARY</p>
                <div>  
                <h1 className=' w-fit text-white  font-bold text-center text-3xl  lg:font-extrabold lg:text-left lg:text-5xl '>TRAIN WITH INTENT. LOG <br/> EVERY SET.</h1>
                </div>
                <p className='text-[#9CA3AF] text-[15px]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into today's plan, and watch the week's work add up.</p>
<button className='btn bg-[#C2F800] font-bold text-[14px] w-[180px] h-[40px] shadow-2xl'>BROWSE WORKOUTS</button>
            </div>
            <div className='flex justify-center items-center'>
                <Image src={Banner} alt='Banner Images' width={334} height={334}/> 
            </div>
        </div>
 </div>
  </div>
    );
};

export default HeroPage;