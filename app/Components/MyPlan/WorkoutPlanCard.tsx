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
    <div
      className="
        flex
        min-h-[110px]
        w-full
        items-center
        gap-2
        rounded-xl
        bg-[#222630]
        p-2

        sm:min-h-[115px]
        sm:gap-3
        sm:rounded-2xl
        sm:p-3

        md:gap-4
        md:p-4

        lg:h-[122px]
        lg:min-h-0
        lg:gap-5
        lg:p-4
      "
    >
      {/* Workout Image */}
      <div
        className="
          relative
          h-[70px]
          w-[70px]
          shrink-0
          overflow-hidden
          rounded-lg

          sm:h-[80px]
          sm:w-[85px]
          sm:rounded-xl

          md:h-[85px]
          md:w-[90px]

          lg:h-[90px]
          lg:w-[100px]
        "
      >
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Information */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            truncate
            text-sm
            font-bold
            text-white

            sm:text-base
            md:text-lg
          "
        >
          {workout.name}
        </h3>

        <p
          className="
            mt-0.5
            truncate
            text-[10px]
            text-gray-400

            sm:mt-1
            sm:text-xs

            md:text-sm
          "
        >
          {workout.equipment}
        </p>

        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-[10px]
            text-gray-300

            sm:mt-3
            sm:gap-3
            sm:text-xs

            md:gap-5
            md:text-sm
          "
        >
          {/* Duration */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <FaClock className="h-2.5 w-2.5 shrink-0 text-gray-400 sm:h-3 sm:w-3" />
            {workout.duration}m
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <FaFire className="h-2.5 w-2.5 shrink-0 text-gray-400 sm:h-3 sm:w-3" />
            {workout.caloriesBurned}
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <FaStar className="h-2.5 w-2.5 shrink-0 text-[#C2F800] sm:h-3 sm:w-3" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div
        className="
          flex
          shrink-0
          items-center
          gap-1

          sm:gap-1.5
          md:gap-2
        "
      >
        {/* View Details */}
        <button
          type="button"
          onClick={() =>
            router.push(`/Workouts/${workout.id}`)
          }
          className="
            rounded-md
            border
            border-gray-600
            px-1.5
            py-1.5
            text-[9px]
            font-semibold
            text-white
            transition
            hover:border-[#C2F800]

            sm:rounded-lg
            sm:px-2
            sm:py-2
            sm:text-[10px]

            md:px-3
            md:text-xs

            lg:px-4
            lg:text-sm
          "
        >
          View Details
        </button>

        {/* Mark as Done */}
        {showCompleteButton && (
          <button
            type="button"
            onClick={handleMarkAsDone}
            disabled={isCompleted}
            className={`
              flex
              items-center
              gap-1
              rounded-md
              border
              px-1.5
              py-1.5
              text-[9px]
              font-semibold
              transition

              sm:gap-1.5
              sm:rounded-lg
              sm:px-2
              sm:py-2
              sm:text-[10px]

              md:gap-2
              md:px-3
              md:text-xs

              lg:px-4
              lg:text-sm

              ${
                isCompleted
                  ? "cursor-not-allowed border-[#C2F800] bg-[#C2F800] text-black"
                  : "border-gray-600 bg-transparent text-white hover:border-[#C2F800]"
              }
            `}
          >
            {isCompleted && (
              <FaCheck className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" />
            )}

            Mark as Done
          </button>
        )}

        {/* Remove */}
        <button
          type="button"
          onClick={() => onRemove(workout.id)}
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-md
            text-gray-400
            transition
            hover:bg-red-500
            hover:text-white

            sm:h-8
            sm:w-8
            sm:rounded-lg

            md:h-9
            md:w-9
          "
          aria-label="Remove workout"
        >
          <FaTimes className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
