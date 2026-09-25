import React from 'react';
import Image from 'next/image';
import { FaClock, FaFire } from "react-icons/fa";
import { IWorkout } from '../Type.ts/Type';
interface IWorkoutProps{
  workout:IWorkout;
}
const WorkoutCard = ({workout}:IWorkoutProps) => {
    return (
        <div className="w-full  bg-[#222630]
    rounded-2xl
    border
    border-transparent
    transition-all
    duration-300
    hover:border-[#C2F800]
    hover:-translate-y-2  overflow-hidden rounded-2xl bg-[#222630] shadow-lg"
      >

        {/* Image */}
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={300}
          className="h-56 w-full object-cover"
        />

        <div className="p-5">

          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="mb-3 text-2xl font-bold text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="text-sm text-[#9CA3AF]">
            Equipment:{" "}
            <span className="text-white">
              {workout.equipment}
            </span>
          </p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-[#3A3F4A]" />

          {/* Stats */}
          <div className="flex items-center justify-between">
             
            <div className='flex gap-2 items-center '>
               <FaClock className="text-[#C2F800] text-lg" />
              <p className="font-semibold text-white">
                {workout.duration} min
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
                 <FaFire className="text-[#C2F800] text-lg" />
            <p className="font-semibold text-white"> {workout.caloriesBurned} kcal </p>
            </div>

            <div>
              <p className="text-xs text-[#9CA3AF]">
                Rating
              </p>
              <p className="mt-1 font-semibold text-[#C2F800]">
                ★ {workout.rating}
              </p>
            </div>

          </div>

        </div>
      </div>
    
    );
};

export default WorkoutCard;