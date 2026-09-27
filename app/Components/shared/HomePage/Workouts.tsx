import React from 'react';
import WorkoutCard from '../../WorkoutCard';
import { IWorkout } from '@/app/Type.ts/Type';
const getWorkOuts= async()=>{
    const res=await fetch('https://api.api-store.workers.dev/api/fitlog');
    const data=await res.json();
    return data;
}

const Workouts =async() => {
    const workOutData=await getWorkOuts();
    return (
       
        <section
  id="library"
  className="w-full bg-[#000000] pb-15"
>
  <div className="mx-auto w-full max-w-\[1280px]">
    <div className="mx-6">

      <div className="py-10 text-white">
        <h1 className="text-4xl font-bold">
          THE LIBRARY
        </h1>

        <p className="mt-1 text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {workOutData.map((workout: IWorkout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>

    </div>
  </div>
</section>
       
    );
};

export default Workouts;