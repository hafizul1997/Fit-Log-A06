import React from 'react';
import WorkoutCard from '../../WorkoutCard';
import { IWorkout } from '@/app/Type.ts/Type';
const getWorkOuts= async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data=await res.json();
    return data;
}

const Workouts =async() => {
    const workOutData=await getWorkOuts();
    return (
       
        <section className='w-full bg-[#000000] pb-15'> 
        <div className='w-full  mx-auto  max-w-\[1280px\]'>
            <div className='mx-6'>
            <div className='text-white py-10'>  
                  <h1 className='text-4xl font-bold'>THE LIBRARY</h1>
                  <p className='text-[#9CA3AF] mt-1'>Twelve lifts covering every major muscle group.</p>
            </div>
                <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  '>
                {
  workOutData.map((workout:IWorkout) => {
    return <WorkoutCard key={workout.id} workout={workout} ></WorkoutCard>
  })}
                </div>
     </div>
         </div>
        </section>
       
    );
};

export default Workouts;