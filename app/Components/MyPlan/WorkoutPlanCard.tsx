"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import {
  FaClock,
  FaFire,
  FaStar,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import toast from "react-hot-toast";

import { IWorkout } from "@/app/Type.ts/Type";
import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";

interface WorkoutPlanCardProps {
  workout: IWorkout;
  onRemove: (id: number) => void;
  showCompleteButton?: boolean;
}

const WorkoutPlanCard = ({
  workout,
  onRemove,
  showCompleteButton = false,
}: WorkoutPlanCardProps) => {
  const router = useRouter();

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "WorkoutPlanCard must be used inside WorkoutProvider"
    );
  }

  const {
    completedWorkouts,
    setCompletedWorkouts,
  } = context;

  const isCompleted = completedWorkouts.includes(workout.id);

  // Mark workout as done
  const handleMarkAsDone = () => {
    if (isCompleted) return;

    setCompletedWorkouts((prev) => [
      ...prev,
      workout.id,
    ]);

    toast.success("Workout marked as done!");
  };

  return (
    <div className="flex h-[122px] w-full max-w-[1186px] items-center gap-5 rounded-2xl bg-[#222630] p-4">

      {/* Workout Image */}
      <div className="relative h-[90px] w-[100px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Information */}
      <div className="min-w-0 flex-1">

        <h3 className="truncate text-lg font-bold text-white">
          {workout.name}
        </h3>

        <p className="mt-1 truncate text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-3 flex items-center gap-5 text-sm text-gray-300">

          {/* Duration */}
          <span className="flex items-center gap-1.5">
            <FaClock className="text-gray-400" />
            {workout.duration}m
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1.5">
            <FaFire className="text-gray-400" />
            {workout.caloriesBurned}
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1.5">
            <FaStar className="text-[#C2F800]" />
            {workout.rating}
          </span>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex shrink-0 items-center gap-2">

        {/* View Details */}
        <button
          onClick={() =>
            router.push(`/Workouts/${workout.id}`)
          }
          className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C2F800]"
        >
          View Details
        </button>

        {/* Mark as Done */}
        {showCompleteButton && (
          <button
            onClick={handleMarkAsDone}
            disabled={isCompleted}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition ${
              isCompleted
                ? "cursor-not-allowed border-[#C2F800] bg-[#C2F800] text-black"
                : "border-gray-600 bg-transparent text-white hover:border-[#C2F800]"
            }`}
          >
            {isCompleted && <FaCheck />}

            Mark as Done
          </button>
        )}

        {/* Remove */}
        <button
          onClick={() => onRemove(workout.id)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-500 hover:text-white"
          aria-label="Remove workout"
        >
          <FaTimes />
        </button>

      </div>
    </div>
  );
};

export default WorkoutPlanCard;