import { IWorkout } from '@/app/Type.ts/Type';
import Image from "next/image";
import Link from "next/link";
import AddToPlanButton from "@/app/WorkoutDetails/AddToPlanButton";
import {
  FaDumbbell,
  FaFire,
  FaClock,
  FaStar,
  FaLayerGroup,
   FaBookmark
} from "react-icons/fa";
import React from 'react';
import SaveforLaterButton from '@/app/WorkoutDetails/SavedButton';
import SavedButton from '@/app/WorkoutDetails/SavedButton';
interface pageDetailsProps{
    params:Promise<{
        id:string;
    }>;
}
const getWorkOuts= async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data=await res.json();
    return data;
}

const pageDetails =async({params}:pageDetailsProps) => {
    const{id}=await params;
    const workoutsData=await getWorkOuts();
    const workout=workoutsData.find((workout:IWorkout) => workout.id === Number(id));
    return (
         <main className="min-h-screen bg-black px-4 py-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid min-h-[797px] grid-cols-1 overflow-hidden rounded-3xl bg-[#222630] lg:grid-cols-2">

          {/*  IMAGE */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/*CONTENT */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">

            {/* Name */}
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 leading-7 text-gray-300">
              {workout.description}
            </p>

            {/* Muscle Groups using map for array of data*/}
            <div className="mt-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
                Muscle Groups
              </h2>

              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle:string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1.5 text-sm font-semibold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            {/* DETAILS TABLE*/}
            <div className="mt-7 overflow-hidden rounded-xl border border-gray-700">
              <div className="divide-y divide-gray-700">

                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">Equipment</span>
                  <span className="font-medium text-white">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="font-medium text-white">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">Sets</span>
                  <span className="font-medium text-white">
                    {workout.sets}
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">Reps</span>
                  <span className="font-medium text-white">
                    {workout.reps}
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">Duration</span>
                  <span className="font-medium text-white">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">Calories</span>
                  <span className="font-medium text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">Rating</span>
                  <span className="flex items-center gap-2 font-medium text-white">
                    <FaStar className="text-[#C2F800]" />
                    {workout.rating}
                  </span>
                </div>

              </div>
            </div>

            {/* INSTRUCTIONS  */}
            <div className="mt-7">
              <h2 className="text-xl font-bold text-white">
                Instructions
              </h2>

              <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-300">
                {workout.instructions.map((instruction:string, index:number) => (
                  <li key={index} className="leading-6">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/*  BUTTON  */}
             
             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
<AddToPlanButton workout={workout}></AddToPlanButton>
<SavedButton workout={workout} />

</div>

          </div>
        </div>
      </div>
    </main>
    );
};

export default pageDetails;