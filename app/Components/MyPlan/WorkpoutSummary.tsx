
"use client";

import { IWorkout } from "@/app/Type.ts/Type";

interface WorkoutSummaryProps {
  workouts: IWorkout[];
}

const WorkoutSummary = ({ workouts }: WorkoutSummaryProps) => {
  const totalExercises = workouts.length;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
   <div
  className="
    mb-5
    h-[90px]
    w-full
    overflow-hidden
    rounded-lg
    bg-[#222630]

    sm:mb-6
    sm:h-[105px]
    sm:rounded-xl

    md:h-[115px]

    lg:mb-8
    lg:h-[122px]
    lg:rounded-2xl
  "
>
  <table className="h-full w-full">
    <tbody>
      <tr>
        {/* Exercises */}
        <td className="w-1/3 border-r border-gray-700 px-1.5 text-center sm:px-4 lg:px-6">
          <p className="text-[8px] font-medium uppercase leading-tight tracking-wide text-gray-400 sm:text-[10px] md:text-xs">
            Exercises
          </p>

          <h2 className="mt-1 text-xl font-bold leading-none text-[#C2F800] sm:text-2xl md:text-3xl lg:mt-2 lg:text-4xl">
            {totalExercises}
          </h2>
        </td>

        {/* Minutes */}
        <td className="w-1/3 border-r border-gray-700 px-1.5 text-center sm:px-4 lg:px-6">
          <p className="text-[8px] font-medium uppercase leading-tight tracking-wide text-gray-400 sm:text-[10px] md:text-xs">
            Minutes
          </p>

          <h2 className="mt-1 text-xl font-bold leading-none text-white sm:text-2xl md:text-3xl lg:mt-2 lg:text-4xl">
            {totalMinutes}
          </h2>
        </td>

        {/* Calories */}
        <td className="w-1/3 px-1.5 text-center sm:px-4 lg:px-6">
          <p className="text-[8px] font-medium uppercase leading-tight tracking-wide text-gray-400 sm:text-[10px] md:text-xs">
            Calories
          </p>

          <h2 className="mt-1 text-xl font-bold leading-none text-white sm:text-2xl md:text-3xl lg:mt-2 lg:text-4xl">
            {totalCalories}
          </h2>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  );
};

export default WorkoutSummary;

