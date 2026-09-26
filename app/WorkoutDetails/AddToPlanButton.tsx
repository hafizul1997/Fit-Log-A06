"use client";

import { useContext } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

import { IWorkout } from "@/app/Type.ts/Type";
import { WorkoutContext } from "@/app/Components/Context/WorkoutContext";

interface AddToPlanButtonProps {
  workout: IWorkout;
}

const AddToPlanButton = ({
  workout,
}: AddToPlanButtonProps) => {

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "AddToPlanButton must be used inside WorkoutProvider"
    );
  }

  const {
    myPlan,
    setMyPlan,
  } = context;

  const alreadyAdded = myPlan.some(
    (item) => item.id === workout.id
  );

  const handleAddToPlan = () => {

    if (alreadyAdded) {
      toast.error("Workout is already in your plan.");
      return;
    }

    setMyPlan((prev) => [
      ...prev,
      workout,
    ]);

    toast.success("Added to today's plan!");
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-6 py-3.5 font-bold transition ${
        alreadyAdded
          ? "cursor-not-allowed border-gray-600 bg-gray-600 text-gray-300"
          : "border-[#C2F800] bg-[#C2F800] text-black hover:bg-[#d4ff33]"
      }`}
    >
      {alreadyAdded ? (
        <>
          <FaCheck />
          Added to Plan
        </>
      ) : (
        <>
          <FaPlus />
          Add to Today's Plan
        </>
      )}
    </button>
  );
};

export default AddToPlanButton;