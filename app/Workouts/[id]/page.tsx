import { IWorkout } from "@/app/Type.ts/Type";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaFire, FaClock, FaStar } from "react-icons/fa";
import AddToPlanButton from "@/app/WorkoutDetails/AddToPlanButton";
import SavedButton from "@/app/WorkoutDetails/SavedButton";
import Workouts from "@/app/Components/shared/HomePage/Workouts";
interface PageDetailsProps {
  params: Promise<{
    id: string;
  }>;
}
const getworkouts=async()=>{
  const res=await fetch('https://api.api-store.workers.dev/api/fitlog');
  const data= await res.json();
  return data;
}

const PageDetails = async ({
  params,
}: PageDetailsProps) =>{
// URL থেকে dynamic id নেওয়া
  const { id } = await params;
  const workouts=await getworkouts();
  // local data থেকে workout খোঁজা
  const workout: IWorkout | undefined = workouts.find(
    (workout:IWorkout) => workout.id === Number(id));

  // workout না পাওয়া গেলে 404 page
  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid min-h-[797px] grid-cols-1 overflow-hidden rounded-3xl bg-[#222630] lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">

            {/* Title */}
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 leading-7 text-gray-300">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
                Muscle Groups
              </h2>

              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1.5 text-sm font-semibold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            {/* Workout Information */}
            <div className="mt-7 overflow-hidden rounded-xl border border-gray-700">
              <div className="divide-y divide-gray-700">

                {/* Equipment */}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">
                    Equipment
                  </span>

                  <span className="font-medium text-white">
                    {workout.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">
                    Difficulty
                  </span>

                  <span className="font-medium text-white">
                    {workout.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">
                    Sets
                  </span>

                  <span className="font-medium text-white">
                    {workout.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">
                    Reps
                  </span>

                  <span className="font-medium text-white">
                    {workout.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">
                    Duration
                  </span>

                  <span className="flex items-center gap-2 font-medium text-white">
                    <FaClock className="text-gray-400" />
                    {workout.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">
                    Calories
                  </span>

                  <span className="flex items-center gap-2 font-medium text-white">
                    <FaFire className="text-gray-400" />
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex justify-between px-4 py-3">
                  <span className="text-gray-400">
                    Rating
                  </span>

                  <span className="flex items-center gap-2 font-medium text-white">
                    <FaStar className="text-[#C2F800]" />
                    {workout.rating}
                  </span>
                </div>

              </div>
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-xl font-bold text-white">
                Instructions
              </h2>

              <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-300">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="leading-6"
                    >
                      {instruction}
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AddToPlanButton workout={workout} />

              <SavedButton workout={workout} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default PageDetails;