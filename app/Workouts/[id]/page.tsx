
import { IWorkout } from "@/app/Type.ts/Type";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaFire, FaClock, FaStar } from "react-icons/fa";
import AddToPlanButton from "@/app/WorkoutDetails/AddToPlanButton";
import SavedButton from "@/app/WorkoutDetails/SavedButton";

interface PageDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getworkouts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  const data = await res.json();

  return data;
};

const PageDetails = async ({ params }: PageDetailsProps) => {
  // URL  dynamic id 
  const { id } = await params;

  const workouts = await getworkouts();

  // workout 
  const workout: IWorkout | undefined = workouts.find(
    (workout: IWorkout) => workout.id === Number(id)
  );

  // workout  404
  if (!workout) {
    notFound();
  }

  return (
   <main className="min-h-screen bg-black px-2 py-3 sm:px-3 sm:py-7 md:px-4 md:py-10">

  <div className="mx-auto w-full max-w-[1280px]">

    <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-[#222630] sm:rounded-3xl md:rounded-3xl lg:min-h-[797px] lg:grid-cols-2">

      {/* Image */}
      <div className="relative h-[160px] sm:h-[280px] md:h-[350px] lg:h-auto lg:min-h-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-col p-3 sm:p-5 md:p-8 lg:p-10">

        {/* Title */}
        <h1 className="break-words text-xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-4xl">
          {workout.name}
        </h1>

        {/* Description */}
        <p className="mt-2 text-[11px] leading-4 text-gray-300 sm:mt-4 sm:text-sm sm:leading-6 md:text-base md:leading-7">
          {workout.description}
        </p>

        {/* Muscle Groups */}
        <div className="mt-3 sm:mt-5 md:mt-6">

          <h2 className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-gray-400 sm:mb-3 sm:text-xs md:text-sm">
            Muscle Groups
          </h2>

          <div className="flex flex-wrap gap-1">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-1.5 py-0.5 text-[9px] font-semibold text-black sm:px-3 sm:py-1.5 sm:text-xs md:text-sm"
              >
                {muscle}
              </span>
            ))}
          </div>

        </div>

        {/* Information */}
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-700 sm:mt-6 sm:rounded-xl md:mt-7">

          <div className="divide-y divide-gray-700">

            <div className="flex items-center justify-between gap-2 px-2.5 py-2 sm:px-4 sm:py-3">
              <span className="shrink-0 text-[10px] text-gray-400 sm:text-sm">
                Equipment
              </span>

              <span className="min-w-0 break-words text-right text-[10px] font-medium text-white sm:text-sm">
                {workout.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 px-2.5 py-2 sm:px-4 sm:py-3">
              <span className="shrink-0 text-[10px] text-gray-400 sm:text-sm">
                Difficulty
              </span>

              <span className="text-right text-[10px] font-medium text-white sm:text-sm">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between px-2.5 py-2 sm:px-4 sm:py-3">
              <span className="text-[10px] text-gray-400 sm:text-sm">
                Sets
              </span>

              <span className="text-[10px] font-medium text-white sm:text-sm">
                {workout.sets}
              </span>
            </div>

            <div className="flex items-center justify-between px-2.5 py-2 sm:px-4 sm:py-3">
              <span className="text-[10px] text-gray-400 sm:text-sm">
                Reps
              </span>

              <span className="text-[10px] font-medium text-white sm:text-sm">
                {workout.reps}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 px-2.5 py-2 sm:px-4 sm:py-3">
              <span className="text-[10px] text-gray-400 sm:text-sm">
                Duration
              </span>

              <span className="flex shrink-0 items-center gap-1 text-[10px] font-medium text-white sm:gap-2 sm:text-sm">
                <FaClock className="h-2.5 w-2.5 text-gray-400 sm:h-4 sm:w-4" />
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 px-2.5 py-2 sm:px-4 sm:py-3">
              <span className="text-[10px] text-gray-400 sm:text-sm">
                Calories
              </span>

              <span className="flex shrink-0 items-center gap-1 text-[10px] font-medium text-white sm:gap-2 sm:text-sm">
                <FaFire className="h-2.5 w-2.5 text-gray-400 sm:h-4 sm:w-4" />
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 px-2.5 py-2 sm:px-4 sm:py-3">
              <span className="text-[10px] text-gray-400 sm:text-sm">
                Rating
              </span>

              <span className="flex items-center gap-1 text-[10px] font-medium text-white sm:gap-2 sm:text-sm">
                <FaStar className="h-2.5 w-2.5 text-[#C2F800] sm:h-4 sm:w-4" />
                {workout.rating}
              </span>
            </div>

          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 sm:mt-6 md:mt-7">

          <h2 className="text-base font-bold text-white sm:text-xl">
            Instructions
          </h2>

          <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-[10px] text-gray-300 sm:mt-4 sm:space-y-3 sm:pl-5 sm:text-sm md:text-base">

            {workout.instructions.map((instruction, index) => (
              <li
                key={index}
                className="break-words leading-4 sm:leading-6"
              >
                {instruction}
              </li>
            ))}

          </ol>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex w-full flex-col gap-2 sm:mt-7 sm:flex-row sm:gap-3 md:mt-8">
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

