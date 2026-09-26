"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaClock,
  FaFire,
  FaStar,
  FaTimes,
} from "react-icons/fa";

import { IWorkout } from "@/app/Type.ts/Type";

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

  return (
    <div className="flex h-[122px] w-full max-w-[1186px] items-center gap-5 rounded-2xl bg-[#222630] p-4">

      {/* Image */}
      <div className="relative h-[90px] w-[100px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-lg font-bold text-white">
          {workout.name}
        </h3>

        <p className="mt-1 truncate text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-3 flex items-center gap-5 text-sm text-gray-300">

          <span className="flex items-center gap-1.5">
            <FaClock className="text-gray-400" />
            {workout.duration}m
          </span>

          <span className="flex items-center gap-1.5">
            <FaFire className="text-gray-400" />
            {workout.caloriesBurned}
          </span>

          <span className="flex items-center gap-1.5">
            <FaStar className="text-[#C2F800]" />
            {workout.rating}
          </span>

        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">

        {/* View Details - Always */}
        <button
          onClick={() =>
            router.push(`/Workouts/${workout.id}`)
          }
          className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C2F800]"
        >
          View Details
        </button>

        {/* Mark as Done - Only Today's Plan */}
        {showCompleteButton && (
          <button
            className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C2F800]"
          >
            Mark as Done
          </button>
        )}

        {/* Remove - Always */}
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