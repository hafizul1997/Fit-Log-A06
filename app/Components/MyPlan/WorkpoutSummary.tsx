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
   <div> 
    <div className="mb-8 h-[122px] w-full max-w-[1184px] overflow-hidden rounded-2xl bg-[#222630]">
  <table className="h-full w-full">
    <tbody>
      <tr>
        {/* Exercises */}
        <td className="w-1/3 border-r border-gray-700 px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Exercises
          </p>

          <h2 className="mt-2 text-4xl font-bold text-[#C2F800]">
            {totalExercises}
          </h2>
        </td>

        {/* Minutes */}
        <td className="w-1/3 border-r border-gray-700 px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Minutes
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            {totalMinutes}
          </h2>
        </td>

        {/* Calories */}
        <td className="w-1/3 px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Calories
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            {totalCalories}
          </h2>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default WorkoutSummary;